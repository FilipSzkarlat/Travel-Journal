import Header from "./components/Header"
import Entry from "./components/Entry"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
  const entries = data.map( entry => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })

  entries.sort( (a, b) => {
    const aDates = a.props.dates.split(" - ").map( date => new Date(date) );
    const bDates = b.props.dates.split(" - ").map( date => new Date(date) );
    return bDates[1] - aDates[1];
  })

  return (
    <>
      <Header />
      {entries}
      <Footer />
    </>
  )
}

// Backlog of edits:
// - customize entries