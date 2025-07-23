// components/Features.tsx

const features = [
  {
    title: "Direct Messaging",
    description:
      "Students can send formal requests or academic messages directly to lecturers and HODs—no physical meetings required.",
    icon: "📩",
  },
  {
    title: "Trackable Requests",
    description:
      "Messages are organized with real-time status updates like 'Pending', 'Responded', or 'Closed', keeping students informed.",
    icon: "📊",
  },
  {
    title: "Role-Based Dashboards",
    description:
      "Different interfaces for students, lecturers, and HODs to manage conversations, respond efficiently, and stay organized.",
    icon: "🧑‍💻",
  },
  {
    title: "Secure & Private",
    description:
      "All messages are stored securely. No more writing letters or dealing with lost documents—everything is digital and trackable.",
    icon: "🔐",
  },
  {
    title: "Department-Level Organization",
    description:
      "Lecturers and HODs can filter and view messages by course, department, or urgency—no manual paperwork.",
    icon: "🏫",
  },
  {
    title: "Simple & Accessible",
    description:
      "Designed with students in mind. Clean UI, easy forms, and mobile-ready for access on or off campus.",
    icon: "📱",
  },
];

export default function Features() {
  return (
    <section className="py-14 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Key Features of Our Platform
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We built this platform to solve real problems students face every day.
          Here’s how it works:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
