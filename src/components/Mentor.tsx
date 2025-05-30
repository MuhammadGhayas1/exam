const Mentor = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="src\assets\sir.jpg"
            alt="Mr. Ali Sher Kashif"
            className="w-[300px] md:w-[350px] rounded-2xl shadow-lg border-4 border-purple-400 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl text-white max-w-2xl w-full border border-gray-600">
        <h1  className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Mentor
        </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 border-b-2 border-purple-400 inline-block pb-1">
            MR. ALI SHER KASHIF
          </h2>
          <p className="text-lg font-medium mb-4">
            Lecturer of Computer Science, <span className="font-semibold text-white">CUI Sahiwal Campus</span>
          </p>
          <p className="text-gray-300 mb-3">
            Mr. Ali Sher Kashif is a dedicated educator and seasoned software professional with over 5 years of academic experience and more than 6 years in the software industry. He has contributed to renowned organizations such as SmartNovative LABS, Cygnus Solutions, and Mercurial Minds, gaining deep expertise in software development, project management, and team leadership.
          </p>
          <p className="text-gray-300">
            He holds academic credentials from prestigious institutions including NUCES (FAST) and NUST-SEECS, and combines technical mastery with a strong passion for teaching. Mr. Kashif is deeply committed to mentoring future software engineers, empowering students not just with knowledge, but with the mindset to become innovators and entrepreneurs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mentor;
