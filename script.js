// Testimonials stored in an object (each key is one testimonial)
const testimonials = {
  testimonial1: {
    name: "Kelvin Murithi",
    role: "Course mentor",
    text: "Always asks the right questions and turns feedback into working code."
  },
  testimonial2: {
    name: "Elvis",
    role: "Classmate",
    text: "Helped me fix a layout bug that had me stuck for hours. Patient, clear, and never makes you feel slow."
  },
  testimonial3: {
    name: "Godwin Gatere",
    role: "Project teammate",
    text: "Reliable and organised. Every commit was small, clearly named, and easy to review.."
  }
};

// Projects stored in an array of objects
const projects = [
  {
    title: "Project One",
    description: "This is a simple project showcasing my current skills and understanding of the programming languages we are currently studying at Moringa school ",
    tech: ["HTML", "CSS", "JavaScript"]
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
