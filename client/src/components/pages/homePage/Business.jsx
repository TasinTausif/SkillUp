const Business = () => {
  return (
    <div className="md:flex min-h-[500px] items-center max-w-6xl mx-auto md:px-20">
      <div className="left md:w-1/2 ml-5 text-left p-5">
        <h1 className="text-xl mb-3">
          Become a skilled{" "}
          <span className="text-indigo-600 text-2xl font-bold">Student</span>
        </h1>
        <h1 className="text-3xl">Upskill yourself with Skillup's Mentoring</h1>
        <ul className="list-disc pl-5 my-5">
          <li>
            Choose your favorite mentor from the wide range of mentors list
          </li>
          <li>Learn from the experts from different subjects</li>
          <li>Clear all your doubts and be the best.</li>
        </ul>

        <div className="flex gap-4">
          <button className="btn px-4 py-2 bg-indigo-300 border-indigo-300 border-[2px] rounded-lg">
            Learn More
          </button>
          <button className="btn px-4 py-2 border-indigo-300 border-[2px] rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="right md:w-1/2 flex justify-center">
        <div className="w-9/12 shadow-lg hover:shadow-xl rounded-2xl p-1">
          <img
            src="../src/assets/img/new/business_new.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
