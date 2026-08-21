import { Link } from '@chakra-ui/react'

export type Company = '410Labs' | 'ODAFF'

export type CompanyDetail = {
  name: string
  longName?: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key: string]: CompanyDetail
} = {
  ODAFF: {
    name: 'Oklahoma Dept. of Agriculture',
    longName: 'Oklahoma Department of Agriculture, Food and Forestry',
    subDetail: 'Food Safety Division',
    url: 'https://ag.ok.gov/divisions/food-safety/',
    position: 'API/JavaScript Developer',
    duration: 'Jun 2025 - Present',
    logo: {
      light: '/worked_at_logos/odaff/odaff_light.svg',
      dark: '/worked_at_logos/odaff/odaff_dark.svg',
    },
    roles: [
      <>
        Replaced a fully manual, paper-based licensing process (1,000+
        applications previously processed and paid by hand) by building the
        department's Homemade Food Public and Admin applications from scratch
        -- including registration, renewal, and payment flows -- and
        migrating off a legacy Braintree integration to a new payment module.
      </>,
      <>
        Set up end-to-end test coverage with Playwright and CI/CD pipelines in
        GitHub Actions (linting, type-checking, e2e tests) to keep the
        application stable as it grew.
      </>,
      <>
        Designed and implemented a new SQL Server database schema (including
        system-versioned tables) and led migration of legacy Excel-based
        licensing records into it.
      </>,
      <>
        Built the admin dashboard for license management -- searchable
        records, contact/company management, configurable program variables,
        and automated email notifications.
      </>,
      <>
        Collaborated with engineering and database teams to scope
        requirements and reduce complexity by clarifying edge cases, and
        supported QA on a sibling licensing application.
      </>,
    ],
  },
  '410Labs': {
    name: '410 Labs',
    // longName: 'Deloitte Consulthing Phils. Delivery Center',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://410labs.com/',
    position: 'Software Engineer',
    duration: 'Mar 2022 - Mar 2026',
    logo: {
      light: '/worked_at_logos/410labs/410labs_dark.svg',
      dark: '/worked_at_logos/410labs/410labs.png',
    },
    roles: [
      <>
        Built a complete Next.js/React/TypeScript prototype using component
        based architecture (modals, animations via Framer Motion, gamification,
        mobile layouts), and delivered production UI features including landing
        pages with A/B testing, a testimonial carousel, redesigned auth flows,
        and accessibility tooling (axe-core, jsx-a11y).
      </>,
      <>
        Built Stripe billing infrastructure -- checkout flows, webhook handling,
        subscription lifecycle management, and payment portals -- plus
        passwordless auth, admin dashboards, Kubernetes configs, error handling
        hardening, thread-safe Vault access, and background job pipelines.
      </>,
      <>
        Drove multi-year build tooling migrations (Sprockets to Vite,
        sassc-rails to dartsass-rails, Enzyme to react-testing-library, Backbone
        globals to CJS modules, Axios to native fetch), stood up
        ViewComponent/Lookbook with MirageJS mock servers across projects, and
        established CI/CD pipelines with GitHub Actions, Dependabot grouping,
        linter annotations, and Docker/devcontainer configs.
      </>,
      <>
        Built an AI-powered email-to-calendar extraction engine
        using Claude and Gemini APIs with batched prompting, rate limiting,
        token-cost optimization, and a CSV-based prompt strategy -- backed by a
        prompt consistency testing framework, SolidQueue background
        jobs with per-user concurrency limits and priority scheduling, and
        per-user LLM cost tracking.
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.ODAFF,
  Experiences["410Labs"],
]
