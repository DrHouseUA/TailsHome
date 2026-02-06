# TailsHome

---

## Project Title

**TailsHome: A Modern, Privacy-First Animal Adoption Platform**

---

## Description

TailsHome is an open-source, web-based platform designed to streamline and modernize the animal adoption process for shelters, volunteers, and adopters. Built with a focus on privacy, accessibility, and developer ergonomics, TailsHome empowers animal welfare organizations to showcase their animals, manage adoption workflows, and engage with the community through a fast, responsive, and maintainable website. Leveraging the latest web technologies—including Vite.js and Tailwind CSS—TailsHome delivers a seamless user experience, robust performance, and a scalable architecture that is easy for contributors to extend and customize.

The project originated as a collaborative team effort, inspired by the need for transparent, user-friendly digital tools in the animal rescue sector. TailsHome is not affiliated with the Tails OS project; rather, it is a distinct initiative focused on animal welfare, with its own branding and mission. The repository was generated from the GoIT Academy’s vanilla-app-template, ensuring a solid foundation for modern frontend development and continuous deployment via GitHub Actions and GitHub Pages.

---

## Features

TailsHome offers a comprehensive suite of features tailored for animal adoption organizations and their communities. The following table summarizes the core capabilities:

| Feature                         | Description                                                                                   |
|----------------------------------|----------------------------------------------------------------------------------------------|
| Responsive UI                   | Mobile-first, accessible design for all devices                                               |
| Animal Profiles                  | Detailed listings with photos, age, breed, health status, and adoption status                |
| Adoption Workflow                | Step-by-step guidance for adopters, including application forms and volunteer contact         |
| Volunteer & Donation Info        | Sections for volunteering, donations, and community support                                  |
| Multilingual Support             | Content available in multiple languages (Ukrainian, Polish, Romanian, Turkish, English)      |
| Automated Deployment             | CI/CD pipeline with GitHub Actions for seamless updates and production builds                |
| Modular Codebase                 | Clean separation of concerns with partials, CSS modules, and asset management                |
| Performance Optimizations        | Fast load times, optimized images, and minimal bundle sizes                                  |
| Accessibility                    | Semantic HTML, keyboard navigation, and screen reader compatibility                          |
| Customizable Branding            | Easily adapt colors, logos, and content for different organizations                          |
| Open Source Collaboration        | Clear contributing guidelines and MIT license for community-driven development               |

Each feature is designed to address the real-world needs of animal shelters and their supporters. The responsive UI ensures that users can browse and interact with the platform on any device, from smartphones to desktops. Animal profiles are rich and informative, helping potential adopters make informed decisions. The adoption workflow demystifies the process, reducing friction and increasing successful placements. Multilingual support broadens the platform’s reach, while automated deployment and modular architecture make it easy for developers to maintain and extend the project.

---

## Demo

A live deployment of TailsHome is available for demonstration and testing purposes:

