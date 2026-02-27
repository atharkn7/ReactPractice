import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img.src}
        alt={entry.img.alt}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}