import Link from 'next/link'
import Examples from '../components/examples'

// css style element in the middle of pages/index.js
const Index = () => {
  return (
    <main style={{ display: 'grid', placeItems: 'center', height: '100vh', overflow: 'hidden' }}>
      <section>
        <h1>Search any place in the world</h1>
        <Examples />
        <Link href="/show-redux-state">Click to see current Redux State</Link>
      </section>
    </main>
  )
}

export default Index
