import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Project } from '@/lib/models/Project';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  try {
    const auth = await verifyAdminAuth(req);
    if (!auth.authorized) {
      return NextResponse.json({ error: auth.error }, { status: 401 });
    }

    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await verifyAdminAuth(req);
    if (!auth.authorized) {
      return NextResponse.json({ error: auth.error }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();

    const newProject = await Project.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
