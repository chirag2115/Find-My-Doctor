// export default function Contact() {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">Contact Us</h2>
  
//           <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
//             {/* Contact Info */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Information</h3>
//               <p className="text-gray-700 mb-2">📧 Email: <a className="text-blue-500 hover:underline">chiragsathvara936@gmail.com</a></p>
//               <p className="text-gray-700 mb-2">📞 Phone: <a className="text-blue-500 hover:underline">+91 9909715460 </a></p>
//               <p className="text-gray-700">🏥 Address: <a className="text-blue-500 hover:underline">Nadiad, Kheda, Gujarat</a></p>
//             </div>
  
//             {/* Contact Form */}
//             <form className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea
//                   rows="4"
//                   placeholder="Write your message here..."
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
  





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
