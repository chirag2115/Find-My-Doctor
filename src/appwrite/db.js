import { databases } from './appwrite';

const DB_ID = 'your_db_id';
const COLLECTION_ID = 'doctors';

export const getDoctorsByFilter = async (city, specialty) => {
  try {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID, [
      Query.equal('city', city),
      Query.equal('specialty', specialty),
    ]);
    return res.documents;
  } catch (err) {
    console.log('Error fetching doctors:', err);
    return [];
  }
};
