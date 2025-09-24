# TEAMiN Corporate Website

A modern corporate website built with React, TypeScript, and Vite, featuring multi-language support and responsive design.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Internationalization**: i18next & react-i18next
- **Icons**: Lucide React

## Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** package manager
- **Git**

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TEAMiN-Website/corporate-site.git
cd corporate-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The development server will start and the application will be available at:
```
http://localhost:5173
```

The server supports hot module replacement (HMR), so changes to your code will be reflected immediately in the browser.

## Available Scripts

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the app for production
- **`npm run lint`** - Runs ESLint to check for code quality issues
- **`npm run preview`** - Preview the production build locally

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components (Header, Footer, Layout)
├── contexts/           # React contexts (Theme, etc.)
├── i18n/              # Internationalization setup
│   └── locales/       # Language files (en.json, de.json)
├── pages/             # Page components for routing
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Features

- 🌍 **Multi-language support** (English/German)
- 🎨 **Dark/Light theme** support
- 📱 **Responsive design** with Tailwind CSS
- ⚡ **Fast development** with Vite HMR
- 🛣️ **Client-side routing** with React Router
- 🔍 **SEO-friendly** structure
- 🎯 **TypeScript** for type safety

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory and can be served by any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## Infrastructure

The project includes AWS CDK infrastructure configuration in the `infrastructure/` directory for deployment to AWS.

## Automated Deployment

This project uses GitHub Actions for automated CI/CD deployment to AWS. There are two main deployment workflows:

### 1. Main Branch Deployment (`deploy-main.yml`)

**Triggers:**
- Automatically on pushes to the `main` branch (excluding markdown file changes)
- Manual workflow dispatch with environment selection

**Process:**
1. Checks out code and sets up Node.js 20
2. Caches npm dependencies for faster builds
3. Installs dependencies with `npm ci`
4. Builds the frontend application
5. Configures AWS credentials using OIDC
6. Deploys to AWS using CDK with UAT environment by default

### 2. Production Deployment (`deploy.yml`)

**Triggers:**
- Automatically on pushes to the `production` branch
- Manual workflow dispatch with environment selection (dev/uat/prod)

**Process:**
- Same build and deployment steps as main branch
- Supports multiple environment deployments through manual triggers

### Deployment Environments

The workflows support three environments:
- **dev** - Development environment
- **uat** - User Acceptance Testing (default for main branch)
- **prod** - Production environment

### AWS Configuration

- **Region**: eu-west-1 (Ireland)
- **Authentication**: Uses GitHub OIDC with AWS IAM role
- **CDK**: Automated bootstrapping and deployment with change sets
- **Concurrency**: Prevents concurrent deployments to the same environment

### Manual Deployment

You can manually trigger deployments through GitHub's Actions tab:

1. Go to the repository's **Actions** tab
2. Select either "Deploy from main automatically" or "Build and Deploy with cache"
3. Click **Run workflow**
4. Select the target environment (dev/uat/prod)
5. Click **Run workflow**

### Deployment Features

- 🔄 **Automatic deployments** on code changes
- 🏗️ **Build caching** for faster deployment times
- 🔒 **Secure AWS authentication** with OIDC
- 🎯 **Multi-environment support** (dev/uat/prod)
- 📋 **Change set management** for tracking deployments
- ⚡ **Concurrent deployment protection**

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run linting: `npm run lint`
4. Test the build: `npm run build`
5. Submit a pull request

## Troubleshooting

### Common Issues

**Port already in use**: If port 5173 is already in use, Vite will automatically try the next available port.

**Node modules issues**: Try deleting `node_modules/` and `package-lock.json`, then run `npm install` again.

**TypeScript errors**: Ensure you're using Node.js version 18+ and all dependencies are properly installed.

## Browser Support

This application supports all modern browsers that support ES2015+ features.
