import Page from '../../components/layout/Page'

export async function getStaticProps(context) {
  const res  = await fetch(`https://api.github.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {props: {data},}
}

export default function fetchServerside({data}) {
  return (
    <Page>
      <h1>apij status</h1>
      <h2>msg: { data.msg || '' } </h2>
      <h2>profile: {data.profile}</h2>
    </Page>
  )
}
