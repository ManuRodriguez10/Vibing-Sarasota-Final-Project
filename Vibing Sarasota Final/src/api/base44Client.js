import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication
// For local development, set requiresAuth to false if you don't have a valid Base44 app
// You can also use environment variables: import.meta.env.VITE_BASE44_APP_ID
export const base44 = createClient({
  appId: import.meta.env.VITE_BASE44_APP_ID || "69110adb8f57eddad73ea141", 
  requiresAuth: false // Disabled for local development - set to true when you have a valid Base44 app
});
