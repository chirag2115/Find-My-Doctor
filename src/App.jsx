// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Contact from './pages/Contact';
// import { useState, useEffect } from 'react';
// import { account } from './appwrite';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         await account.getSession();
//         setIsLoggedIn(true);
//       } catch (err) {
//         setIsLoggedIn(false);
//       }
//     };

//     checkSession();
//   }, []);

//   return (
//     <Router>
//       <Header />
//       <main className="min-h-[calc(100vh-80px)]">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
//           <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }






// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import { useAuth } from './contexts/AuthContext'; // ✅ use context

export default function App() {
  const { isLoggedIn } = useAuth(); // ✅ grab from context

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </main>
    </>
  );
}
