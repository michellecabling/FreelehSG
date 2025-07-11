const root = document.getElementById('root');

const events = [
  {
    title: "Singapore Heritage Festival",
    desc: "Experience Singapore's rich cultural heritage with traditional performances, food, and crafts.",
    date: "Dec 15-17, 2024",
    location: "Marina Bay Sands",
    tags: ["FREE", "Kid-Friendly", "Bayfront MRT"],
    image: "https://via.placeholder.com/300x200?text=Heritage+Festival"
  },
  {
    title: "Morning Yoga at East Coast Park",
    desc: "Start your day with free yoga sessions by the beach. All skill levels welcome.",
    date: "Daily",
    location: "East Coast Park",
    tags: ["FREE", "Bedok MRT"],
    image: "https://via.placeholder.com/300x200?text=Yoga+at+East+Coast"
  },
  {
    title: "Esplanade Outdoor Concert",
    desc: "Enjoy live music performances by local artists at the iconic Esplanade waterfront.",
    date: "Dec 20, 2024",
    location: "Esplanade",
    tags: ["FREE", "Kid-Friendly", "Esplanade MRT"],
    image: "https://via.placeholder.com/300x200?text=Outdoor+Concert"
  }
];

events.forEach(event => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <div class="card-content">
      <div class="card-title">${event.title}</div>
      <div class="card-desc">${event.desc}</div>
      <div class="card-date">📅 ${event.date}</div>
      <div class="card-location">📍 ${event.location}</div>
      <div class="card-tags">
        ${event.tags.map(tag => `<span class="tag ${tag.toLowerCase()}">${tag}</span>`).join('')}
      </div>
      <a href="#">Click to visit official website</a>
    </div>
  `;
  root.appendChild(card);
});

const nav = document.createElement('nav');
nav.innerHTML = `
  <a href="#">Free Events</a>
  <a href="#">Trial Classes</a>
  <a href="#">Favorites</a>
`;
document.body.insertBefore(nav, root);