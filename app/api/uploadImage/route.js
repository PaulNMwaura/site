import { connectMongoDB } from "./../../lib/mongodb";
import Uploads from "./../../models/uploads";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        await connectMongoDB();

        const data = await req.formData();
        const file = data.get('file');

        if(!file) {
            return NextResponse.json({ success: false });
        }

        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        const newImage = new Uploads({
            name: file.name,
            data: buffer,
            contentType: file.type
        });

        await newImage.save();

        return NextResponse.json({ message: "Succesfully Uploaded", success:true});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed", success:false});
    }

}