import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

function Header() {
  return (
    <header className='header'>
      <img src='./src/assets/react.svg' className='logo' alt='React Logo' />
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main className='main-content'>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li className='reason-listitem'> React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li className='reason-listitem'>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      <small>© 2026 Khan development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)