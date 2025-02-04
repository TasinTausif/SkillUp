// import required modules

const StudentSteps = () => {
  return (
    <div>
      <div className="md:max-w-6xl max-w-5xl mx-auto pt-10 pb-12">
        <h1 className="mb-7 text-blue-600 dark:text-blue-400 font-semibold font-akaya text-3xl text-center">
          Start Learning by following three simple steps
        </h1>
        <div className="w-full flex relative">
          <div className="md:w-7/12 mx-auto md:mx-0 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-20">
            <div className="left">
              <img
                src="../src/assets/img/new/find_classes.jpg"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Search the class
              </h1>
              <p className="text-sm">
                Search the subject you want to learn. Choose your desired mentor
                from thousands of best mentorsa available there.
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-r-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex md:justify-end my-16 relative">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="../src/assets/img/new/student_time.jpg"
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Fix a schedule and pay
              </h1>
              <p className="text-sm">
                Request your preffered time to mentor and fix the schedule and
                pay for the session.
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-l-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="../src/assets/img/new/student_learning.jpg"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Start learning
              </h1>
              <p className="text-sm">Finally you are all set to learn.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSteps;
