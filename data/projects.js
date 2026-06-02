import { hospiconnect as hospiconnectData } from "./projects/hospiconnect";
import { hostelnest as hostelnestData } from "./projects/hostelnest";
import { krishiMitra as krishiMitraData } from "./projects/krishi-mitra";
import { credify as credifyData } from "./projects/credify";
import { dprconnect as dprconnectData } from "./projects/dprconnect";
import { algoAnimate as algoAnimateData } from "./projects/algo-animate";
import { forestWeatherIndex as forestWeatherIndexData } from "./projects/forest-weather-index";
import { globeTrotter as globetrotterData } from "./projects/globetrotter";
import { movieBooking as movieBookingData } from "./projects/movie-booking";
import { networkIntrusionDetection as networkIntrusionDetectionData } from "./projects/network-intrusion-detection";
import { aurenixAI as aurenixAIData } from "./projects/aurenix-ai";

// Gradient colors for each project
const gradients = {
  hospiconnect: "from-red-500 via-pink-500 to-rose-500",
  hostelnest: "from-orange-500 via-red-500 to-pink-500",
  "krishi-mitra": "from-green-500 via-emerald-500 to-lime-500",
  credify: "from-cyan-500 via-blue-500 to-indigo-500",
  dprconnect: "from-purple-500 via-violet-500 to-indigo-500",
  "algo-animate": "from-yellow-500 via-orange-500 to-red-500",
  "eco-guard": "from-teal-500 via-green-500 to-emerald-500",
  "forest-weather-index": "from-green-600 via-emerald-500 to-teal-500",
  globetrotter: "from-sky-500 via-blue-500 to-violet-500",
  "movie-booking": "from-fuchsia-500 via-pink-500 to-rose-500",
  "network-intrusion-detection": "from-red-600 via-orange-500 to-yellow-500",
  "aurenix-ai": "from-violet-500 via-fuchsia-500 to-pink-500",
};

// Emojis for each project
const emojis = {
  hospiconnect: "🚑",
  hostelnest: "🏠",
  "krishi-mitra": "🌾",
  credify: "💳",
  dprconnect: "🏛️",
  "algo-animate": "🎯",
  "eco-guard": "🌍",
  "forest-weather-index": "🌲",
  globetrotter: "✈️",
  "movie-booking": "🎬",
  "network-intrusion-detection": "🔒",
  "aurenix-ai": "🚀",
};

// Normalize project data to match the expected structure
const normalizeProject = (projectData) => ({
  slug: projectData.slug,
  title: projectData.title,
  category: projectData.category,
  emoji: emojis[projectData.slug] || "✨",
  tagline: projectData.tagline,
  description: projectData.description,
  heroImage: projectData.heroImage,
  github:
    typeof projectData.github === "string"
      ? projectData.github
      : projectData.github?.ambulanceApp ||
        projectData.github?.frontend ||
        projectData.github?.web ||
        Object.values(projectData.github)[0] ||
        "#",
  demo: projectData.liveDemo || "#",
  gradient:
    gradients[projectData.slug] ||
    "from-violet-500 via-purple-500 to-indigo-500",

  // Flatten techStack into a single array
  techStack: projectData.techStack?.frontend
    ? [
        ...(Array.isArray(projectData.techStack.frontend)
          ? projectData.techStack.frontend
          : []),
        ...(Array.isArray(projectData.techStack.backend)
          ? projectData.techStack.backend
          : []),
        ...(Array.isArray(projectData.techStack.ai)
          ? projectData.techStack.ai
          : []),
        ...(Array.isArray(projectData.techStack.tools)
          ? projectData.techStack.tools
          : []),
      ]
    : Array.isArray(projectData.techStack)
      ? projectData.techStack
      : [],

  // Map features to match expected structure
  features:
    projectData.features?.map((f) => ({
      title: f.title,
      description: f.description,
    })) || [],

  // Map architecture flow
  architecture: projectData.architecture?.flow || [],

  // Map challenges
  challenges: projectData.challengesFaced?.map((c) => c.title) || [],

  // Map impact points - only for hospiconnect
  impact:
    projectData.slug === "hospiconnect"
      ? projectData.achievements?.map((a) => `${a.title} — ${a.event}`) || []
      : [],

  // Add screenshots
  screenshots: projectData.gallery || [],

  // Add problem and solution for sections
  problem: {
    title: projectData.problem?.title || "The Problem",
    description: projectData.problem?.description || "",
  },

  solution: {
    title: projectData.solution?.title || "The Solution",
    description: projectData.solution?.description || "",
  },
});

export const projects = [
  normalizeProject(aurenixAIData),

  normalizeProject(hospiconnectData),
  normalizeProject(hostelnestData),
  normalizeProject(krishiMitraData),
  normalizeProject(credifyData),
  normalizeProject(dprconnectData),
  normalizeProject(algoAnimateData),
  normalizeProject(forestWeatherIndexData),
  normalizeProject(globetrotterData),
  normalizeProject(movieBookingData),
  normalizeProject(networkIntrusionDetectionData),
];
