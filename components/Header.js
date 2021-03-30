import Link from 'next/link'
import GoogleAnalyticsHOC from '../lib/gtag'

export default function Header() {
  return (
    <header>
      <title>egstep</title>
      <link rel="icon" href="/favicon.ico" />
      <GoogleAnalyticsHOC/>
    </header>
  )
}
