import { Query } from 'appwrite';
import { useEffect, useState } from "react";
import { databases, ID, account } from "../appwrite/appwriteConfig";

export default function DoctorCard({ doctor }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const collectionId = "6807c236002362c1ff13";
  const databaseId = "67fbff3400286a3b9c64";

  useEffect(() => {
    fetchReviews();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      await account.get();
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("doctorId", doctor.$id)
      ]);
      setReviews(response.documents);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleAddReview = async () => {
    if (!isLoggedIn) {
      alert("Please log in to add a review.");
      return;
    }
    if (!newReview.trim()) return;
    try {
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        {
          doctorId: doctor.$id,
          content: newReview
        }
      );
      setReviews([...reviews, response]);
      setNewReview("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg border p-6 mb-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Doctor Info */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">{doctor.name}</h3>
          <p><strong>Specialty:</strong> {doctor.specialty}</p>
          <p><strong>Phone:</strong> {doctor.phone}</p>
          <p><strong>Address:</strong> {doctor.address}</p>
          <p><strong>City:</strong> {doctor.city}</p>
        </div>

        {/* Right: Reviews */}
        <div className="md:w-1/2 p-4">
          <h4 className="text-xl font-semibold mb-2">Patient Reviews:</h4>
          {reviews.length === 0 ? (
            <p className="text-gray-500 mb-2">No reviews yet.</p>
          ) : (
            <ul className="list-disc ml-5 space-y-2 mb-4">
              {reviews.map((review) => (
                <li key={review.$id} className="text-gray-700">{review.content}</li>
              ))}
            </ul>
          )}

          <div>
            <input
              type="text"
              className="border rounded px-3 py-2 w-full mb-2"
              placeholder="Write a review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
              onClick={handleAddReview}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
