import { connectMongoDB } from "./../../lib/mongodb";
import Lister from "./../../models/listerapply";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {firstname, lastname, location, phone, email, schedule, status} = await req.json();
        await connectMongoDB();
        await Lister.create({firstname, lastname, location, phone, email, schedule, status})

        return NextResponse.json({message: "User Registered."}, { status: 201 });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({message: "Error occured while registering the user."}, { status: 500});
    }
}