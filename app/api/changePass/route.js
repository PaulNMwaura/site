import { connectMongoDB } from './../../lib/mongodb';
import { NextResponse } from "next/server";
import User from "./../../models/user";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({message: "Method not allowed."}, { status: 405 });
  }

  const { email, newPassword } = await req.json();

  // Validate request body
  if (!email || !newPassword) {
    return NextResponse.json({message: "Email and new password are required."}, { status: 400 });
  }

  try {
    await connectMongoDB(); // Connect to MongoDB

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({message: "User not found."}, { status: 404 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    const result = await User.updateOne(
      { email }, // Filter
      { $set: { password: hashedPassword } } // Update operation
    );

    if (result.modifiedCount === 1) {
        return NextResponse.json({message: "Password updated successfully."}, { status: 200 });
    } else {
        return NextResponse.json({message: "Failed to update password."}, { status: 500 });
    }
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json({message: "Internal server error."}, { status: 500 });
  }
}