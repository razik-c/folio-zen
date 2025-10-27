Setup

Install dependencies:

npm install


Add .env:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require"
NUXT_SITE_URL="http://localhost:3000"
NUXT_GTAG_ID=""


Generate + apply DB migrations:

npm run db:generate
npm run db:migrate

Development
npm run dev

Build
npm run build
npm run preview
