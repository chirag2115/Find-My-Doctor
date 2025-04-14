// import { useState, useEffect } from 'react';
// import { databases, Query } from '../appwrite';
// import DoctorCard from '../components/DoctorCard';

// export default function Home() {
//   const [doctors, setDoctors] = useState([]);
//   const [location, setLocation] = useState('');
//   const [specialty, setSpecialty] = useState('');

//   const searchDoctors = async () => {
//     try {
//       const response = await databases.listDocuments(
//         '67fbff3400286a3b9c64',
//         '67fbff5c002cbfd21882',
//         [
//           specialty && Query.equal('specialty', specialty),
//           location && Query.search('location', location)
//         ].filter(Boolean)
//       );
//       setDoctors(response.documents);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Find Your Doctor</h1>

//         <div className="flex flex-col md:flex-row gap-4 mb-10">
//           <select
//             className="p-3 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="">Select City</option>
//             <option value="Vadodara">Vadodara</option>
//             <option value="Nadiad">Nadiad</option>
//             <option value="Ahmedabad">Ahmedabad</option>
//           </select>

//           <select
//             className="p-3 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={specialty}
//             onChange={(e) => setSpecialty(e.target.value)}
//           >
//             <option value="">Select Specialty</option>
//             <option value="Cardiology">Cardiology</option>
//             <option value="Dermatology">Dermatology</option>
//             <option value="Neurology">Neurology</option>
//             <option value="Pediatrics">Pediatrics</option>
//             <option value="Orthopedics">Orthopedics</option>
//             <option value="Gynecology">Gynecology</option>
//             <option value="Ophthalmology">Ophthalmology</option>
//             <option value="Psychiatry">Psychiatry</option>
//             <option value="ENT">ENT</option>
//             <option value="General Physician">General Physician</option>
//           </select>

//           <button
//             onClick={searchDoctors}
//             className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {doctors.length > 0 ? (
//             doctors.map((doctor) => (
//               <DoctorCard key={doctor.$id} doctor={doctor} />
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-full">No doctors found for selected filters.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { databases, Query } from '../appwrite';
import DoctorCard from '../components/DoctorCard';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');

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
    } catch (error) {
      console.log('Error fetching doctors:', error);
    }
  };

  // Optional: Show all doctors initially
  useEffect(() => {
    searchDoctors();
  }, []);

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
            <option value="Vadodara">Vadodara</option>
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
            <option value="ENT">ENT</option>
            <option value="General Physician">General Physician</option>
          </select>

          <button
            onClick={searchDoctors}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorCard key={doctor.$id} doctor={doctor} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No doctors found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
