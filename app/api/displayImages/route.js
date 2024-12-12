import { connectMongoDB } from "./../../lib/mongodb";
import Uploads from "./../../models/uploads";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectMongoDB();
        const images = await Uploads.find().select('name data contentType');
        return NextResponse.json({ success:true, images});
    } catch (error) {
        return NextResponse.json({ success:false, error: "Failed"});
    }
}