// Event Data
const events = [
  {
    title: "Midterm Exams",
    date: "2025-08-15",
    category: "academic",
    description: "All students will sit for midterm exams. Timetables will be distributed in class."
  },
  {
    title: "Inter-School Football Match",
    date: "2025-08-18",
    category: "sports",
    description: "Come support our girls' team at the stadium!"
  },
  {
    title: "Science Club Exhibition",
    date: "2025-08-12",
    category: "clubs",
    description: "Visit the school hall to see exciting student innovations."
  },
  {
    title: "Graduation Day",
    date: "2025-09-25",
    category: "graduation",
    description: "Celebrate the Class of 2025 with performances and speeches."
  },
  {
    title: "Debate Club ",
    date: "2025-08-20",
    category: "clubs",
    description: "Mandera Girls teams."
  }
];

// Display Events
function displayEvents(filter = "all", search = "") {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  const filtered = events.filter(event => {
    const matchesCategory = filter === "all" || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  filtered.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p class="date">${new Date(event.date).toDateString()}</p>
      <p>${event.description}</p>
    `;
    container.appendChild(card);
  });
}

// Filter Events by Category
function filterEvents(category) {
  const searchInput = document.getElementById("searchBar").value;
  displayEvents(category, searchInput);
}

// Search Input
document.getElementById("searchBar").addEventListener("input", () => {
  filterEvents("all");
});

// Countdown Timer
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("2025-09-25T00:00:00");

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "🎉 Graduation Day is here!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = `${days} days ${hours}h ${minutes}m ${seconds}s left`;
}

// Initialize
setInterval(updateCountdown, 1000);
displayEvents();