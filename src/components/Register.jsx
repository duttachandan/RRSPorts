import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  Share2,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import styles from "../style";
import { registerUser } from "../api/authentication";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    countryCode: "+1",
    password: "",
    confirmPassword: "",
    paymentPassword: "",
    confirmPaymentPassword: "",
    referralCode: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPaymentPassword, setShowPaymentPassword] = useState(false);

  // Extract referral code from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get("ref");
    if (ref) {
      setForm((prev) => ({ ...prev, referralCode: ref }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Login passwords do not match!");
      return;
    }
    if (form.paymentPassword !== form.confirmPaymentPassword) {
      toast.error("Payment passwords do not match!");
      return;
    }

    const loadingToast = toast.loading("Creating your account...");

    const result = await registerUser(form);
    toast.dismiss(loadingToast);

    if (result.success) {
      toast.success(result.message);
      setForm({
        username: "",
        email: "",
        phone: "",
        countryCode: "+1",
        password: "",
        confirmPassword: "",
        paymentPassword: "",
        confirmPaymentPassword: "",
        referralCode: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast.error(result.message);
    }
  };


  const inputClass =
    "w-full bg-[#1c1c2f] text-sm text-white pl-10 pr-4 py-3 rounded-lg border border-[#2c2c40] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition";
  const inputWrapClass = "relative w-full";

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 pt-5 pb-10">
      <div data-aos="fade-left" className="w-full max-w-2xl bg-[#1b1b2e]/70 backdrop-blur-md border border-[#2e2e40] rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 text-white">
        <h2
          className="text-3xl text-center
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
        >
          Create Your Account
        </h2>

        <p className="text-sm text-gray-400 text-center">
          <span className="text-[#dc2626]">⚠️ Reminder:</span> Creating
          multiple accounts is prohibited and may lead to deletion.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className={inputWrapClass}>
            <User size={18} className="absolute left-3 top-3.5 text-cyan-400" />
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className={inputWrapClass}>
            <Mail size={18} className="absolute left-3 top-3.5 text-cyan-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="flex gap-2 flex-col sm:flex-row">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-full sm:w-[30%] bg-[#1c1c2f] border border-[#2c2c40] text-white px-4 py-3 rounded-lg"
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+63">🇵🇭 +63</option>
            </select>
            <div className={inputWrapClass}>
              <Smartphone
                size={18}
                className="absolute left-3 top-3.5 text-cyan-400"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputClass}
              />
            </div>
          </div>

          {/* Login Password */}
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-3.5 text-cyan-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Login Password"
              className={`${inputClass} pr-10`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Login Password */}
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Login Password"
            className={inputClass}
            required
          />

          {/* Payment Password */}
          <div className="relative">
            <KeyRound
              size={18}
              className="absolute left-3 top-3.5 text-cyan-400"
            />
            <input
              type={showPaymentPassword ? "text" : "password"}
              name="paymentPassword"
              value={form.paymentPassword}
              onChange={handleChange}
              placeholder="Payment Password"
              className={`${inputClass} pr-10`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPaymentPassword(!showPaymentPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPaymentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Payment Password */}
          <input
            type={showPaymentPassword ? "text" : "password"}
            name="confirmPaymentPassword"
            value={form.confirmPaymentPassword}
            onChange={handleChange}
            placeholder="Confirm Payment Password"
            className={inputClass}
            required
          />

          {/* Referral Code */}
          <div className={inputWrapClass}>
            <Share2
              size={18}
              className="absolute left-3 top-3.5 text-cyan-400"
            />
            <input
              name="referralCode"
              value={form.referralCode}
              onChange={handleChange}
              placeholder="Referral Code (Optional)"
              className={inputClass}
            />
          </div>

          <p className="text-xs text-gray-500 italic text-center">
            * Login and payment passwords should be different. Make sure to
            remember them.
          </p>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 rounded-xl 
            primary-btn hover:opacity-90 transition 
            text-white font-semibold text-lg"
            >
              <span className="px-8">🚀 Sign Up Now</span>
            </button>
          </div>
        </form>

        <div className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
