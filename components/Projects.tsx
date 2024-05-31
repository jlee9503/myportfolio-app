import Image from "next/image";

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
          ["airbnbClone.png", "Rent your home"],
          ["threejs.png", "Landing page theme"],
          ["gmailOrganizer_delete.png", "Gmail organizer"],
          ["ball_destroy.png", "Ball destroy"],
          ["youtube_downloader.png", "YouTube downloader"],
          ["amazon_clone.png", "Amazon clone"],
        ].map(([path, title], idx) => (
          <div key={idx} className="relative group cursor-pointer mb-4 rounded-lg">
            <Image
              src={`/project_img/${path}`}
              alt={title}
              width="100"
              height="100"
              className="object-cover w-[350px] h-[200px] md:w-[400px] md:h-[250px] rounded-lg shadow-lg group-hover:scale-105"
            />
            <div className="bg-blue-900/80 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity inset-0 rounded-lg scale-105 text-white flex justify-center items-center">
              <h3 className="font-semibold text-xl capitalize">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects