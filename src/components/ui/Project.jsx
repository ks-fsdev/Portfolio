import { Safari } from "@/components/ui/safari";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { projects } from "../../../projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Project() {
  let [showMore, setShowMore] = useState(false);
  const featured = projects.slice(0, 3);
  const additional = projects.slice(3);

  return (
    <div className="">
      {featured.map((project) => (
        <div key={project.id} className="my-10">
          <div className="flex flex-col sm:flex-row max-w-4xl mx-auto gap-6 items-center justify-center">
            <div className="w-full lg:w-[30%] max-w-md mx-auto lg:mx-0">
              <h3 className="font-bold mb-4">{project.project}</h3>
              <Safari
                url={project.demo}
                className=""
                videoSrc={project.media}
              />
            </div>

            <div className="w-full flex flex-col justify-center lg:w-[60%] lg:text-left">
              <div className="">
                <p className="text-sm mb-3">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-6">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={cn(
                      "relative h-full cursor-pointer overflow-hidden rounded-full border px-4 py-1",
                      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                    )}>
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className="rounded-full"
                        width="20"
                        height="20"
                        alt=""
                        src={skill.logo}
                      />
                      <div className="flex flex-col">
                        <figcaption className="text-xs font-medium dark:text-white">
                          {skill.name}
                        </figcaption>
                      </div>
                    </div>
                  </span>
                ))}
              </div>

              <div className="flex justify-center w-full sm:justify-start">
                <ButtonGroup className="border rounded-lg mt-4 text-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-2 bg-neutral-300  text-sm rounded-lg font-medium text-neutral-900 hover:bg-neutral-800 hover:text-white duration-300 transition-all ease-in-out">
                    GitHub
                  </a>
                  <ButtonGroupSeparator />
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-2 bg-neutral-300  text-sm rounded-lg font-medium text-neutral-900 hover:bg-neutral-800 hover:text-white duration-300 transition-all ease-in-out">
                    Live Demo
                  </a>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence initial={false} className="-z-100">
        {showMore && (
          <motion.div
            key="additional"
            className="mt-10 overflow-hidden"
            initial={{ height: 0, opacity: 0, y: -100 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -100 }}
            transition={{
              height: { duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 0.3 },
            }}>
            {additional.map((project) => (
              <div key={project.id} className="my-10">
                <div className="flex flex-col sm:flex-row max-w-4xl mx-auto gap-6 items-center justify-center">
                  <div className="w-full lg:w-[30%] max-w-md mx-auto lg:mx-0">
                    <h3 className="font-bold mb-4">{project.project}</h3>
                    <Safari
                      url={project.demo}
                      className=""
                      videoSrc={project.media}
                    />
                  </div>

                  <div className="w-full flex flex-col justify-center lg:w-[60%] text-center lg:text-left">
                    <div className="">
                      <p className="text-sm mb-3">{project.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-6">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={cn(
                            "relative h-full cursor-pointer overflow-hidden rounded-full border px-4 py-1",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                          )}>
                          <div className="flex flex-row items-center gap-2">
                            <img
                              className="rounded-full"
                              width="20"
                              height="20"
                              alt=""
                              src={skill.logo}
                            />
                            <div className="flex flex-col">
                              <figcaption className="text-xs font-medium dark:text-white">
                                {skill.name}
                              </figcaption>
                            </div>
                          </div>
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center w-full sm:justify-start">
                      <ButtonGroup className="border rounded-lg mt-4 text-center">
                        <a
                          href={project.github}
                          target="_blank"
                          className="px-6 py-2 bg-neutral-300  text-sm rounded-lg font-medium text-neutral-900 hover:bg-neutral-800 hover:text-white duration-300 transition-all ease-in-out">
                          GitHub
                        </a>
                        <ButtonGroupSeparator />
                        <a
                          href={project.demo}
                          target="_blank"
                          className="px-6 py-2 bg-neutral-300  text-sm rounded-lg font-medium text-neutral-900 hover:bg-neutral-800 hover:text-white duration-300 transition-all ease-in-out">
                          Live Demo
                        </a>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex justify-center py-10">
        <Button
          className="mx-4 w-30"
          onClick={() => {
            setShowMore((prev) => !prev);
          }}>
          {showMore ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
}

export default Project;
