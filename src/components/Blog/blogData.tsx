import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Create a Resume That Stands Out in 2025",
    paragraph:
      "Learn the latest resume trends and formatting tips to catch recruiters’ attention and pass Applicant Tracking Systems (ATS) with ease.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sarah Mitchell",
      image: "/images/blog/author-03.png",
      designation: "Career Coach",
    },
    tags: ["resume", "career"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Top 10 Mistakes to Avoid in Your CV",
    paragraph:
      "Avoid common CV pitfalls like poor formatting, generic summaries, and outdated skills to improve your chances of landing interviews.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "David Lee",
      image: "/images/blog/author-02.png",
      designation: "HR Specialist",
    },
    tags: ["job search", "tips"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "5 Power Words to Boost Your Resume",
    paragraph:
      "Discover the key action verbs and impactful phrases that make your achievements stand out to hiring managers.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Emily Carter",
      image: "/images/blog/author-03.png",
      designation: "Recruitment Consultant",
    },
    tags: ["resume", "language"],
    publishDate: "2025",
  },
];

export default blogData;
