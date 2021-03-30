import GoogleAnalyticsHOC from '../lib/gtag'

export default function Header() {
  return (
    <header>
      <title>egstep</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="egstep" key="title"/>
      <GoogleAnalyticsHOC/>
    </header>
  )
}
