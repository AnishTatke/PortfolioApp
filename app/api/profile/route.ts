import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db/mongo";

export async function GET() {
    try{
        const db = await connectToDB();
        const profile = await db.collection("user").findOne();
        if (!profile) {
            return NextResponse.json({
                error: "Profile not found"
            }, {
                status: 404
            });
        }
        return NextResponse.json(profile);
    } catch (err) {
        return NextResponse.json({
            error: "Failed to get profile"
        }, {
            status: 500
        });
    }
}