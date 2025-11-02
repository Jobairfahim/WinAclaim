import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";


export default function App() {
  const location = useLocation();

  
  const hideNavbarFooter = ["/signin", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      <main className="relative overflow-hidden">
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <div className="hero-bg-perspective" />
                <HeroSection />
                <Features />
                <Testimonials />
                <ContactUs />
                <FAQ />
                <Footer />
              </>
            }
          />

          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
    </div>
  );
}
