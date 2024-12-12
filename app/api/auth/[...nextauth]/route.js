import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "./../../../lib/mongodb";
import User from "./../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    // If the user does not exist in our database...
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    // If the hash of the input password and stored password do not match...
                    if (!passwordsMatch) return null;

                    // Return the user object (you can include any fields you need)
                    return { id: user._id.toString(), email: user.email };
                } catch (error) {
                    console.log("Error: ", error);
                    return null; // Return null if an error occurs
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            // If user is defined (on initial login), add userId to the token
            if (user) {
                token.userId = user.id; // Add userId to the token
            }
            return token;
        },
        async session({ session, token }) {
            // Add userId to the session from the token
            session.user = {
                ...session.user,
                userId: token.userId, // Attach userId to the session object
            };
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/", // Custom sign-in page
    },
};

const handler = NextAuth(authOptions);

export { authOptions };
export { handler as GET, handler as POST };
