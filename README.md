# JanSampark

A modern civic issue reporting and resolution platform that empowers citizens to report public issues and enables officials to manage and resolve them efficiently.

## 🌟 Features

- **Citizen Portal**
  - Report public issues (potholes, streetlights, water problems, etc.)
  - Attach photos and geolocation data to issues
  - Track issue status in real-time
  - Upvote and support other citizen issues
  - View all issues on an interactive map

- **Official Dashboard**
  - Manage and assign citizen-reported issues
  - Update issue status and add resolutions
  - View analytics and statistics
  - Manage announcements and updates
  - Handle official user management

- **Admin Panel**
  - User management (citizens, officials, admins)
  - System statistics and monitoring
  - Announcement management
  - Department management
  - Issue moderation and oversight
  - Official invitations and approvals

- **Security & Verification**
  - Email-based authentication
  - DigiPIN verification for officials
  - Spam filtering for issue reports
  - Role-based access control (Citizen, Official, Admin)

- **Mapping & Visualization**
  - Interactive maps for issue visualization
  - Geolocation integration for accurate reporting
  - Clustering for better performance
  - Map-based issue browsing

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible UI component library
- **Radix UI** - Headless component primitives
- **React Leaflet** - Interactive maps
- **MapLibre GL** - Vector map rendering
- **Recharts** - Data visualization

### Backend
- **Next.js API Routes** - Serverless backend
- **Supabase** - PostgreSQL database & authentication
- **Next.js Middleware** - Request handling and auth verification

### Libraries & Tools
- **SWR** - Data fetching and caching
- **React Icons** - Icon library
- **Bad Words** - Spam filtering
- **DigiPIN** - Official verification
- **Lucide React** - UI icons

## 📋 Prerequisites

- **Node.js** 18+ or 20+
- **npm** or **yarn**
- **Supabase** account and project
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itzshoaibmalik/JanSampark.git
cd JanSampark
```

### 2. Install Dependencies

```bash
npm ci
# or
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your_supabase_anon_key
```

### 4. Configure Supabase Auth

In your Supabase project settings, add the following redirect URL for local development:

```
http://localhost:3000/auth/callback
```

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Build & Deploy

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run lint         # Run ESLint
npm run lint --fix   # Auto-fix lint issues
```

### Production
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Type Checking
```bash
npx tsc --noEmit     # Check TypeScript without emitting
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── admin/                # Admin endpoints
│   │   ├── announcements/        # Announcement management
│   │   ├── external/             # External services (geocoding)
│   │   ├── issues/               # Issue endpoints
│   │   └── resolve-issue/        # Issue resolution
│   ├── auth/                     # Authentication flows
│   │   ├── callback/             # OAuth callback
│   │   ├── confirm/              # Email confirmation
│   │   ├── login/                # Login page
│   │   ├── sign-up/              # Sign-up page
│   │   └── forgot-password/      # Password recovery
│   ├── admin/                    # Admin dashboard
│   ├── issues/                   # Issue browsing and details
│   ├── my-issues/                # User's reported issues
│   ├── officialdashboard/        # Official dashboard
│   ├── report/                   # Issue reporting form
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── ...
│   ├── admin-dashboard.tsx       # Admin dashboard component
│   ├── issues-map.tsx            # Interactive map
│   ├── LeafletMap.tsx            # Leaflet map wrapper
│   ├── login-form.tsx            # Login form
│   ├── report-form.tsx           # Issue reporting form
│   └── ...
│
├── lib/                          # Utility functions
│   ├── supabase/                 # Supabase client setup
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   ├── admin.ts              # Admin operations
│   │   └── middleware.ts         # Auth middleware
│   ├── digipin_utils.ts          # DigiPIN verification
│   ├── spam_filter.ts            # Content moderation
│   └── utils.ts                  # General utilities
│
├── public/                       # Static assets
├── scripts/                      # Development scripts
│   ├── setup-db.js               # Database setup
│   ├── create-admin.js           # Create admin user
│   └── ...
│
├── middleware.ts                 # Next.js middleware
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🔐 Authentication Flow

1. **Sign Up** → User registers with email
2. **Email Confirmation** → Supabase sends confirmation email
3. **OAuth Callback** → Exchange code for session
4. **Protected Routes** → Auth middleware validates session
5. **Role-Based Access** → Different views for Citizen/Official/Admin

## 🗺️ Key Components

### Issue Reporting
- `components/report-form.tsx` - Form to report new issues
- `components/image-viewer-dialog.tsx` - Image preview and management
- `components/LeafletMap.tsx` - Location picker for issues

### Admin Features
- `components/admin-dashboard.tsx` - Admin overview
- `components/admin-issues-client.tsx` - Issue management
- `components/AddOfficialModal.tsx` - Official user management
- `components/EditUserModal.tsx` - User editing

### Mapping
- `components/issues-map.tsx` - Interactive issues map
- `components/MapIssues.tsx` - Map visualization
- `components/home-map-wrapper.tsx` - Home page map

### Authentication
- `components/login-form.tsx` - Login interface
- `components/sign-up-form.tsx` - Registration interface
- `components/forgot-password-form.tsx` - Password recovery

## 🛡️ Security Features

- **Supabase Auth** - Secure authentication with Row-Level Security (RLS)
- **DigiPIN Verification** - Two-factor verification for officials
- **Spam Filtering** - Bad word detection in issue reports
- **Role-Based Access Control** - Different permissions for users
- **SSR Authentication** - Server-side session management via `@supabase/ssr`

## 📊 Database

The project uses **Supabase** (PostgreSQL) for data storage. Set up your database tables:

```bash
node scripts/setup-db.js
```

Create initial admin user:

```bash
node scripts/create-admin.js
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

### Important Supabase Patterns

- **Server Client**: Always create a fresh Supabase client per request in server components
- **Session Management**: Use `lib/supabase/middleware.ts` for auth validation
- **Cookie Handling**: The middleware preserves cookies automatically

### Adding New Routes

1. Create a new folder under `app/`
2. Add `page.tsx` for UI or `route.ts` for API
3. Update middleware if new protected routes are added

### Environment Variables

See `.env.example` for all required variables. Critical ones:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY` - Supabase anon key

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm ci
```

### Supabase Connection Issues
- Verify `.env.local` has correct credentials
- Check Supabase project is active
- Ensure redirect URL is whitelisted in Supabase auth settings

## 📄 License

This project is private. All rights reserved.

## 👤 Author

**Shoaib Malik**
- GitHub: [@itzshoaibmalik](https://github.com/itzshoaibmalik)
- Repository: [JanSampark](https://github.com/itzshoaibmalik/JanSampark)

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.

---

**JanSampark** - Empowering Citizens, Enabling Change 🚀
