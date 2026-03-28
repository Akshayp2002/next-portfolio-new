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
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { careersData, type CareerEntry, type CareerProject } from "@/components/tiles/about/careers";

const spinGlow = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const GlowContainer = styled.div`
  position: relative;
  padding: 1.5px;
  background: transparent;
  overflow: hidden;
  border-radius: 1.5rem;
  height: 100%;
  display: flex;
`;

const GlowBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 100deg,
    #63fafacd 150deg,
    #60a5fa 180deg,
    transparent 230deg,
    transparent 360deg
  );
  animation: ${spinGlow} 4s linear infinite;
  z-index: 0;
  filter: blur(4px);
`;

type TestimonialItem = {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number;
};

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
        <h2 className="text-lg font-bold font-decorative tracking-tight text-gray-900 dark:text-white sm:text-xl md:text-2xl">
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
function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}

function TestimonialSkeleton() {
  return (
    <div className="h-full animate-pulse rounded-3xl border border-gray-200/80 bg-[#f8fafc] p-4 dark:border-gray-700 dark:bg-[#111821] sm:p-5 flex flex-col">
      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="mt-auto pt-6">
        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mt-2 h-3 w-32 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}

const EMPTY_TESTIMONIALS: TestimonialItem[] = [];

export default function AboutContent({ testimonials: initialTestimonials = EMPTY_TESTIMONIALS }: { testimonials?: TestimonialItem[] }) {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerEntry | null>(null);
  const [projectCarousel, setProjectCarousel] = useState<{
    projects: CareerProject[];
    index: number;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(initialTestimonials);
  const [loading, setLoading] = useState(initialTestimonials.length === 0);

  const previewExperience = useMemo(() => careersData.slice(0, 2), []);
  const previewEducation = useMemo(() => education.slice(0, 2), []);

  useEffect(() => {
    if (initialTestimonials.length === 0) {
      const fetchTestimonials = async () => {
        try {
          const response = await fetch('/api/reviews');
          const data = await response.json();
          const formattedData = data.map((item: any) => ({
            id: item.id,
            quote: item.review || item.quote,
            name: item.name,
            position: item.position,
            company: item.company,
            rating: item.rating
          }));
          setTestimonials(formattedData);
        } catch (error) {
          console.error("Failed to fetch testimonials:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchTestimonials();
    } else {
      setTestimonials(initialTestimonials);
      setLoading(false);
    }
  }, [initialTestimonials]);
  useEffect(() => {
    const isAnyModalOpen = Boolean(selectedCareer || projectCarousel || isTimelineOpen);
    const previousOverflow = document.body.style.overflow;

    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCareer, projectCarousel, isTimelineOpen]);

  return (
    <main className="min-h-screen py-5 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <div className="grid grid-cols-1 gap-5">
          <section className="min-h-75 rounded-4xl bg-white p-4 dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 sm:p-5 md:px-10 lg:px-16">
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-3">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src="/mepopper.png"
                    alt="Akshay profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </div>
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
                    <GlowContainer key={`${item.role}-${item.company}`}>
                      <GlowBorder />
                      <article
                        className="relative z-10 h-full w-full rounded-[calc(1.5rem-1.5px)] border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-[#111821] cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600 sm:p-4 overflow-hidden"
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
                          <span className={`inline-flex shrink-0 whitespace-nowrap items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 ${item.current ? "ring-1 ring-green-500 text-green-500" : ""}`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">{item.period}</p>
                          <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 text-right sm:text-xs">View details</p>
                        </div>
                      </article>
                    </GlowContainer>
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
                    <GlowContainer key={`${item.degree}-${item.institute}`}>
                      < GlowBorder />
                      <article
                        className="relative z-10 w-full rounded-[calc(1.5rem-1.5px)] border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-[#111821] sm:p-4 overflow-hidden"
                      >
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">{item.degree}</h3>
                        <p className="mt-1 text-xs font-medium text-sky-700 dark:text-sky-300 sm:text-sm">{item.institute}</p>
                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">{item.period}</p>
                      </article>
                    </GlowContainer>
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
              {loading ? (
                <>
                  <TestimonialSkeleton />
                  <TestimonialSkeleton />
                  <TestimonialSkeleton />
                </>
              ) : testimonials.length > 0 ? (
                testimonials.map((item) => (
                  <GlowContainer key={item.id}>
                    <GlowBorder />
                    <article
                      className="group relative z-10 h-full rounded-[calc(1.5rem-1.5px)] border border-gray-200/80 bg-[#f8fafc] p-4 dark:border-gray-700 dark:bg-[#111821] sm:p-5 flex flex-col overflow-hidden"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#94a3b8] ring-1 ring-gray-200 dark:bg-[#0d1117] dark:text-[#cbd5e1] dark:ring-gray-600">
                        <FaQuoteLeft className="h-4 w-4" />
                      </div>
                      <p className="mt-4 text-xs leading-5 text-gray-700 dark:text-gray-200 sm:text-sm sm:leading-6">
                        {item.quote}
                      </p>
                      <div className="mt-auto pt-1">
                        <h3 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white sm:text-base">
                          - {item.name}
                        </h3>
                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">
                          {item.position} {item.company ? `• ${item.company}` : ""}
                        </p>
                      </div>
                    </article>
                  </GlowContainer>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 xl:col-span-3 text-center py-10 text-gray-500">
                  No testimonials yet.
                </div>
              )}
            </div>
          </SectionCard>
        </div>
      </div>

      {selectedCareer && (
        <ModalPortal>
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm modal-backdrop-enter">
          <div className="w-full max-w-4xl rounded-4xl border border-gray-200 bg-[#f8fafc] shadow-2xl dark:border-gray-700 dark:bg-[#0d1117] modal-content-enter">
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
                <h4 className="text-base font-bold tracking-wide text-gray-800 dark:text-gray-100 sm:text-lg">Overview</h4>
                <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-200 sm:text-sm sm:leading-7">{selectedCareer.overview}</p>
              </section>

              <section className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide text-gray-800 dark:text-gray-100 sm:text-lg">My Role</h4>
                <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-200 sm:text-sm sm:leading-7">{selectedCareer.myRole}</p>
              </section>

              <section className="rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821]">
                <h4 className="text-base font-bold tracking-wide text-gray-800 dark:text-gray-100 sm:text-lg">Projects</h4>
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
                <h4 className="text-base font-bold tracking-wide text-gray-800 dark:text-gray-100 sm:text-lg">Skills Acquired</h4>
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
        </ModalPortal>
      )}

      {projectCarousel && (
        <ModalPortal>
          <div className="fixed inset-0 z-[1020] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm modal-backdrop-enter">
          <div className="w-full max-w-5xl rounded-3xl border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-[#0d1117] modal-content-enter">
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
        </ModalPortal>
      )}

      {isTimelineOpen && (
        <ModalPortal>
          <div className="fixed inset-0 z-[1010] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm modal-backdrop-enter">
          <div className="w-full max-w-3xl rounded-4xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-[#0d1117] modal-content-enter sm:p-5 md:p-6">
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
                    <GlowContainer key={item.id}>
                      <GlowBorder />
                      <article
                        className="relative z-10 w-full h-full rounded-[calc(1.5rem-1.5px)] border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#111821] cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600 overflow-hidden"
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
                          <span className={`inline-flex shrink-0 whitespace-nowrap items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:border-gray-600 dark:bg-[#0d1117] dark:text-gray-200 ${item.current ? "ring-1 ring-green-500 text-green-500" : ""}`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
                          <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 text-right">View details</p>
                        </div>
                      </article>
                    </GlowContainer>
                  ))
                : education.map((item) => (
                    <GlowContainer key={`${item.degree}-${item.institute}`}>
                      <GlowBorder />
                      <article
                        className="relative z-10 w-full rounded-[calc(1.5rem-1.5px)] border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-700 dark:bg-[#111821] overflow-hidden"
                      >
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.degree}</h4>
                        <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300">{item.institute}</p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
                      </article>
                    </GlowContainer>
                  ))}
            </div>
          </div>
          </div>
        </ModalPortal>
      )}
    </main>
  );
}