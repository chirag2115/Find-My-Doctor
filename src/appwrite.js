// src/appwrite.js
import { Client, Account, Databases, Query, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID, Query };
