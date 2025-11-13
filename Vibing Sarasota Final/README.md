# Vibing Sarasota

A modern web application showcasing local businesses and attractions in Sarasota, Florida.

## Features

- Browse businesses by category (Beaches, Food & Dining, Hotels, Golf Spots, Shopping, Exercise Spots)
- Search functionality across all categories
- Submit business suggestions
- Responsive design with beautiful UI
- Real-time data fetching with React Query

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## API Configuration

The project ships with a full set of mock data so you can run it without any backend.  
You can opt-in to remote APIs in two areas:

### Business listings (optional)

If you have an API that serves business data:

1. Create a `.env` file in the project root.
2. Add `VITE_BUSINESSES_API_URL=https://your-business-api.example.com`.
3. The catalogue pages will call your API instead of the bundled mock data.

If you want the same endpoint to handle both listings and suggestions, you can still use `VITE_API_URL` (without a Supabase key) and the app will reuse that URL.

### “Suggest a Business” form (Supabase recommended)

To persist user submissions:

1. Create a [Supabase](https://supabase.com/) project (free tier works great).
2. In the SQL editor run:

   ```sql
   create extension if not exists "uuid-ossp";

   create table suggested_businesses (
     id uuid primary key default uuid_generate_v4(),
     name text not null,
     phone text,
     address text,
     category text not null,
     description text,
     created_at timestamp default now()
   );
   ```

3. Enable Row Level Security for `suggested_businesses`, then add an insert policy:

   ```sql
   create policy "Allow inserts from anon"
   on suggested_businesses
   for insert
   using (true);
   ```

4. Add the following to your `.env` file:

   ```
   VITE_API_URL=https://your-project-id.supabase.co/rest/v1
   VITE_SUPABASE_KEY=your-anon-key
   ```

   Optional overrides:

   ```
   VITE_SUGGESTIONS_API_URL=https://your-project-id.supabase.co/rest/v1
   VITE_SUGGESTIONS_API_KEY=another-key-if-needed
   ```

5. Restart `npm run dev`. Form submissions will now be sent to Supabase and stored in the `suggested_businesses` table. You can view them in the Supabase dashboard under **Table Editor**.

### Database access

- Project URL: `https://tdrlhpaqmttfhivihemd.supabase.co`
- Database password: `SdYoGtU9wBSMdUr5`

To explore data directly in Supabase:

1. Sign in at [supabase.com](https://supabase.com) using your account.
2. Select the `Vibing-Sarasota` project.
3. Use the **Table Editor** for quick browsing.
4. For SQL queries, open **SQL Editor** and run statements against the `suggested_businesses` table.
5. If you need a direct Postgres connection (psql, Postico, etc.), copy the connection string from **Project Settings → Database** and use the password above.

## Project Structure

```
src/
├── api/              # API client and services
├── components/       # Reusable React components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── utils/           # Helper utilities
```

## License

MIT
