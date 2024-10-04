
# 🌐 2-Page Web App

This project is a modern **2-page web application Named Ecomposer** built using the latest technologies, including **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **React.js**. The app is designed to be fully responsive, feature-rich, and optimized for both performance and scalability. Additionally, this web app has been enhanced with **Progressive Web App (PWA)** capabilities, ensuring a seamless user experience across different devices and network conditions.

## 🚀 Features

- **Next.js 14** for optimized, server-side rendering and API integration
- **Tailwind CSS** for fast, responsive, and modern UI design
- **TypeScript** for type safety and enhanced code quality
- **React.js** for a dynamic and reusable component-based architecture
- **PWA enabled** for offline access, mobile-first experience, and improved performance
- Fully **responsive design**, ensuring great usability on mobile, tablet, and desktop
- **Animations** powered by `AOS` (Animate on Scroll) and Material UI Icons for a rich user interface

## 📄 Pages Overview

### 1. Contact Us Page

This page showcases how to structure data-driven components and animate UI elements.

#### Key Concepts:
- **Data Mapping**: An array of objects containing all the content for the page is dynamically mapped to the UI using **JSX**.
- **AOS Animation**: Implemented smooth animations using **AOS (Animate on Scroll)** library combined with **useEffect** to ensure animations only trigger when the specific component renders.
- **Material UI Icons**: Enhanced the design with icons from **Material UI** for a visually engaging experience.
- **Responsive Design**: Tailored the layout to adapt to different screen sizes using **Tailwind CSS breakpoints**.
- **Technologies**: **Next.js 14**, **Tailwind CSS**, **TypeScript**.

\`\`\`javascript
const contactDetails = [
  { id: 1, icon: <PhoneIcon />, text: 'Call Us: +91-7347526454' },
  { id: 2, icon: <EmailIcon />, text: 'Email: anmol.aneja@appinventiv.com' },
];

return (
  <div data-aos="fade-up">
    {contactDetails.map((detail) => (
      <div key={detail.id}>
        {detail.icon}
        {detail.text}
      </div>
    ))}
  </div>
);
\`\`\`

### 2. Lead Generation Page

A high-performance, interactive lead generation page with a countdown timer and mobile-first features.

#### Key Concepts:
- **Countdown Timer**: Implemented a timer using **useEffect**, **setInterval**, and **clearInterval**. The countdown updates every second, creating a dynamic user experience.
- **OnClick with Animation**: Created an interactive sliding icon that reveals one image at a time. The functionality is managed using **useRef**, **useState**, and rendered only on mobile screens for an optimized experience.
- **Responsive & Animated**: Tailwind CSS was used to handle responsiveness, and sliding animations make the UI engaging on mobile devices.
- **Technologies**: **Next.js 14**, **Tailwind CSS**, **TypeScript**.

\`\`\`javascript
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(prevTime => prevTime - 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, []);
\`\`\`

## 🛠 Technologies Used

- **Next.js 14**: A powerful React framework for server-side rendering, static site generation, and API routes.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive design.
- **TypeScript**: Typed JavaScript that scales, reducing errors and increasing code quality.
- **React.js**: The core library for building dynamic user interfaces with reusable components.
- **AOS**: For implementing scroll animations and smooth transitions.
- **Material UI Icons**: A collection of beautiful icons to enhance the user interface.
- **PWA (Progressive Web App)**: Enabled for offline access and a mobile-first approach, built using Next.js 14.

## 📱 Progressive Web App (PWA)

This web application is PWA-enabled, making it accessible offline, installable on mobile devices, and capable of running faster even on slow networks. By adding PWA capabilities, the app can cache assets, offer a more app-like experience, and improve performance.

### Key PWA Features:
- **Offline Access**
- **Push Notifications**
- **App Installation** on supported devices

## 🖥️ Installation & Setup

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/your-repo-name.git
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and go to \`http://localhost:3000\` to see the app.

## 🌟 Demo

Check out the live demo [here](#).

## 🤝 Contributions

Feel free to fork this repository, submit pull requests, or file issues. Contributions are highly appreciated!

---

**Author**: [Anmol Aneja]

---

This project is licensed under the MIT License.
