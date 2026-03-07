# Solar Next.js Website

A modern, responsive solar installation website built with Next.js, TypeScript, and Tailwind CSS. This project provides information on solar services, subsidy details (focused on India), a solar calculator for estimates, and contact functionality.

## 🌐 Live Demo

Visit the live website: [https://solar-nextjs-git-main-amit-kumar-singhs-projects-5215d39d.vercel.app/](https://solar-nextjs-git-main-amit-kumar-singhs-projects-5215d39d.vercel.app/)

## 📋 Features

- **Home Page**: Hero section with call-to-action
- **Services**: Overview of solar installation services
- **Subsidy**: Information on solar subsidies in India
- **Calculator**: Simple solar energy cost and savings calculator
- **About**: Company information
- **Contact**: Contact form for inquiries
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Built with Next.js for better search engine visibility

## 🛠️ Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for animations)
- **Next SEO** (for SEO optimization)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/solar-nextjs.git
   cd solar-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
solar-nextjs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── calculator/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── subsidy/
│       └── page.tsx
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Hero.tsx
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 📝 Usage

- Navigate through the pages using the header navigation.
- Use the calculator page to estimate solar installation costs and savings.
- Fill out the contact form to get in touch.

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will automatically deploy your Next.js app.

## 🔧 Next Steps / Improvements

- Integrate a CMS (e.g., Firebase, Supabase) for editable subsidy content.
- Implement a backend API for the contact form (e.g., SendGrid, Zapier).
- Add more detailed subsidy information with state-wise data.
- Enhance SEO with structured data.
- Add unit tests for components.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
