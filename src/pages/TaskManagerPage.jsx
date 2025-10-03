import ProjectDetail from '../components/ProjectDetail'

const TaskManagerPage = () => {
  const projectData = {
    projectTitle: "Lensa Kita - Wedding Photo Web App",
    projectImage: "https://patndglssilslamhahhn.supabase.co/storage/v1/object/public/project-assets/LensaKita.png",
    technologies: [
      "Vanilla JS",
      "HTML",
      "CSS",
      "Vercel Functions",
      "Supabase (Postgres & Storage)",
      "sharp"
    ],
    description: "Lensa Kami is a mobile-first, no-login wedding photo web app. Guests scan a QR, land on an event page, take or choose up to 5 photos per device, see a live gallery that updates automatically, and later export all photos. It’s a single‑page app hosted on Vercel with Supabase handling database, storage and upload limits.",
    features: [
      "QR → upload deep-links directly to event pages (no auth)",
      "5-photos-per-device enforced with device IDs (localStorage + cookies)",
      "Mobile-first uploader: separate Take Photo / Choose from Gallery actions",
      "Live gallery with polling + optimistic updates and a lightbox modal",
      "Server-side image pipeline: auto-rotate, resize, compress, strip EXIF",
      "Hardened SPA: strict CSP/Permissions-Policy, RLS on DB tables",
      "Admin export token + pre-signed links for full-archive downloads"
    ],
    challenges: "Handled cross-device image orientation inconsistencies with server-first normalization (sharp auto-rotate + re-encode). Avoided broken tiles by filtering missing objects and removing failed tiles in the UI. Documented remaining rare edge-cases for a future iteration.",
    github: null,
    demo: "https://lensa-kita.vercel.app/e/lensa-kami",
    techDescriptions: [
      { name: 'Vanilla JavaScript', details: 'ES modules SPA with router, state, and accessible, mobile-first components.' },
      { name: 'Vercel Functions', details: 'Serverless APIs for event fetch, upload reservation, upload proxy, and recording photo metadata.' },
      { name: 'Supabase', details: 'Postgres with RLS; Storage for images; RPC for atomic device upload-limit enforcement.' },
      { name: 'sharp', details: 'Server-side image normalization: auto-rotate, resize (~2000px), compress, strip EXIF for speed and consistency.' }
    ],
    developmentProcess: [
      { title: 'Discovery & Scope', description: 'Defined guest UX: QR → event → upload up to 5 photos/device → live gallery → later export.' },
      { title: 'Schema & Policies', description: 'Designed events, photos, upload_reservations; enabled RLS; wrote reserve_upload_slot RPC.' },
      { title: 'API-first', description: 'Endpoints for event fetch, photo listing, upload reservation, upload proxy, image proxy.' },
      { title: 'Frontend SPA', description: 'Mobile-first uploader, optimistic UI, 2-column gallery with lightbox and dedicated close action.' },
      { title: 'Hardening', description: 'Strict CSP/Permissions-Policy, SPA rewrites, filtered missing objects, no-store caching headers.' }
    ],
    resultsImpact: [
      'Deployed for a real wedding; smooth QR → upload flow with strong guest participation and zero downtime.',
      'Hundreds of photos uploaded in hours; polling kept galleries fresh without socket complexity.',
      'Delightful, accessible mobile-first UX made it easy for all guests to participate.'
    ]
  }

  return <ProjectDetail {...projectData} />
}

export default TaskManagerPage 