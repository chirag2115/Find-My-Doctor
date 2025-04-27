export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">Contact Us</h2>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
            For any help, feel free to reach out to any of our team members:
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Member 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Chirag Sathvara</h4>
              <p className="text-gray-700 mb-1">📞 Phone: <a href="tel:+919909715460" className="text-blue-500 hover:underline">+91 9909715460</a></p>
              <p className="text-gray-700">📧 Email: <a href="mailto:chiragsathvara936@gmail.com" className="text-blue-500 hover:underline">chiragsathvara936@gmail.com</a></p>
            </div>

            {/* Member 2 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Jaymin Raval</h4>
              <p className="text-gray-700 mb-1">📞 Phone: <a href="tel:+919925396071" className="text-blue-500 hover:underline">+91 9925396071</a></p>
              <p className="text-gray-700">📧 Email: <a href="mailto:jaymin@gmail.com" className="text-blue-500 hover:underline">ravaljaymin2908@gmail.com</a></p>
            </div>

            {/* Member 3 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Arjun Sarvaiya</h4>
              <p className="text-gray-700 mb-1">📞 Phone: <a href="tel:+918160521700" className="text-blue-500 hover:underline">+91 8160521700</a></p>
              <p className="text-gray-700">📧 Email: <a href="mailto:arjun@gmail.com" className="text-blue-500 hover:underline">arjun@gmail.com</a></p>
            </div>

            {/* Member 4 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Maulik</h4>
              <p className="text-gray-700 mb-1">📞 Phone: <a href="tel:+919737883206" className="text-blue-500 hover:underline">+91 9737883206</a></p>
              <p className="text-gray-700">📧 Email: <a href="mailto:maulik@gmail.com" className="text-blue-500 hover:underline">maulik@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
