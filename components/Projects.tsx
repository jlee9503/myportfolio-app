"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeSection, setActiveSection] = useState<string>("data-analytics");

  return (
    <section
      id="projects-section"
      className="min-h-dvh py-[27%] md:py-[20%] lg:py-[15%] xl:py-[10%] px-[7%]"
    >
      <h1 className="font-bold text-2xl md:text-5xl mb-16 text-center">
        Projects
      </h1>

      <div className="flex flex-col min-h-screen gap-8 items-center">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <AnimatePresence mode="wait">
          {activeSection === "data-analytics" ? (
            <motion.div
              key="data-analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-8 lg:gap-12 justify-center items-center xl:basis-4/5"
            >
              <ProjectGrid
                path="medical-dashboard.png"
                title="Hospital Readmission Analysis"
                link={
                  process.env.NEXT_PUBLIC_MEDICAL_READMISSION_ANALYSIS as string
                }
                link_title="Analysis"
                link_2={
                  process.env
                    .NEXT_PUBLIC_MEDICAL_READMISSION_DASHBOARD as string
                }
                link_2_title="Dashboard"
              />
              <ProjectGrid
                path="fitness_tracker_dashboard.png"
                title="Fitness Tracker Dashboard"
                link={process.env.NEXT_PUBLIC_FITNESS_TRACKER_DASHBOARD}
              />
              <ProjectGrid
                path="churn.png"
                title="Telecommunications Churn"
                link={
                  process.env.NEXT_PUBLIC_TELECOMMUNICATION_CHURN_1 as string
                }
                link_2={
                  process.env.NEXT_PUBLIC_TELECOMMUNICATION_CHURN_2 as string
                }
              />
              <ProjectGrid
                path="streaming-services.jpg"
                title="Streaming Services Analytics"
                link={
                  process.env.NEXT_PUBLIC_STREAMING_SERVICES_ANALYSIS as string
                }
              />
              <ProjectGrid
                path="epl.jpg"
                title="EPL Stats Analytics"
                code={process.env.NEXT_PUBLIC_EPL_DATA_ANALYSIS as string}
              />
              <ProjectGrid
                path="sales-dashboard.png"
                title="Customer Sales Dashboard"
                link={
                  process.env.NEXT_PUBLIC_CUSTOMER_SALES_DASHBOARD as string
                }
              />
            </motion.div>
          ) : (
            <motion.div
              key="web-development"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-8 lg:gap-12 justify-center items-center xl:basis-4/5"
            >
              <ProjectGrid
                path="airbnbClone.png"
                title="Rent your home"
                link={process.env.NEXT_PUBLIC_RENTAPP_URL as string}
                code={process.env.NEXT_PUBLIC_RENTAPP_CODE as string}
              />
              <ProjectGrid
                path="threejs.png"
                title="Landing page theme"
                link={process.env.NEXT_PUBLIC_LANDINGPAGE_URL as string}
                code={process.env.NEXT_PUBLIC_LANDINGPAGE_CODE as string}
              />
              <ProjectGrid
                path="amazon_clone.png"
                title="Amazon clone"
                link={process.env.NEXT_PUBLIC_AMAZON_CLONE_URL as string}
                code={process.env.NEXT_PUBLIC_AMAZON_CLONE_CODE as string}
              />
              <ProjectGrid
                path="gmailOrganizer_delete.png"
                title="Gmail organizer"
                code={process.env.NEXT_PUBLIC_GMAIL_ORGANIZER_CODE as string}
              />
              <ProjectGrid
                path="youtube_downloader.png"
                title="YouTube downloader"
                code={process.env.NEXT_PUBLIC_YOUTUBE_DOWNLOADER_CODE as string}
              />
              <ProjectGrid
                path="ball_destroy.png"
                title="Ball Destory"
                code={process.env.NEXT_PUBLIC_BALL_DESTROY_CODE as string}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