**Live Demo:** [https://drhouseua.github.io/TailsHome/](https://drhouseua.github.io/TailsHome/)

The demo site showcases real animal profiles, adoption information, and the full user experience as intended for end users. It is automatically updated with each push to the main branch, ensuring that the latest features and fixes are always available for review.

---

## Installation

To set up TailsHome for local development or deployment, follow these steps:

### Prerequisites

- **Node.js** (LTS version 18.x or higher recommended)
- **npm** (Node Package Manager, comes with Node.js)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DrHouseUA/TailsHome.git
   cd TailsHome
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   This command installs all required packages as specified in `package.json`, including Vite, Tailwind CSS, and related plugins.

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The application will be served at [http://localhost:5173](http://localhost:5173) by default. Any changes to source files will trigger hot module replacement and live reload.

4. **Build for Production**

   ```bash
   npm run build
   ```

   This command generates optimized, static assets in the `dist/` directory, ready for deployment.

5. **Preview the Production Build**

   ```bash
   npm run preview
   ```

   This serves the production build locally for final testing.

**Note:** If you encounter issues with the `vite` command not being recognized, ensure that dependencies are installed and that your Node.js version meets the minimum requirements. See troubleshooting tips in the [Usage](#usage) section.

---

## Usage

### Development Workflow

- **Live Development:** After running `npm run dev`, open [http://localhost:5173](http://localhost:5173) in your browser. The page will automatically reload on file changes.
- **Hot Module Replacement:** Vite provides instant updates for CSS and JavaScript changes, streamlining the development process.
- **Customizing Content:** Edit HTML partials in `src/partials/`, CSS in `src/css/`, and images in `src/img/`. Changes are reflected immediately in the browser.
- **Adding Features:** New components or sections can be added as partials and imported into `index.html` for modular development.

### Production Deployment

- **Automated CI/CD:** Every push to the `main` branch triggers a GitHub Actions workflow that builds and deploys the production version to GitHub Pages (`gh-pages` branch).
- **Base Path Configuration:** Ensure the `build` script in `package.json` uses the correct base path:

  ```json
  "build": "vite build --base=/TailsHome/"
  ```

  Replace `/TailsHome/` with your repository name if you fork or rename the project.

- **GitHub Pages Settings:** In your repository settings, under **Pages**, set the source to the `/root` folder of the `gh-pages` branch.

### Troubleshooting

- **Port Conflicts:** If port 5173 is in use, specify a different port:

  ```bash
  npm run dev -- --port 3000
  ```

- **Network Access:** To test on other devices in your network, run:

  ```bash
  npx vite --host
  ```

  This exposes the dev server to your local network.

- **Dependency Issues:** If `vite` is not recognized, ensure you have run `npm install` and that your `node_modules` directory is present. Delete `node_modules` and `package-lock.json` and reinstall if necessary.

- **Production Build Errors:** Check the console for path errors (404s) related to CSS or JS files. This often indicates an incorrect `--base` value in the build script.

---

## Technologies Used

TailsHome is built with a modern, performant technology stack optimized for rapid development and maintainability. The following table summarizes the core technologies:

| Technology         | Purpose                                         | Version / Notes                |
|--------------------|------------------------------------------------|-------------------------------|
| Vite.js            | Lightning-fast build tool and dev server        | v6.x (latest)                  |
| Tailwind CSS       | Utility-first CSS framework                     | v4.x (with official Vite plugin)|
| HTML5              | Semantic markup and accessibility               |                               |
| JavaScript (ESNext)| Interactive features and logic                  |                               |
| GitHub Actions     | CI/CD for automated deployment                  |                               |
| GitHub Pages       | Static site hosting                             |                               |
| Prettier           | Code formatting and style consistency           |                               |
| EditorConfig       | Editor settings standardization                 |                               |

**Key Details:**

- **Vite.js** provides an ultra-fast development experience with hot module replacement, optimized builds, and a modern ES module-based workflow.
- **Tailwind CSS v4** is integrated via the official Vite plugin, enabling rapid, utility-first styling with minimal configuration. No PostCSS or legacy config files are required for standard setups.
- **GitHub Actions** automates the build and deployment process, ensuring that the live site is always up to date with the latest code changes.

---

## Folder Structure

TailsHome follows a clear and modular folder structure, inspired by best practices for maintainable web applications. Below is an overview of the main directories and files:

```
TailsHome/
├── .github/
│   └── workflows/         # CI/CD workflow files (GitHub Actions)
├── assets/                # Static assets (e.g., icons, logos)
├── src/
│   ├── css/               # CSS files (Tailwind imports, custom styles)
│   ├── img/               # Images and media assets
│   ├── partials/          # HTML partials (header, footer, sections)
│   └── index.html         # Main HTML entry point
├── .editorconfig          # Editor configuration
├── .gitignore             # Git ignore rules
├── .prettierrc.json       # Prettier code formatting config
├── README.md              # Project documentation (English)
├── package.json           # Project metadata and scripts
├── package-lock.json      # Dependency lockfile
├── vite.config.js         # Vite configuration
```

**Explanation:**

- The `src/` directory contains all source files, including modular HTML partials, CSS, and images. This separation of concerns makes it easy to manage and extend the codebase.
- The `.github/workflows/` directory holds CI/CD configuration files for automated deployment.
- Multiple README translations (`README.pl.md`, `README.ro.md`, `README.tr.md`) support international contributors and users.
- Configuration files like `.editorconfig` and `.prettierrc.json` enforce code style and editor consistency across the team.

---

## Contributing Guidelines

We welcome contributions from developers, designers, and animal welfare advocates! To ensure a smooth and collaborative experience, please follow these guidelines:

### How to Contribute

1. **Fork the Repository**

   Click the "Fork" button at the top right of the GitHub page to create your own copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/TailsHome.git
   cd TailsHome
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Follow the existing code style (Prettier and EditorConfig are enforced).
   - Write clear, descriptive commit messages.
   - Update or add documentation as needed.

5. **Test Your Changes**

   - Run `npm run dev` to test locally.
   - Ensure your changes do not break existing functionality.

6. **Push and Submit a Pull Request**

   ```bash
   git push origin feature/your-feature-name
   ```

   - Open a pull request from your branch to the `main` branch of the original repository.
   - Provide a clear description of your changes and reference any related issues.

### Code of Conduct

All contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) or similar community standards. Be respectful, inclusive, and constructive in all interactions.

### Issue Reporting

- Use the GitHub Issues tab to report bugs, request features, or ask questions.
- Provide as much detail as possible, including steps to reproduce bugs and screenshots if applicable.

### Pull Request Process

- Keep pull requests focused and limited to a single feature or fix.
- Reference related issues in your pull request description.
- Respond promptly to feedback from maintainers.

### Additional Resources

- [GitHub’s official contributing guidelines](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)
- [Awesome Contributing Guides](https://github.com/mntnr/awesome-contributing) for inspiration

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the code for personal or commercial purposes, provided that you include the original copyright and license notice.

For more information, see the [LICENSE](LICENSE) file in the repository root.

**Why MIT?**  
The MIT License is short, permissive, and widely adopted in the open-source community. It encourages collaboration and reuse while protecting contributors from liability.

---

## Contact Information

**Maintainer:**  
Roman Kniazhyk ([DrHouseUA](https://github.com/DrHouseUA))  
Location: Uzhhorod, Ukraine  
GitHub: [https://github.com/DrHouseUA](https://github.com/DrHouseUA)

For questions, suggestions, or collaboration opportunities, please open an issue or pull request on GitHub. You may also reach out via [LinkedIn](https://www.linkedin.com/in/roman-kniazhyk/) (if available on the maintainer’s profile).

---

## Code Quality and CI/CD

### Code Quality

- **Prettier** is used for automatic code formatting. Run `npx prettier --write .` to format your code before committing.
- **EditorConfig** ensures consistent editor settings across different development environments.
- **Modular Structure:** The use of partials and CSS modules encourages clean, maintainable code.
- **Accessibility:** Semantic HTML and ARIA attributes are used where appropriate to support screen readers and keyboard navigation.

### Continuous Integration / Continuous Deployment (CI/CD)

- **GitHub Actions** automates the build and deployment process. Every push to the `main` branch triggers a workflow that:
  - Installs dependencies
  - Runs linting and build scripts
  - Deploys the production build to GitHub Pages (`gh-pages` branch)
- **Status Indicators:** Deployment status is visible via icons next to commit hashes (yellow = building, green = success, red = error). Detailed logs are available in the Actions tab.

---

## Accessibility and Performance

### Accessibility

- **Semantic HTML:** All pages use semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`) for improved screen reader support.
- **Keyboard Navigation:** Interactive elements are accessible via keyboard.
- **Alt Text:** All images include descriptive `alt` attributes.
- **Color Contrast:** Tailwind CSS ensures sufficient contrast for text and UI elements.

### Performance

- **Vite.js:** Provides lightning-fast development and optimized production builds.
- **Tailwind CSS:** Utility-first approach minimizes unused CSS and reduces bundle size.
- **Image Optimization:** Images in `src/img/` are optimized during the production build.
- **Code Splitting:** Vite automatically splits code for faster load times.
- **Best Practices:** Follows recommendations for asset management, caching, and modern browser support.

---

## Testing and Local Development

### Local Development

- **Hot Module Replacement:** Instant feedback on code changes via Vite’s dev server.
- **Network Testing:** Use `npx vite --host` to expose the dev server to other devices on your local network for cross-device testing.
- **Port Configuration:** Change the default port with `npm run dev -- --port 3000` if needed.

---

## Branding and README Styling Best Practices

### Branding

- **Project Identity:** TailsHome uses a distinct name and visual identity, separate from Tails OS or other similarly named projects.
- **Customizable:** Organizations can adapt colors, logos, and content to match their own branding.
- **Multilingual Support:** README files and site content are available in multiple languages to foster inclusivity.

### README Styling

- **Clear Structure:** Uses Markdown headers, tables, and code blocks for readability.
- **Visual Hierarchy:** Key sections are emphasized with bold text and tables.
- **Conciseness:** Each section is focused and actionable, following best practices from leading open-source projects.
- **Badges:** (Optional) Add badges for build status, license, and version using [shields.io](https://shields.io/) for quick project insights.

---

## Acknowledgments

- **GoIT Academy:** For providing the vanilla-app-template that served as the foundation for this project.
- **Tailwind CSS & Vite:** For their excellent documentation and developer tooling.
- **Open Source Community:** For ongoing inspiration and contributions to animal welfare technology.

---

**Built with ❤️ by the TailsHome Team and Contributors.**

---

**Happy coding, and thank you for supporting animal adoption!**
