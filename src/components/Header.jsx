import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // 🔥 useAuth from context
import { account } from '../appwrite';

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, loading } = useAuth(); // use context

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (err) {
      console.log('Logout failed:', err);
    }
  };


  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight hover:opacity-90 transition duration-300"
        >
          🩺 FindMyDoctor
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            to="/about"
            className="hover:text-yellow-200 transition duration-300 font-medium text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-200 transition duration-300 font-medium text-lg"
          >
            Contact
          </Link>

          {!loading && (
            <div className="flex gap-3">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/signup"
                    className="bg-yellow-300 text-blue-800 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition duration-300"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="bg-white text-blue-700 font-bold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white font-bold px-5 py-2 rounded-full shadow hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}




// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // ✅ Use your context
// import { account } from '../appwrite'; // ✅ Use Appwrite's account object

// export default function Header() {
//   const navigate = useNavigate();
//   const { isLoggedIn, setIsLoggedIn, loading } = useAuth(); // 🔥 Destructure context

//   const handleLogout = async () => {
//     try {
//       await account.deleteSession('current'); // ✅ Log out from Appwrite
//       setIsLoggedIn(false); // ✅ Update context state
//       navigate('/login');
//     } catch (err) {
//       console.log('Logout failed:', err);
//     }
//   };

//   return (
//     <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-3">
//       <nav className="container mx-auto flex items-center justify-between px-4 flex-wrap">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0 text-xl font-bold text-blue-700">
//           🩺 FindMyDoctor
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex space-x-4 items-center">
//           <li>
//             <Link
//               to="/"
//               className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 rounded-lg"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 rounded-lg"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 rounded-lg"
//             >
//               Contact
//             </Link>
//           </li>

//           {!loading && (
//             <>
//               {!isLoggedIn ? (
//                 <>
//                   <li>
//                     <Link
//                       to="/signup"
//                       className="bg-yellow-300 text-blue-800 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition duration-300"
//                     >
//                       Sign Up
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/login"
//                       className="bg-white text-blue-700 font-bold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300"
//                     >
//                       Login
//                     </Link>
//                   </li>
//                 </>
//               ) : (
//                 <li>
//                   <button
//                     onClick={handleLogout}
//                     className="bg-red-600 text-white font-bold px-5 py-2 rounded-full shadow hover:bg-red-700 transition duration-300"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }
