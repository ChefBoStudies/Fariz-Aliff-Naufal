import ProjectDetail from '../components/ProjectDetail'

const WeatherDashboardPage = () => {
  const projectData = {
    projectTitle: "Veritas AI",
    projectImage: "https://via.placeholder.com/500x400/4ade80/ffffff?text=Weather+App",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "Geolocation"],
    description: "Veritas AI is a mobile‑first, single‑page web app that ingests CSV sales data, computes real‑time KPIs, and generates natural‑language insights via Google Gemini. Users upload a CSV which is stored in Supabase; an AWS Lambda automatically fetches the latest file, parses it, aggregates metrics (products, regions, satisfaction), persists summaries, and returns results to the frontend. The UI (Airbnb‑inspired) presents KPIs, a lightweight Canvas visualization, and a clean AI Insights paragraph, all deployed on Vercel.",
    features: [
      "CSV Uploads to Supabase: Secure upload to uploads bucket with metadata in uploads table.",
      "Automated Analytics: Lambda fetches the latest file, parses via csv-parse/sync, and computes KPIs (total units, avg satisfaction, top products, sales by region).",
      "AI‑Powered Narrative: Google Gemini summarizes analytics into a concise, readable paragraph.",
      "Resilient Backend: CORS/preflight support, request timeouts, and graceful fallbacks (including default dataset).",
      "Customizable dashboard with widget system",
      "Instant Visualization: Lightweight Canvas chart for quick data overview.",
    ],
    challenges: "Getting a serverless pipeline to behave reliably required addressing CORS preflight nuances in API Gateway/Lambda, enforcing Supabase RLS while still allowing anonymous uploads and reads, and normalizing inconsistent CSV schemas. The Gemini API demanded careful prompt design and response parsing (handling empty or token‑limited outputs) plus client‑side timeouts to respect Lambda limits. On the frontend, ensured robust API Gateway response parsing, consolidated multiple AI sentences into a single paragraph.",
    github: "https://github.com/ChefBoStudies/VeritasAI",
    demo: "https://veritas-ai-beta.vercel.app/",
    techDescriptions: [
      { name: 'Vanilla JavaScript, HTML, CSS', details: 'Fast, dependency‑light SPA with accessible, responsive UI.' },
      { name: 'AWS Lambda + API Gateway', details: 'Serverless analytics endpoint with CORS, timeouts, and JSON responses.' },
      { name: 'Google Gemini API', details: 'LLM‑generated narrative insights from aggregated metrics.' },
      { name: 'csv-parse/sync', details: 'Reliable CSV parsing with header support and empty‑line handling.' }
    ],
    developmentProcess: [
      { title: 'Design the UX/UI', description: 'Airbnb‑inspired typography, spacing, and component system; mobile‑first and accessible.' },
      { title: 'Implement Upload Flow', description: 'Client validates CSV, uploads to Supabase Storage, inserts metadata into uploads.' },
      { title: 'Harden Data Layer', description: 'Create tables and RLS policies to allow anon write/read only where needed.' },
      { title: 'Build Analytics Lambda', description: 'Fetch latest CSV, parse via csv-parse/sync, compute KPIs, persist summaries to insights.' },
      { title: 'Integrate Gemini', description: 'Prompt engineering for concise paragraphs; parse/normalize responses; add timeouts and fallbacks.' },
      { title: 'Frontend Integration', description: 'Call Lambda, parse API Gateway body, render KPI cards, AI paragraph, and Canvas chart.' },
      { title: 'CORS & Reliability', description: 'Add OPTIONS handler, CORS headers, and preflight support; handle API errors gracefully.' },
      { title: 'Deploy & Tune', description: 'Configure Vercel outputDirectory, remove problematic headers/functions, polish UI (remove gradients, consistent primary color).' }
    ],
    resultsImpact: [
      'Performance: ~1–3s analytics; ~6–9s AI response with graceful fallbacks under timeouts.',
      'Reliability: Stable cross‑origin calls (CORS fixed), resilient to empty/invalid LLM outputs.',
      'Production Readiness: Vercel‑deployed SPA with secure Supabase RLS and a robust serverless backend.'
    ]
  }

  return <ProjectDetail {...projectData} />
}

export default WeatherDashboardPage 