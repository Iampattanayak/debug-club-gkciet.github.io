# Debug Club Website - Maintenance Guide

The website has been redesigned with a modern **Neon Green + Dark** theme.
It is built using **Jekyll**, **Bootstrap 5**, and **Liquid Templates**.

## 📂 Project Structure

- `_data/`: **This is where you edit content!**
  - `events.yml`: Add upcoming hackathons and workshops.
  - `projects.yml`: Add new student projects.
  - `team.yml`: Update leadership and members.
  - `resources.yml`: Add roadmaps and docs.
- `_includes/`: Reusable HTML components (`hero.html`, `project-card.html`, etc).
- `_sass/custom/`: CSS variables and theme styles.
- `assets/images/`: Upload your images here.

## 🚀 How to Add Content

### Adding a New Event
1. Open `_data/events.yml`.
2. Add a new entry under `upcoming`:
   ```yaml
   - title: "New Event Name"
     type: "WORKSHOP"
     date: "Dec 10, 2024"
     description: "Short description."
     image: "/assets/images/events/my-event.jpg"
     link: "#"
   ```

### Adding a Project
1. Open `_data/projects.yml`.
2. Add to the `list`:
   ```yaml
   - title: "My Cool App"
     description: "What it does."
     image: "/assets/images/projects/app.jpg"
     icons: ["fab fa-react", "fab fa-python"]
   ```

## 🎨 Customizing Design
- Change colors in `_sass/custom/_variables.scss`.
- Edit layouts in `_layouts/page.html`.
- Edit Navbar/Footer in `_includes/navbar.html` & `_includes/footer_custom.html`.

## ✅ TODO List for Club Members
- [x] Replace placeholder images in `assets/images/`.
- [ ] Update social links in `_includes/footer_custom.html`.
- [x] Add real member data in `_data/team.yml`.
- [ ] Configure Formspree ID in `contact.md`.

