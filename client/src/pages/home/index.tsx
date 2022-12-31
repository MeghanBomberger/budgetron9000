import { Link } from 'react-router-dom'
import "./Home.scss"

export const Home = () => {
  return (
    <main className="home">
      <h1>Budgetron9000</h1>
      <Link to="/dashboard">
        <button>Start</button>
      </Link>
    </main>
  )
}
