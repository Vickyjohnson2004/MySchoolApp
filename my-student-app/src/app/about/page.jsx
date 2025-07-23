// pages/about.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Our Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for modern campuses, our platform bridges the communication
            gap between students and their lecturers or HODs—digitally,
            securely, and without protocol.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              We aim to empower students with direct, professional access to
              their academic authorities, removing unnecessary delays and
              formalities. Whether it’s a course-related issue, a project query,
              or an administrative need—communication should be instant,
              trackable, and paperless.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Why This Matters</h2>
            <p className="text-gray-700">
              Too many students struggle to get their voices heard or requests
              processed simply due to lack of access, outdated processes, or
              unnecessary protocol. Our platform solves this by providing a
              secure system for both parties—making academic communication
              easier, faster, and more accountable.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            What Makes Us Different?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>No physical meetings required to send official requests</li>
            <li>Role-based dashboards for students, lecturers, and HODs</li>
            <li>Track status of messages: pending, read, responded</li>
            <li>Secure and structured communication channels</li>
            <li>Designed for both small departments and full universities</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            We Believe in Access for All
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re a first-year student or a senior lecturer,
            communication should be easy, respectful, and efficient. This
            platform is built to foster collaboration, not bureaucracy.
          </p>
        </section>
      </div>
    </main>
  );
}
