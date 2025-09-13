import './App.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header>
        <h1>🐱 고양이 댄싱 페이지 🐱</h1>
        <p>고양이와 함께 춤춰보세요!</p>
      </header>
      <main>
        <DancingCat />
      </main>
    </div>
  )
}

export default App
