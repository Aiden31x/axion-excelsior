# Digital Training Solutions Website

A modern, responsive website showcasing comprehensive digital training solutions across aviation, driving, manufacturing, and education sectors. Built with Next.js 15, React 19, and Tailwind CSS 4.

## About

This website provides immersive digital training solutions designed to future-proof workforces and educational institutions. Our platform offers:

- **Driving Simulator Training** - Advanced simulator technology for comprehensive driver training
- **Professional eLearning Modules** - Interactive learning solutions for training schools and corporate programs
- **Custom Training Solutions** - Tailored programs for educational institutes and businesses

## Features

- Modern, responsive design with smooth animations
- Interactive UI components with hover effects and transitions
- Multi-page architecture showcasing various training solutions
- Contact form integration with EmailJS
- Optimized performance with Next.js App Router
- TypeScript for type safety
- Tailwind CSS 4 for styling

## Tech Stack

- **Framework:** [Next.js 15.4.6](https://nextjs.org/)
- **UI Library:** [React 19.1.0](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [@emailjs/browser](https://www.emailjs.com/)

## Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact form page
│   ├── drivingschool/      # Professional training/eLearning page
│   ├── schools/            # Schools solutions page
│   ├── services/           # Services overview page
│   ├── trainingacademy/    # Driving simulator page
│   ├── userguide/          # User guide page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── AlternatingFeatures.tsx
│   ├── CTASection.tsx
│   ├── CustomerSegments.tsx
│   ├── DrivingSchool.tsx         # Driving simulator component
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProfessionalTraining.tsx  # eLearning component
│   └── ...
└── public/
    └── driving/            # Product images and assets
```

## Pages

- `/` - Home page with hero section and features overview
- `/about` - About the company and mission
- `/services` - Complete services overview
- `/trainingacademy` - Driving simulator solutions for training institutes
- `/drivingschool` - Professional eLearning modules and training programs
- `/schools` - Educational solutions for schools
- `/userguide` - Product user guides
- `/contact` - Contact form

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd work-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Environment Variables

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js application is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Add your environment variables in the Vercel dashboard
5. Deploy

For detailed deployment instructions, visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options

This Next.js app can also be deployed to:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform)
- Any Node.js hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or inquiries, please visit the contact page at `/contact` or reach out through the website.
