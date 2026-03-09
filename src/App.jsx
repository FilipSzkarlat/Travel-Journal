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
  return (
    <>
      <Header />
      {entries}
      <Footer />
    </>
  )
}

// Backlog of edits:
// - preapre mobile view
// - change order of displayed entiries to show the most recent one first
// - customize entries