// src/components/sections/SoftwareArchitect.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Image as ImageIcon } from "lucide-react";
import ScrollReveal, { REVEAL_VARIANTS } from "../ui/ScrollReveal";
import SectionCard from "../ui/SectionCard";
import ImageCarousel from "../ui/ImageCarousel";
import ImageLightbox from "../ui/ImageLightbox";
import { AI_PROJECTS, INNOVATION_PROJECTS, FEATURED_PROJECTS } from "../../data/projects";
import mindbloomVideo from "../../assets/projects/mindbloom.mp4";
import routerSvg from "../../assets/projects/router.svg";

// Static asset imports — Vite requires static import paths
import quizImg from "../../assets/projects/quiz.png";
import haociImg from "../../assets/projects/haocikuaiji.png";
import waterImg from "../../assets/projects/water.jpg";
import exampleImg from "../../assets/projects/example.jpg";
import linguistableImg from "../../assets/projects/linguistable.png";
import pg1 from "../../assets/projects/pelergame/1.png";
import pg3 from "../../assets/projects/pelergame/3.png";
import pg7 from "../../assets/projects/pelergame/7.png";
import pg8 from "../../assets/projects/pelergame/8.png";
import pg12 from "../../assets/projects/pelergame/12.png";
import pg17 from "../../assets/projects/pelergame/17.png";

const IMAGE_MAP = { quiz: quizImg, haocikuaiji: haociImg };

const INNOVATION_IMAGE_MAP = {
  water: waterImg,
  example: exampleImg,
  linguistable: linguistableImg,
};

const PELERGAME_SLIDES = [
  { src: pg1, caption: "Splash Screen" },
  { src: pg3, caption: "Gameplay Overview" },
  { src: pg7, caption: "Fight With Enemies" },
  { src: pg8, caption: "Skill Activation" },
  { src: pg12, caption: "Shop Interaction" },
  { src: pg17, caption: "Weapon System" },
];

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label">{label}</div>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}

      </div>
    </ScrollReveal>
  );
}

function ProjectImage({ project }) {
  if (project.carousel && project.image === "pelergame") {
    return <ImageCarousel slides={PELERGAME_SLIDES} />;
  }
  if (project.image && IMAGE_MAP[project.image]) {
    return (
      <div className="rounded-xl overflow-hidden">
        <img
          src={IMAGE_MAP[project.image]}
          alt={project.imageAlt}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    );
  }
  // Placeholder
  return (
    <div
      className="glass rounded-xl flex flex-col items-center justify-center gap-3"
      style={{ height: "260px", border: "1px dashed rgba(255,255,255,0.1)" }}
    >
      <span style={{ fontSize: "2rem" }}>📸</span>
      <span className="label-mono" style={{ opacity: 0.5 }}>
        Image coming soon
      </span>
    </div>
  );
}

