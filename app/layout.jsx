import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "LuxeStore | Premium Marketplace",
  description: "A curated marketplace for premium items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#171717",
                color: "#fff",
                border: "1px solid #333",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
