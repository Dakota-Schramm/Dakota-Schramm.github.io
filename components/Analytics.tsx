import { GoogleAnalytics } from '@next/third-parties/google'

export default function Analytics(): JSX.Element | null {
  const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
  if (!gaId) return null
  return <GoogleAnalytics gaId={gaId} />
}
