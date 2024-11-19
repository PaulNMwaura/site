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
                const {email, password }= credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    // if the user does not exist in our database...
                    if(!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    // if user does exits, check if hash of both inputed password, and stored password, matches
                    if(!passwordsMatch) return null;

                    // if user exists, return the user
                    return user;
                } catch (error){
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
