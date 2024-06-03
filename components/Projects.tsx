import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="min-h-dvh pt-[27%] md:pt-[20%] lg:pt-[15%] xl:pt-[10%] px-[7%]"
    >
      <h1 className="font-bold text-2xl md:text-5xl mb-16 text-center">
        Projects
      </h1>

      <div className="flex flex-wrap gap-8 lg:gap-12 justify-center items-center">
        {[
          [
            "airbnbClone.png",
            "Rent your home",
            process.env.NEXT_PUBLIC_RENTAPP_URL as string,
            process.env.NEXT_PUBLIC_RENTAPP_CODE as string,
          ],
          [
            "threejs.png",
            "Landing page theme",
            process.env.NEXT_PUBLIC_LANDINGPAGE_URL as string,
            process.env.NEXT_PUBLIC_LANDINGPAGE_CODE as string,
          ],
          [
            "gmailOrganizer_delete.png",
            "Gmail organizer",
            "",
            process.env.NEXT_PUBLIC_GMAIL_ORGANIZER_CODE as string,
          ],
          [
            "ball_destroy.png",
            "Ball destroy",
            "",
            process.env.NEXT_PUBLIC_BALL_DESTROY_CODE as string,
          ],
          [
            "youtube_downloader.png",
            "YouTube downloader",
            "",
            process.env.NEXT_PUBLIC_YOUTUBE_DOWNLOADER_CODE as string,
          ],
          [
            "amazon_clone.png",
            "Amazon clone",
            process.env.NEXT_PUBLIC_AMAZON_CLONE_URL as string,
            process.env.NEXT_PUBLIC_AMAZON_CLONE_CODE as string,
          ],
        ].map(([path, title, link, code], idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer mb-4 rounded-lg"
          >
            <Image
              src={`/project_img/${path}`}
              alt={title}
              width="100"
              height="100"
              className="object-cover w-[350px] h-[200px] md:w-[400px] md:h-[250px] rounded-lg shadow-xl group-hover:scale-105"
            />
            <div className="bg-blue-900/80 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity inset-0 rounded-lg scale-105 text-white flex justify-center items-center flex-col">
              <h3 className="font-semibold text-xl capitalize">{title}</h3>
              <div className="flex justify-center items-center gap-4 mt-4">
                {link != "" && (
                  <Link
                    href={link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg"
                  >
                    Demo <FaExternalLinkAlt />
                  </Link>
                )}
                <Link
                  href={code}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg"
                >
                  Code <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
