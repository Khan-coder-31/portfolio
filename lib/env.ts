// No need to import MONGODB_URI from db.ts, we can check process.env directly

export function validateEnv() {
  const requiredEnvVars = ['MONGODB_URI'];
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}. Please check your .env.local file.`
    );
  }
}

// Run validation on startup in development
if (process.env.NODE_ENV === 'development') {
  validateEnv();
}
