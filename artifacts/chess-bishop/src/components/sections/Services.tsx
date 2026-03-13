import { FadeIn } from "@/components/animations/FadeIn";

const courses = [
  {
    level: "Beginners",
    totalClasses: 48,
    image: `${import.meta.env.BASE_URL}images/chess-kids-hero.png`,
    bg: "#a8f0a0",
    badgeBg: "#c8e6c0",
    ageGroup: "5 to 15",
    batchSize: "One-One",
    duration: "One hour",
    format: "Live Online Class",
    features: [
      "36 Hours of lessons",
      "8 hrs of Practice and analysis sessions",
      "4 hrs of Reviews and Doubts clearing sessions",
      "Worksheets for every lesson with follow-up in spreadsheets with the level analyser",
    ],
  },
  {
    level: "Intermediate",
    totalClasses: 48,
    image: `${import.meta.env.BASE_URL}images/hero-bg.png`,
    bg: "#b2e4ec",
    badgeBg: "#b0d8e0",
    ageGroup: "7 to 15",
    batchSize: "One-One",
    duration: "One hour",
    format: "Live Online Class",
    features: [
      "36 Hours of lessons",
      "8 hrs of Practice and analysis sessions",
      "4 hrs of Reviews and Doubts clearing sessions",
      "Rating and Competitive tournaments awareness",
    ],
  },
  {
    level: "Advanced",
    totalClasses: 96,
    image: `${import.meta.env.BASE_URL}images/coach.png`,
    bg: "#ffb3b3",
    badgeBg: "#f0c8b0",
    ageGroup: "8 to 15",
    batchSize: "One-One",
    duration: "One hour",
    format: "Live Online Class",
    features: [
      "76 Hours of lessons",
      "10 hrs of Practice and analysis sessions",
      "10 hrs of Reviews and Doubts clearing sessions",
      "Worksheets for every lesson with follow-up in spreadsheets with the level analyser",
    ],
  },
];

export function Services() {
  return (
    <section id="courses" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Courses</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Training Programs</h3>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col shadow-xl"
                style={{ backgroundColor: course.bg }}
              >
                {/* Image with badge */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.level}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full text-gray-800"
                    style={{ backgroundColor: course.badgeBg }}
                  >
                    {course.level}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow text-gray-900">
                  <h4 className="text-xl font-bold text-center mb-1">{course.level}</h4>
                  <p className="text-center font-semibold mb-4">
                    Total Classes: <span className="text-red-600">{course.totalClasses}</span>
                  </p>

                  <div className="text-sm text-center space-y-0.5 mb-5 text-gray-700">
                    <p>Age Group: {course.ageGroup}</p>
                    <p>Batch size: {course.batchSize}</p>
                    <p>Duration per class: {course.duration}</p>
                    <p>Format: {course.format}</p>
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow text-sm text-gray-800">
                    {course.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-sm bg-gray-800 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-auto w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
                    More Details
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
