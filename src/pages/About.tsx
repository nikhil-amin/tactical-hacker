import { motion } from "framer-motion";

function About() {
  const team = [
    {
      name: "Nikhil Amin",
      role: "Senior Java Full Stack Developer",
      bio: "Passionate about coding, full-stack development, and mentoring others. Loves solving complex problems simply.",
      funFact: "Plays video games and codes for fun after work.",
      img: "https://avatars.githubusercontent.com/u/34246901?v=4",
    },
    {
      name: "Roshan Raj",
      role: "Software Engineer",
      bio: "Enthusiastic programmer who loves exploring new technologies and building creative coding solutions.",
      funFact: "Known for late-night coding marathons and experimenting with frameworks.",
      img: "https://avatars.githubusercontent.com/u/31264823?v=4",
    },
    {
      name: "Swathi",
      role: "Creative Tech Enthusiast",
      bio: "From an Electronics & Communication background, Swathi brings a fresh, creative touch to Tactical Hacker’s ideas.",
      funFact: "Loves design, creativity, and exploring new things with curiosity.",
      img: "https://avatars.githubusercontent.com/u/94631087?v=4",
    },
  ];

  return (
    <div className="bg-[#0d1117] min-h-screen text-white px-4 py-10">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#00bfa6] mb-2">Our Story</h1>
        <p className="text-xl text-gray-300">
          From College Curiosity to a Creative Tech Collective
        </p>
      </div>

      {/* What Tactical Hacker Means Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-[#00bfa6] mb-6 text-center">
          What Tactical Hacker Means
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#161b22] rounded-xl p-6 shadow-lg text-gray-300"
        >
          <p className="mb-4">
            Tactical Hacker began on Dec 23, 2017 as a YouTube channel started by Nikhil Amin and Roshan Raj to capture their curiosity for code. Today it is a small creative collective — Nikhil, Roshan, and Swathi — that builds approachable full-stack projects, experiments with new tech, and shares what we learn. We believe in learning by doing, explaining complex ideas simply, and keeping creativity at the center of everything we build. Oh — and we play a lot of video games when we need to recharge.
          </p>
          <div className="mt-4 text-[#00bfa6] font-semibold text-lg text-center">
            Mission: <span className="font-bold">Learn. Build. Share.</span>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#00bfa6] mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#161b22] rounded-xl p-6 text-center shadow-lg flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 border-2 border-[#00bfa6] object-cover"
              />
              <h3 className="text-xl font-bold text-[#00bfa6] mb-1">
                {member.name}
              </h3>
              <p className="text-gray-300 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-2">{member.bio}</p>
              <div className="text-xs text-[#00bfa6] mt-2">
                <span className="font-semibold">Fun Fact:</span> {member.funFact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;