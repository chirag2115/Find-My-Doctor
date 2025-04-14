import { useState } from 'react';
import { account } from '../appwrite.js'; // Make sure appwrite.js is correctly set up
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state for UX
  const [error, setError] = useState(''); // To show error message

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error before making request
    try {
      // Create user with the provided email, password, and name
      await account.create('unique()', email, password, name);
      
      // Auto-login user after successful signup
      await account.createEmailPasswordSession(email, password); // Fix the parameter format here

      navigate('/'); // Redirect to home or dashboard
    } catch (err) {
      setError(err.message); // Set error message if an error occurs
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Create an Account</h2>

        {/* Display error message if any */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Signup form */}
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Chirag Sathvara"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          {/* Redirect to login if the user already has an account */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

