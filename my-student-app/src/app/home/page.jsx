import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <main className="min-h-screen pt-[15%] bg-gray-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Seamless Communication Between Students and Lecturers
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Say goodbye to long queues and paperwork. Our platform helps
            students send formal requests and messages to lecturers and HODs
            digitally—without physical meetings or protocol delays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-base font-medium transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-md text-base font-medium transition"
            >
              Create an Account
            </Link>
          </div>

          <section className="mt-16 grid gap-10 sm:grid-cols-3 text-left">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Direct Messaging
              </h3>
              <p className="text-gray-600 text-sm">
                Send academic or administrative messages directly to your
                lecturer or HOD.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Track Your Requests
              </h3>
              <p className="text-gray-600 text-sm">
                Know when your message is read, responded to, or escalated.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Physical Meetings
              </h3>
              <p className="text-gray-600 text-sm">
                Avoid unnecessary movement across campus. Everything happens
                online and securely.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
