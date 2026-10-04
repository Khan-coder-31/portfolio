import { NextRequest, NextResponse } from 'next/server';

export async function verifyAdminAuth(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { authorized: false, error: 'Admin password not configured on server' };
  }

  // The client sends the password as the token in the Authorization header
  if (authHeader === adminPassword) {
    return { authorized: true };
  }

  return { authorized: false, error: 'Unauthorized access' };
}
