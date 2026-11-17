"use client";
import { useState, type FormEvent } from "react";
import axios from "axios";
import "./LoginModal.css";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (token: string | null) => void;
};

type VerifyOtpResponse = {
  token?: string;
  accessToken?: string;
  data?: {
    token?: string;
  };
};

function getErrorMessage(error: unknown, fallback: string) {
  if (axios.isAxiosError<{ message?: unknown }>(error)) {
    const message = error.response?.data?.message;

    if (typeof message === "string" && message) {
      return message;
    }

    if (error.response) {
      return `Server error: ${error.response.status}`;
    }

    if (error.request) {
      return "Network error: Server not reachable or CORS blocked.";
    }

    return error.message || fallback;
  }

  return error instanceof Error ? error.message : fallback;
}

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: LoginModalProps) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // STEP 1: Send OTP
  const handleSendOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    if (!baseUrl) {
      setError("Login is not configured. Set NEXT_PUBLIC_API_BASE_URL and restart the app.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${baseUrl}/auth/user/login`,
        { mobile },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 20000,
        }
      );

      setOtpSent(true);
      setSuccess("OTP sent successfully!");
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Unable to send OTP. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Verify OTP
  const handleVerifyOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!/^[0-9]{4,6}$/.test(otp)) {
      setError("Please enter a valid OTP.");
      return;
    }

    if (!baseUrl) {
      setError("Login is not configured. Set NEXT_PUBLIC_API_BASE_URL and restart the app.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post<VerifyOtpResponse>(
        `${baseUrl}/auth/user/verify-otp`,
        {
          mobile,
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token =
        response.data?.token ||
        response.data?.accessToken ||
        response.data?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
      }

      onLoginSuccess?.(token ?? null);
      setSuccess("Login successful!");
      onClose();
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Invalid OTP. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="loginOverlay">
      <div className="loginModal">

        <button
          className="closeButton"
          onClick={onClose}
          type="button"
        >
          &times;
        </button>

        <h2>Welcome Back</h2>
        <p>Login securely with your mobile number.</p>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>

            <label>Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              maxLength={10}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>

            <label>Enter OTP</label>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              maxLength={6}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              type="button"
              className="backButton"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setError("");
                setSuccess("");
              }}
            >
              Change Mobile Number
            </button>

          </form>
        )}

        {error && <p className="errorMessage">{error}</p>}
        {success && <p className="successMessage">{success}</p>}

      </div>
    </div>
  );
}
