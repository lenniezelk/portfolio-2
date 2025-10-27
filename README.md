# Leonard Kinyanjui - Portfolio

A modern, responsive portfolio website showcasing my experience as a Frontend Developer, Motion Designer, and Indie Game Developer.

## 🚀 Live Site

Visit the live portfolio at: [https://lennyk.dev/](https://lennyk.dev/)

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: TanStack Router (File-based routing)
- **Styling**: Tailwind CSS with custom gradients
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Self-hosted

## ✨ Features

- **Modern Dark Theme**: Beautiful gradient backgrounds and glass-morphism effects
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive UI**: Smooth hover animations and transitions
- **Performance Optimized**: Fast loading with Vite bundling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Updating Content

- **Personal Info**: Edit `src/routes/index.tsx`
- **Resume**: Replace `public/LeonardKinyanjui.pdf` with your resume
- **Meta Tags**: Update `src/routes/__root.tsx` for SEO
- **Styling**: Modify Tailwind classes in components

### Adding Projects

The projects section is ready for your projects. Update the Projects section in `src/routes/index.tsx` to showcase your work.

## 🧪 Development Tools

- **Linting**: ESLint with TanStack config
```bash
pnpm lint
```

- **Formatting**: Prettier
```bash
pnpm format
```

- **Type Checking**: TypeScript
```bash
pnpm check
```

## 📁 Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout with meta tags
│   └── index.tsx           # Main portfolio page
├── assets/
│   └── LeonardKinyanjui.pdf # Resume PDF
└── styles.css              # Global styles
```

## 🚀 Deployment

The project is configured for easy deployment. Current deployment uses rsync to a VPS:

```bash
rsync -av -e "ssh" --exclude "node_modules" --exclude ".git" . user@server:/path/to/deployment
```

## 📧 Contact

- **Email**: leonardkioi370@gmail.com
- **Blog**: [https://hashnode.com/@lkioi](https://hashnode.com/@lkioi)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using modern web technologies
