import { useState } from 'react';
import { databases, Query } from '../appwrite';
import DoctorCard from '../components/DoctorCard';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [isSearched, setIsSearched] = useState(false); // Track if search was performed

  const searchDoctors = async () => {
    try {
      const filters = [];

      if (specialty) filters.push(Query.equal('specialty', specialty));
      if (location) filters.push(Query.equal('city', location));

      const response = await databases.listDocuments(
        '67fbff3400286a3b9c64', // Database ID
        '67fbff5c002cbfd21882', // Collection ID
        filters
      );

      setDoctors(response.documents);
      setIsSearched(true); // Mark that a search was made
    } catch (error) {
      console.log('Error fetching doctors:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Find Your Doctor</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <select
            className="p-3 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Nadiad">Nadiad</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>

          <select
            className="p-3 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select Specialty</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>

          <button
            onClick={searchDoctors}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {isSearched ? (
            doctors.length > 0 ? (
              doctors.map((doctor) => (
                <DoctorCard key={doctor.$id} doctor={doctor} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No doctors found for selected filters.
              </p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
