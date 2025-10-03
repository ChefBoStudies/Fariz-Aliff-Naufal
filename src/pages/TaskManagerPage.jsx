import ProjectDetail from '../components/ProjectDetail'

const TaskManagerPage = () => {
  const projectData = {
    projectTitle: "Lensa Kita – Wedding Photo Web App",
    projectImage: "https://patndglssilslamhahhn.supabase.co/storage/v1/object/public/project-assets/LensaKita.png",
    technologies: [
      "Vanilla JS",
      "HTML",
      "CSS",
      "Vercel Functions",
      "Supabase Postgres",
      "Supabase Storage",
      "Sharp",
      "CSP"
    ],
    description:
      "Lensa Kami is a mobile-first, no-login wedding photo web app. Guests scan a QR, land on an event page, take or choose up to 5 photos per device, see a live gallery that updates automatically, and later export all photos. It’s a Vanilla JS single-page app hosted on Vercel with Supabase (Postgres + Storage) and serverless APIs handling upload, limits, and image processing.",
    features: [
      "QR-to-upload flow with direct deep links (no auth)",
      "5-photo/device limit using device ID (localStorage + cookie) with server-side reservations",
      "Mobile-first uploader with separate Take Photo / Choose from Gallery and accessible controls",
      "Live gallery with polling, optimistic updates, 2-column grid, and lightbox modal",
      "Robust image pipeline: orientation normalization, resize, compression, metadata stripping",
      "Secure SPA deployment: strict CSP/Permissions-Policy, RLS on DB tables, SPA rewrites",
      "Download/export via admin token and pre-signed archive links"
    ],
    challenges:
      "EXIF orientation inconsistencies across devices mitigated using server-first normalization (sharp auto-rotate + re-encode) and client hints. Broken/missing images handled by filtering at the API and removing failed tiles in the UI. Documented remaining rare edge cases and next steps (expand orientation test matrix, consider Supabase Realtime).",
    github: null,
    demo: "https://lensa-kita.vercel.app/e/lensa-kami"
  }

  return <ProjectDetail {...projectData} />
}

export default TaskManagerPage 