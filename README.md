# PawCare

A beginner-friendly **dog care and adoption** website. It is a frontend-only demo so you can learn React, Vite, Tailwind CSS, React Router, and Cursor AI without a backend.

## Project purpose

PawCare helps visitors:

- Learn what the organization is about
- Browse fictional dogs available for adoption
- Read simple dog-care tips
- Send a contact message (shown locally as a success message)

All dogs, stats, and contact details are **sample/demo data**.

## Technologies used

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router

## Features

- Responsive navbar with a mobile hamburger menu
- Home page with a hero, featured dogs, and “Why Choose PawCare?”
- Adopt page with dog cards and breed/age filters
- Dog details page opened from **View Details**
- Dog Care page with beginner tips
- About page with mission, vision, and demo statistics
- Contact form with required-field validation and a success message
- Reusable components: Navbar, Footer, DogCard, Button, SectionTitle, Filter, ContactForm

## Folder structure

```text
public/
  dogs/            # Sample dog photos used on the site
src/
  assets/          # Logo and images
  components/      # Reusable UI pieces
  data/            # Static dog and care-tip data
  pages/           # One file per website page
  App.jsx          # Routes
  main.jsx         # App entry point
  index.css        # Tailwind styles
```

## How to install dependencies

```bash
npm install
```

## How to run the project

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## How Cursor AI was used

This project was built in Cursor as a learning exercise:

1. The empty folder was inspected first.
2. A Vite React app was scaffolded with the terminal.
3. Tailwind CSS and React Router were added.
4. Static data, reusable components, and pages were created in small steps.
5. The app was run and checked so navigation, filters, and the contact form work.

That workflow is a good way to learn Cursor: describe the goal clearly, keep files organized, and verify the site after each major change.
