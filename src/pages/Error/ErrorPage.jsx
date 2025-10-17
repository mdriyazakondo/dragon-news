// ErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router";

export default function ErrorPage({
  status = 404,
  title = "Page Not Found",
  message = "Sorry, the page you are looking for doesn’t exist or has been moved.",
}) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-sky-50 p-6">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-10 text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-rose-600">{status}</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-800">{title}</h2>
        <p className="mt-3 text-slate-600">{message}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 inline-flex items-center justify-center px-6 py-3 cursor-pointer text-white font-medium rounded-full bg-gradient-to-r from-purple-600 to-sky-500 shadow-md hover:shadow-lg transition"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
