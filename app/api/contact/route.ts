import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Message } from '@/lib/models/Message';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', id: newMessage._id },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
