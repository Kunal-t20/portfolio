# Kunal - AI Systems Developer Portfolio

A modern, fast, and responsive portfolio website built with Next.js (App Router), Tailwind CSS, and Framer Motion. 

## Features
- **Dynamic Projects**: Automatically fetches and displays public repositories from GitHub using the GitHub REST API.
- **Modern UI**: Sleek dark theme with glassmorphism effects and smooth Framer Motion animations.
- **Tech Stack & GitHub Stats**: Showcases skills using categorized sections and live GitHub Readme Stats.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.

## Tech Stack
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Fetching**: Native `fetch` with Next.js caching

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kunal-t20/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment
This project is optimized for deployment on [Vercel](https://vercel.com/). 
Simply import the repository into your Vercel dashboard and deploy with zero configuration. No environment variables are required by default unless you want to use a Personal Access Token to increase the GitHub API rate limit (optional).

## Customization
To configure the GitHub username being fetched, locate the `getProjects()` function inside `lib/github.ts` and modify the username in the fetch URL. Similarly, modify the React components in `/components` to adjust the design.
