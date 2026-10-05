// Testimonials stored in an object (each key is one testimonial)
const testimonials = {
  testimonial1: {
    name: "Jane Doe",
    role: "Course mentor",
    text: "Replace this with a real testimonial about your work and attitude."
  },
  testimonial2: {
    name: "John Smith",
    role: "Classmate",
    text: "Replace this with another testimonial. Ask a mentor or teammate to write one."
  },
  testimonial3: {
    name: "Amina Yusuf",
    role: "Project teammate",
    text: "Replace this one too. Keep each testimonial to a sentence or two."
  }
};

// Projects stored in an array of objects
const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and why you built it.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Project Two",
    description: "Another short description. Mention one thing you are proud of.",
    tech: ["HTML", "CSS"]
  }
];

// Render testimonials: loop over the object's keys
const testimonialList = document.getElementById("testimonial-list");

for (const key in testimonials) {
  const t = testimonials[key];
  const item = document.createElement("article");
  item.className = "testimonial";
  item.innerHTML = `
    <blockquote>&ldquo;${t.text}&rdquo;</blockquote>
    <p>${t.name}, ${t.role}</p>
  `;
  testimonialList.appendChild(item);
}

// Render projects: loop over the array
const projectList = document.getElementById("project-list");

for (const project of projects) {
  const card = document.createElement("article");
  card.className = "project-card";

  let techItems = "";
  for (const tech of project.tech) {
    techItems += `<li>${tech}</li>`;
  }

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="tech">${techItems}</ul>
  `;
  projectList.appendChild(card);
}