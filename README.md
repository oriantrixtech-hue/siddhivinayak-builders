# Siddhivinayak Builders Pvt. Ltd.

Premium construction company website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion-ready architecture, Lucide, React Hook Form, and Zod.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install` and `npm run dev`.
3. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the real deployed origin to enable canonical metadata and sitemap URLs. No domain has been assumed.

## Contact form delivery

The form validates in the browser and at `/api/contact`. Set `CONTACT_SUBMISSION_URL` to a trusted HTTPS endpoint that accepts the documented JSON fields (`name`, `email`, `phone`, `projectType`, `subject`, `message`) and delivers them to the company. Without this variable, the endpoint returns HTTP 503 and the UI asks users to call or email instead of showing a false success. Configure authentication or provider credentials on the server/provider side; do not expose secrets in `NEXT_PUBLIC_*` variables.

## Replaceable assets

`src/config/images.ts` contains clearly illustrative remote architecture placeholders. Replace them with licensed or company-approved photographs before launch. The founder image is a neutral portrait placeholder, not a verified photograph of the named founder. Social links are placeholders until official profiles are provided.
