import { BsFillBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <section
      id="experiences-section"
      className="min-h-dvh pt-[27%] md:pt-[20%] lg:pt-[15%] xl:pt-[10%] px-[7%]"
    >
      <h1 className="font-bold text-2xl md:text-5xl mb-16 text-center">
        Experience
      </h1>

      <div className="mb-32">
        <h1 className="font-semibold text-xl lg:text-3xl mb-4 lg:mb-8">
          Education
        </h1>

        {[
          [
            "Bachelor of Science in Information Systems",
            "Aug 2015 - May 2020",
            "University of Maryland Baltimore County",
          ],
          [
            "Master of Science in Data Analytics",
            "Jun 2024 - Present",
            "Western Governors University"
          ]
        ].map(([position, date, companyName], idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <div className="flex items-center justify-between">
              <h2 className="font-medium md:text-xl">{position}</h2>
              <p className="font-medium text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-blue-900/10 text-blue-900/70 rounded-lg">
                {date}
              </p>
            </div>
            <div className="flex items-center gap-8 justify-between md:justify-start">
              <div className="flex items-center md:ml-4">
                <IoSchoolSharp className="text-gray-300" />{" "}
                <span className="ml-2 text-gray-400">{companyName}</span>
              </div>
              {/* <div className="flex items-center">
                <FaLocationDot className="text-gray-300" />{" "}
                <span className="ml-2 text-gray-400">{location}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-semibold text-xl lg:text-3xl mb-4 lg:mb-8">Work</h1>

        {[
          [
            "Junior Web Developer",
            "Jun 2021 - Nov 2023",
            "HealthCare Strategies, Inc.",
            "Maryland",
          ],
          [
            "Crew Shift Manager",
            "Jun 2020 - May 2021",
            "Kokee Tea Cafe",
            "Maryland",
          ],
          [
            "Teacher Assistant",
            "Jun 2015 - Mar 2020",
            "Ace Learning Academy",
            "Maryland",
          ],
        ].map(([position, date, companyName, location], idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <div className="flex items-center justify-between">
              <h2 className="font-medium md:text-xl">{position}</h2>
              <p className="font-medium text-sm md:text-base px-2 py-1 md:px-4 md:py-2 bg-blue-900/10 text-blue-900/70 rounded-lg">
                {date}
              </p>
            </div>
            <div className="flex items-center gap-8 justify-between md:justify-start">
              <div className="flex items-center md:ml-4">
                <BsFillBuildingsFill className="text-gray-300" />{" "}
                <span className="ml-2 text-gray-400">{companyName}</span>
              </div>
              <div className="flex items-center">
                <FaLocationDot className="text-gray-300" />{" "}
                <span className="ml-2 text-gray-400">{location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
