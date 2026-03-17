"use client";

import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiX,
  FiCode,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import { useMemo, useState } from "react";
import Image from "next/image";
import { careersData, type CareerEntry, type CareerProject } from "@/components/tiles/about/careers";

const skills = ["Software Developer", "Laravel", "PHP", "Tailwind"];

const education = [
  {
    degree: "BCA",
    institute: "Manipal University Jaipur",
    period: "2024 - Present",
  },
  {
    degree: "Computer Engineering & IT Infrastructure",
    institute: "NTTF Bangalore",
    period: "2019 - 2022",
  },
  {
    degree: "Plus Two Computer Science",
    institute: "GVHSS Sivapuram",
    period: "2017 - 2019",
  },
  {
    degree: "SSLC",
    institute: "GHSS Balussery",
    period: "2016 - 2017",
  },
];

const testimonials = [
  {
    quote:
      "I really appreciate your technical skills. You understand concepts quickly and solve problems in a smart way.",
    name: "Rahul K",
    company: "Cloudrevel Innovations Pvt Ltd",
    featured: false,
  },
  {
    quote:
      "You always share knowledge and support the team. You handled important tasks with ownership and consistency.",
    name: "Jeevitha N",
    company: "Cloudrevel Innovations Pvt Ltd",
    featured: false,
  },
  {
    quote:
      "Akshay is technically strong, learns fast, and adapts quickly. His problem-solving mindset stands out.",
    name: "Minmitha",
    company: "Dreams Technologies Pvt Ltd",
    featured: true,
  },
];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-[#111821] dark:text-gray-200">
      <FiCode className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function SectionCard({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-4xl bg-white p-4 dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 sm:p-5 lg:p-6">
      <div className="flex items-center justify-between gap-3 pb-4">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl md:text-2xl">
          {title}
        </h2>
        {badge && (
          <span className="rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-[#111821] dark:text-gray-200">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function AboutContent() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerEntry | null>(null);
  const [projectCarousel, setProjectCarousel] = useState<{
    projects: CareerProject[];
    index: number;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const previewExperience = useMemo(() => careersData.slice(0, 2), []);
  const previewEducation = useMemo(() => education.slice(0, 2), []);

  return (
    <main className="min-h-screen py-4 md:py-5 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <div className="grid grid-cols-1 gap-5">
          <section className="rounded-4xl bg-white p-4 dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 sm:p-5 md:h-75 md:px-10 lg:px-16">
            <div className="h-full flex flex-col justify-center font-[Quicksand,sans-serif]">
              <div className="flex items-center gap-6 mb-3">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src="/head-hand.png"
                    alt="Akshay profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </div>

              <h1 className="text-base font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-lg md:text-xl">
                I am <span className="underline decoration-blue-500 decoration-4 underline-offset-4">Akshay</span>
              </h1>

              <p className="mt-3 text-gray-500 dark:text-gray-300 text-xs leading-relaxed sm:text-sm md:text-base max-w-[900px]">
                I am an enthusiastic Laravel developer with experience, keen to leverage my robust knowledge in Laravel and related technologies to significantly contribute to the company success while continuously expanding my expertise. I enjoy creating solutions from scratch, exploring how things work, and I am driven by curiosity to solve complex challenges.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <Pill key={skill} label={skill} />
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionCard title="Experience" badge="Career">
                <div className="space-y-3.5">
                  {previewExperience.map((item) => (
                    <article
                      key={`${item.role}-${item.company}`}
                      className="rounded-3xl border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-[#111821] cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600 sm:p-4"
                      onClick={() => setSelectedCareer(item)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-[#0d1117]">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">{item.role}</h3>
                            <p className="mt-1 text-xs font-medium text-sky-700 dark:text-sky-300 truncate sm:text-sm">{item.company}</p>
                          </div>
                        </div>
                        <span className="inline-flex shrink-0 whitespace-nowrap items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200">
                          {item.badge}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">{item.period}</p>
                        <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 text-right sm:text-xs">View details</p>
                      </div>
                    </article>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("experience");
                      setIsTimelineOpen(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 dark:hover:bg-[#151f2b]"
                  >
                    See all experience
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </SectionCard>
            </div>

            <div className="lg:col-span-5">
              <SectionCard title="Education" badge="Studies">
                <div className="space-y-3.5">
                  {previewEducation.map((item) => (
                    <article
                      key={`${item.degree}-${item.institute}`}
                      className="rounded-3xl border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-[#111821] sm:p-4"
                    >
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">{item.degree}</h3>
                      <p className="mt-1 text-xs font-medium text-sky-700 dark:text-sky-300 sm:text-sm">{item.institute}</p>
                      <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">{item.period}</p>
                    </article>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("education");
                      setIsTimelineOpen(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 dark:hover:bg-[#151f2b]"
                  >
                    See all studies
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </SectionCard>
            </div>
          </div>

          <SectionCard title="Testimonials">
            <p className="mb-4 text-xs leading-6 text-gray-600 dark:text-gray-300 sm:text-sm sm:leading-7">
              A few kind words from people I have worked with.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={`${item.name}-${item.company}`}
                  className="h-full rounded-3xl border border-gray-200/80 bg-[#f8fafc] p-4 dark:border-gray-700 dark:bg-[#111821] sm:p-5"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#94a3b8] ring-1 ring-gray-200 dark:bg-[#0d1117] dark:text-[#cbd5e1] dark:ring-gray-600">
                    <FaQuoteLeft className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:text-base sm:leading-7">
                    {item.quote}
                  </p>
                  <div className="mt-5">
                    <h3 className="text-base font-semibold tracking-tight font-sans text-gray-900 dark:text-white sm:text-lg">
                      - {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">{item.company}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {selectedCareer && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl rounded-4xl border border-gray-200 bg-[#f8fafc] shadow-2xl dark:border-gray-700 dark:bg-[#0d1117]">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-700 sm:px-5 md:px-6">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-gray-300 bg-white dark:border-gray-600 dark:bg-[#111821]">
                  <Image
                    src={selectedCareer.logo}
                    alt={`${selectedCareer.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-gray-900 dark:text-white sm:text-xl">{selectedCareer.company}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 sm:text-sm">{selectedCareer.role} • {selectedCareer.period}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCareer(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#151f2b]"
                aria-label="Close career details"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[78vh] space-y-4 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5 md:px-6">
              <section className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide font-[Quicksand,sans-serif] text-gray-800 dark:text-gray-100 sm:text-lg">Overview</h4>
                <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-200 sm:text-sm sm:leading-7">{selectedCareer.overview}</p>
              </section>

              <section className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide font-[Quicksand,sans-serif] text-gray-800 dark:text-gray-100 sm:text-lg">My Role</h4>
                <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-200 sm:text-sm sm:leading-7">{selectedCareer.myRole}</p>
              </section>

              <section className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide font-[Quicksand,sans-serif] text-gray-800 dark:text-gray-100 sm:text-lg">Projects</h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedCareer.projects.map((project, index) => (
                    <article
                      key={project.name}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-[#0d1117] cursor-pointer"
                      onClick={() =>
                        setProjectCarousel({
                          projects: selectedCareer.projects,
                          index,
                        })
                      }
                    >
                      <div className="relative h-28 w-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 p-3">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">{project.name}</p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 dark:border-gray-600 dark:bg-[#111821] dark:text-gray-200"
                          >
                            <FiExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="h-[220px] rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide font-[Quicksand,sans-serif] text-gray-800 dark:text-gray-100 sm:text-lg">Skills Acquired</h4>
                <div className="mt-3 grid max-h-[155px] grid-cols-2 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-3 md:grid-cols-4">
                  {selectedCareer.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex h-11 w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 dark:border-gray-600 dark:bg-[#0d1117]"
                      title={skill.name}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                      <span className="text-[11px] font-medium text-gray-700 dark:text-gray-200 sm:text-xs">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {projectCarousel && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl rounded-3xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-[#0d1117]">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                  {projectCarousel.projects[projectCarousel.index]?.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {projectCarousel.index + 1} / {projectCarousel.projects.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setProjectCarousel(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#151f2b]"
                aria-label="Close project preview"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] dark:border-gray-700 dark:bg-[#111821]">
              <div className="relative h-[48vh] w-full sm:h-[56vh]">
                <Image
                  src={projectCarousel.projects[projectCarousel.index]?.image}
                  alt={projectCarousel.projects[projectCarousel.index]?.name}
                  fill
                  className="object-contain"
                />
              </div>

              {projectCarousel.projects.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setProjectCarousel((prev) => {
                        if (!prev) return prev;
                        const nextIndex =
                          prev.index === 0 ? prev.projects.length - 1 : prev.index - 1;
                        return { ...prev, index: nextIndex };
                      })
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/90 text-gray-700 hover:bg-white dark:border-gray-600 dark:bg-[#0d1117]/90 dark:text-gray-200"
                    aria-label="Previous project"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setProjectCarousel((prev) => {
                        if (!prev) return prev;
                        const nextIndex =
                          prev.index === prev.projects.length - 1 ? 0 : prev.index + 1;
                        return { ...prev, index: nextIndex };
                      })
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/90 text-gray-700 hover:bg-white dark:border-gray-600 dark:bg-[#0d1117]/90 dark:text-gray-200"
                    aria-label="Next project"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {isTimelineOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-4xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-[#0d1117] sm:p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">Career & Studies Timeline</h3>
              <button
                type="button"
                onClick={() => setIsTimelineOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#151f2b]"
                aria-label="Close timeline"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("experience")}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeTab === "experience"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-[#0d1117]"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 dark:hover:bg-[#151f2b]"
                }`}
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeTab === "education"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-[#0d1117]"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 dark:hover:bg-[#151f2b]"
                }`}
              >
                Education
              </button>
            </div>

            <div className="mt-5 max-h-[60vh] space-y-3 overflow-y-auto pr-1">
              {activeTab === "experience"
                ? careersData.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821] cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600"
                      onClick={() => {
                        setSelectedCareer(item);
                        setIsTimelineOpen(false);
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-[#0d1117]">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.role}</h4>
                            <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300 truncate">{item.company}</p>
                          </div>
                        </div>
                        <span className="inline-flex shrink-0 whitespace-nowrap items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200">
                          {item.badge}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 text-right">View details</p>
                      </div>
                    </article>
                  ))
                : education.map((item) => (
                    <article
                      key={`${item.degree}-${item.institute}`}
                      className="rounded-3xl border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-700 dark:bg-[#111821]"
                    >
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.degree}</h4>
                      <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300">{item.institute}</p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
                    </article>
                  ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}