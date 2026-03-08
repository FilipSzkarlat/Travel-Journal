import globe from "../assets/globe.png"

export default function Header() {
  return (
    <nav>
        <img src={globe} alt="globe icon" />
        <h1>My Travel Journal</h1>
    </nav>
  )
}
