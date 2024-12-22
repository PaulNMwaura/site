import { connectMongoDB } from "./../../lib/mongodb";
import Lister from "./../../models/listerapply";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectMongoDB();
        // Fetch all approved listers (add filter logic if needed)
        const listers = await Lister.find({})
        return NextResponse.json(listers, { status: 201 });
    } catch (error) {
        console.error("Error fetching listers:", error);
        return NextResponse.json({error: "Failed to fetch listers."}, { status: 500 });

    }
}