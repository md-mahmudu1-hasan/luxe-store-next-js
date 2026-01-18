"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for auth token on mount
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    document.cookie = "auth_token=mock_token_123; path=/; max-age=86400";
    setIsLoggedIn(true);
    toast.success("Login successful!");
    router.push("/");
    router.refresh();
  };

  const logout = () => {
    document.cookie = "auth_token=; path=/; max-age=0";
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
