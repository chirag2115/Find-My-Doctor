import { useState } from 'react';
import { account } from '../appwrite.js';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust path if needed

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login from AuthContext

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // ✅ Create user account
      await account.create(ID.unique(), email, password, name);

      // ✅ Login immediately using AuthContext so logout appears
      await login(email, password);

      // ✅ Navigate to home/dashboard
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Create an Account</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          {/* Name */}
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

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          {/* Link to login */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