function FeaturedProjectRow({ project, index }) {
  const isOdd = index % 2 === 1;
  const revealVariant = isOdd ? "right" : "left";

  return (
    <ScrollReveal variant={revealVariant}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20`}
      >
        {/* Image column — swapped on odd rows via order */}
        <div className={isOdd ? "lg:order-2" : ""}>
          <ProjectImage project={project} />
        </div>

        {/* Text column */}
        <div className={isOdd ? "lg:order-1" : ""}>
          {/* Title */}
          <h3
            className="font-mono font-bold text-xl text-text-primary mb-4 leading-snug"
            style={{ textShadow: `0 0 20px ${project.accentColor}40` }}
          >
            {project.title}
            {project.subtitle && (
              <span className="block text-sm font-normal opacity-60 mt-0.5">{project.subtitle}</span>
            )}
          </h3>

          {/* Bullets */}
          <ul className="space-y-2 mb-5">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
              >
                <span
                  style={{
                    color: project.accentColor,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  •
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium"
                style={{
                  color: project.accentColor,
                  background: `${project.accentColor}18`,
                  border: `1px solid ${project.accentColor}50`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all"
                style={{
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}50`,
                  background: `${project.accentColor}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}25`;
                  e.currentTarget.style.boxShadow = `0 0 12px ${project.accentColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}10`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all"
                style={{
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}50`,
                  background: `${project.accentColor}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}25`;
                  e.currentTarget.style.boxShadow = `0 0 12px ${project.accentColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}10`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <ExternalLink size={13} />
                Live Demo (Admin Password: 123456)
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all"
                style={{
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}50`,
                  background: `${project.accentColor}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}25`;
                  e.currentTarget.style.boxShadow = `0 0 12px ${project.accentColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}10`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <ExternalLink size={13} />
                Website
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all"
                style={{
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}50`,
                  background: `${project.accentColor}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}25`;
                  e.currentTarget.style.boxShadow = `0 0 12px ${project.accentColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${project.accentColor}10`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <BookOpen size={13} />
                Docs
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function InnovationProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const resolvedImages = project.images
    ? project.images.map((key) => INNOVATION_IMAGE_MAP[key])
    : null;

  return (
    <SectionCard
      glowColor={project.accentColor}
      className="flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-mono font-semibold text-text-primary text-base">
          {project.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors rounded"
            >
              <GithubIcon size={15} />
            </a>
          )}
          {resolvedImages && (
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="View images"
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors rounded"
            >
              <ImageIcon size={15} />
            </button>
          )}
        </div>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium"
            style={{
              color: project.accentColor,
              background: `${project.accentColor}18`,
              border: `1px solid ${project.accentColor}50`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {lightboxOpen && resolvedImages && (
        <ImageLightbox
          images={resolvedImages}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </SectionCard>
  );
}

const AI_MEDIA_MAP = {
  mindbloom: mindbloomVideo,
  'llm-router': routerSvg,
};

function AIProjectCard({ project }) {
  const mediaSrc = AI_MEDIA_MAP[project.id];
  const paragraphs = project.description ? project.description.split('\n\n') : [];

  return (
    <ScrollReveal variant="up">
      <div
        className="glass rounded-2xl p-6 md:p-8"
        style={{ border: `1px solid ${project.accentColor}20` }}
      >
        {/* Title */}
        <h3
          className="font-mono font-bold text-lg text-text-primary leading-snug mb-5"
          style={{ textShadow: `0 0 20px ${project.accentColor}40` }}
        >
          {project.title}
        </h3>

        {/* Description (left) + Media (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-5">
          {/* Description */}
          <div>
            {project.bullets ? (
              <ul className="space-y-3">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                    <span style={{ color: project.accentColor, flexShrink: 0, marginTop: '0.15rem' }}>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-3">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-text-secondary text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            )}
          </div>

          {/* Media */}
          {project.media === 'video' ? (
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${project.accentColor}25` }}>
              <video src={mediaSrc} autoPlay muted loop playsInline className="w-full h-auto rounded-xl" />
            </div>
          ) : (
            <img src={mediaSrc} alt={project.title} className="w-full h-auto" />
          )}
        </div>

        {/* In Developing badge */}
        <div>
          <span
            className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest"
            style={{
              color: project.accentColor,
              background: `${project.accentColor}18`,
              border: `1px solid ${project.accentColor}50`,
            }}
          >
            In Developing
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SoftwareArchitect() {
  return (
    <section
      id="software"
      className="section-bg border-t border-base-border/30"
    >
      <div className="section-wrapper">
        <SectionHeader
          label="02 — Software"
          title="Software Architecture"
          description={
            <>
              End-to-end systems, thoughtful architecture, collaborative development,
              <br />
              and ideas that drive real impact.
            </>
          }
        />

        {/* Featured Projects */}
        <ScrollReveal variant="up">
          <div className="mb-4">
            <span className="label-mono" style={{ color: '#a78bfa' }}>— Featured Projects</span>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Divider before card grid */}
        <div className="border-t border-base-border/30 mb-16" />

        {/* Innovation Lab sub-section label */}
        <ScrollReveal variant="up">
          <div className="mb-4">
            <span className="label-mono" style={{ color: '#a78bfa' }}>— Innovation Lab</span>
          </div>
        </ScrollReveal>

        {/* Existing project cards */}
        <motion.div
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {INNOVATION_PROJECTS.map((project) => (
            <motion.div key={project.id} variants={REVEAL_VARIANTS.scale}>
              <InnovationProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider before AI section */}
        <div className="border-t border-base-border/30 mb-16 mt-16" />

        {/* AI & Machine Learning sub-section label */}
        <ScrollReveal variant="up">
          <div className="mb-8">
            <span className="label-mono" style={{ color: '#00d4ff' }}>— AI & Machine Learning Projects</span>
          </div>
        </ScrollReveal>

        {/* AI project cards */}
        <div className="flex flex-col gap-8">
          {AI_PROJECTS.map((project) => (
            <AIProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
