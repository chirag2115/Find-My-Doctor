import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // ✅ use context

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ get login from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Optional: redirect if already logged in
    const checkSession = async () => {
      try {
        await login(email, password); // not needed if login auto-checks session
        navigate('/');
      } catch {
        // No session, stay here
      }
    };
    // checkSession(); // you can remove this if handled in context already
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password); // ✅ use context login
      navigate('/'); // redirect after login
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white py-16 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white max-w-md w-full p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Login to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
