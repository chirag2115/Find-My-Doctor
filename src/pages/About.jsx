// pages/About.jsx
export default function About() {
    return (
      <div className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-700">About Us</h1>
          <p className="text-lg mb-6 leading-relaxed">
            <strong>Find My Doctor</strong> is on a mission to make healthcare more accessible and transparent. We connect patients with trusted healthcare professionals in their area based on specialization, availability, and reviews.
          </p>
  
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                ✅ <strong>Search Made Simple:</strong> Easily filter doctors by location and specialization.
              </li>
              <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                ✅ <strong>Verified Profiles:</strong> All doctors listed are verified and reviewed for quality care.
              </li>
              <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                ✅ <strong>User-Friendly Interface:</strong> Clean and responsive design for all devices.
              </li>
              <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                ✅ <strong>Secure Login System:</strong> Safe and private authentication using Appwrite.
              </li>
              <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                ✅ <strong>Contact & Support:</strong> We’re here to help you connect with the right healthcare expert.
              </li>
            </ul>
          </div>
  
          <p className="mt-10 text-md text-gray-600">
            Whether you're new to an area or looking for a second opinion, <strong>Find My Doctor</strong> ensures you get the care you deserve quickly and confidently.
          </p>
        </div>
      </div>
    );
  }
  