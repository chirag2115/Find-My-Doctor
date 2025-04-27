// import { Client, Databases, ID } from 'appwrite';

// const client = new Client()
//   .setEndpoint('https://cloud.appwrite.io/v1') 
//   .setProject('67fbbefe001dceb94372');

// const databases = new Databases(client);

// export { client, databases, ID };




import { Client, Databases, ID, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('67fbbefe001dceb94372');

const databases = new Databases(client);
const account = new Account(client); // ✅ Create Account instance

export { client, databases, ID, account }; // ✅ Export it
