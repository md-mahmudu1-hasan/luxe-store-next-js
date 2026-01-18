"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LogIn, Lock, Mail } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication
    if (email === "user@example.com" && password === "userpassword") {
      setTimeout(() => {
        login();
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast.error("Invalid credentials");
      }, 1000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-white/10 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
            <LogIn className="w-6 h-6 text-blue-500" />
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-neutral-400 mt-2">
            Sign in to access exclusive features.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-neutral-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-neutral-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
