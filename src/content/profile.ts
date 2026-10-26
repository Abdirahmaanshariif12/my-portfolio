/**
 * Edit this file to personalize the site.
 * Text in [brackets] is a placeholder. Replace it with your own details.
 * Do not describe projects, jobs, or skills as finished work unless that is true.
 */

export const profile = {
  name: "Abdirahmaan Shariif Elmi Nour",
  title: "Information Technology Student",
  summary:
    "I am an Information Technology student passionate about learning technology and exploring practical IT solutions.",
  metaTitle: "Abdirahmaan Shariif Elmi Nour | IT Student Portfolio",
  metaDescription:
    "Portfolio of Abdirahmaan Shariif Elmi Nour, an Information Technology student at Mogadishu University pursuing a Bachelor's degree in Information Technology.",
  /**
   * Optional photo. Leave this empty to keep the placeholder.
   * To use a photo, add the file to the public folder (for example public/profile.jpg)
   * and set this to "/profile.jpg".
   */
  photoSrc: "",
  photoAlt: "Profile photo of Abdirahmaan Shariif Elmi Nour",
  email: "shariifabdirahmaan67@gmail.com",
  githubUsername: "abdirahmaanshariif12",
  githubUrl: "https://github.com/abdirahmaanshariif12",
  university: "Mogadishu University",
  about: {
    paragraphs: [
      "I am an Information Technology student at Mogadishu University, pursuing a Bachelor's degree in Information Technology. I am building my knowledge of IT and exploring how technology can be used to solve practical problems. This portfolio presents my educational background, technical interests, learning progress, and projects as I continue developing my skills.",
    ],
    facts: [
      { label: "University", value: "Mogadishu University" },
      { label: "Degree", value: "Bachelor's Degree in Information Technology" },
      { label: "Specialization", value: "General IT" },
    ],
  },
  skillsNote:
    "These are learning topics, not verified expertise. They show what I am studying, not a claim that I have mastered them.",
  skills: [
    {
      name: "HTML",
      summary: "Learning how to structure pages with clear, semantic elements.",
    },
    {
      name: "CSS",
      summary: "Learning layout, spacing, and how pages adapt to different screens.",
    },
    {
      name: "JavaScript",
      summary: "Learning how pages can respond to what a person does.",
    },
    {
      name: "Python",
      summary: "Learning basic programming and how to break problems into steps.",
    },
    {
      name: "Networking",
      summary: "Learning how computers connect and share information.",
    },
    {
      name: "Databases",
      summary: "Learning how information can be stored, organized, and retrieved.",
    },
    {
      name: "IT Support",
      summary: "Learning how to help people with common technical questions.",
    },
  ],
  projectsNote:
    "These cards are sample concepts for the layout. They are not completed projects, and they do not describe real work.",
  projects: [
    {
      title: "Class Notes Page",
      summary:
        "A sample concept for a simple page where a student could keep class notes in one place.",
      note: "Sample concept only. This has not been built.",
      topics: ["HTML", "CSS"],
    },
    {
      title: "Equipment Checklist",
      summary:
        "A sample concept for a checklist someone might use to keep track of lab equipment.",
      note: "Sample concept only. There is no demo because this work does not exist yet.",
      topics: ["JavaScript"],
    },
    {
      title: "Support Request Sketch",
      summary:
        "A sample concept for a short form a person could use to ask for everyday IT help.",
      note: "Sample concept only. This is not finished work.",
      topics: ["IT Support"],
    },
  ],
  education: [
    {
      school: "Mogadishu University",
      program: "Bachelor's Degree in Information Technology",
      period: "",
      summary: "Specialization: General IT.",
    },
  ],
  contactNote:
    "This form is a preview. It does not send or store messages, because the site has no backend yet.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function isPlaceholder(value: string) {
  return value.includes("[") || value.includes("]");
}
