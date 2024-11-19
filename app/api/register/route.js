import { connectMongoDB } from "./../../lib/mongodb";
import User from "./../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const {name, phone, email, password} = await req.json();
        const hashedPass = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({name, phone, email, password: hashedPass})

        return NextResponse.json({message: "User Registered."}, { status: 201 });
    } catch (error) {
        return NextResponse.json({message: "Error occured while registering the user."}, { status: 500});
    }
}