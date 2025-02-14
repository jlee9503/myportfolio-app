import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectList {
  path: string;
  title: string;
  link?: string;
  link_title?: string;
  link_2?: string;
  link_2_title?: string;
  code?: string;
}

const ProjectGrid = ({
  path,
  title,
  link,
  link_title,
  link_2,
  link_2_title,
  code,
}: ProjectList) => {
  return (
    <div className="relative group cursor-pointer mb-4 rounded-lg">
      <Image
        src={`/project_img/${path}`}
        alt={title}
        width="100"
        height="100"
        className="object-cover w-[350px] h-[200px] md:w-[400px] md:h-[250px] rounded-lg shadow-2xl group-hover:scale-105"
      />
      <div className="bg-blue-900/80 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity inset-0 rounded-lg scale-105 text-white flex justify-center items-center flex-col">
        <h3 className="font-semibold text-xl capitalize">{title}</h3>
        <div className="flex justify-center items-center gap-4 mt-4">
          {link != undefined && (
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg"
            >
              {link_title != undefined ? link_title : "Demo"}{" "}
              {link_2 != undefined && link_title == undefined ? "1" : ""}{" "}
              <FaExternalLinkAlt />
            </Link>
          )}
          {link_2 != undefined && (
            <Link
              href={link_2}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg"
            >
              {link_2_title != undefined ? link_2_title : "Demo 2"}{" "}
              <FaExternalLinkAlt />
            </Link>
          )}
          {code != undefined && (
            <Link
              href={code}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg"
            >
              Code <FaGithub />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
