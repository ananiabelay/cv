// src/data/videoPortfolio.ts

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category: 'TikTok/Shorts' | 'YouTube Longform' | 'Commercial' | 'Cinematic';
  description: string;
  tags: string[];
  // Paths to video files or hosted links (stored in /public/videos/)
  beforeVideo: string; 
  afterVideo: string;
  thumbnail: string;   // Still frame preview image
  isUpcoming?: boolean;
}

export const VIDEO_PROFILE = {
  name: "Anania Belay",
  location: "Addis Ababa, Ethiopia",
  bio: "Visual storyteller and video editor specializing in high-retention short-form content, precise color grading, and dynamic sound design that keeps viewers hooked past the 3-second mark.",
  avatar: "/pro.webp"
};

export const VIDEO_CATEGORIES = ["TikTok/Shorts", "YouTube Longform", "Commercial", "Cinematic"];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "talking-head-retention",
    title: "High-Retention Talking Head Edit",
    client: "Tech Creator Content",
    category: "TikTok/Shorts",
    description: "Transformed flat, raw smartphone footage into an engaging short with dynamic zoom cuts, custom motion graphics, sound fx, and highly stylized pacing.",
    tags: ["CapCut Pro", "Premiere Pro", "Sound Design", "Motion Graphics"],
    beforeVideo: "/videos/4.mp4",
    afterVideo: "/videos/3.mp4",
    thumbnail: "/projects/thumb-shorts-1.jpg"
  },
 
 
];