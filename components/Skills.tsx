import Image from "next/image";

const Skills = () => {
  return (
    <div className="mt-20 xl:mt-36 flex justify-center items-center">
      <div className="flex gap-16 md:gap-4 lg:gap-12 xl:gap-24 flex-wrap justify-center items-center">
        {[
          ["HTML", "/skill_img/Html.svg"],
          ["CSS", "/skill_img/css.svg"],
          ["React", "/skill_img/react.svg"],
          ["Vue", "/skill_img/vue.svg"],
          ["Csharp", "/skill_img/csharp.svg"],
          ["Dotnet", "/skill_img/dotnet.svg"],
          ["Python", "/skill_img/python.svg"],
          ["R", "/skill_img/R_logo.svg"],
          ["Tableau", "/skill_img/tableau.svg"],
        ].map(([title, imgUrl], idx) => (
          <Image
            key={idx}
            src={imgUrl}
            alt={`${title}-icon`}
            width="100"
            height="100"
            className="w-20 h-20 shadow-md rounded-lg p-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
