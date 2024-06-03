import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Skills from "./Skills";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about-section"
      className="min-h-fit pt-[27%] md:pt-[20%] lg:pt-[15%] xl:pt-[13%] px-[7%] xl:mt-8 xl:mb-16"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-0">
        <div className="basis-1/3">
          <Image
            src="/profile-pic.png"
            alt="profile-pic"
            width="100"
            height="100"
            className="w-48 h-48 md:w-52 md:h-52"
          />
          <div className="mt-8 hidden xl:flex gap-8">
            <div>
              <p>Name:</p>
              <p>Date of Birth:</p>
              <p>Email:</p>
            </div>
            <div>
              <p className="text-gray-500">Jungsu Lee</p>
              <p className="text-gray-500">March 31st, 1995</p>
              <p className="text-gray-500">jlee033195@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="basis-2/3 text-center lg:text-left">
          <h1 className="font-bold text-2xl md:text-5xl mb-8">My Bio</h1>
          <p className="md:leading-relaxed lg:leading-loose">
            {`Hello, I'm Jungsu, a Software Developer with over two years of experience in web development. I am enthusiastic about exploring new technologies and unleashing my creativity. I excel in both frontend and backend development, transforming unstructured and complex datasets into polished and intuitive visual applications. Known for my rapid learning ability, I quickly grasp new concepts and retain information effectively. In my recent role at a healthcare management company, I developed web and desktop applications, created visual representations of clinical and patient data, and updated database structures.`}
          </p>
          <Link
            href="/jungsu_lee_resume.pdf"
            target="_blank"
            download={true}
            className="text-white px-4 py-4 bg-blue-900 rounded-3xl flex justify-center items-center cursor-pointer w-full lg:w-36 mt-8"
          >
            <div className="mr-2">Resume</div>
            <FiDownload size={20} />
          </Link>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
