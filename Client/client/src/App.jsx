import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import './App.css'
 
function App() {
  return (
    <div className="app">
      <Header />
 
      <div className="main-layout">
        <Sidebar />
 
        <main className="content">
          <Dashboard />
          <Products />
        </main>
      </div>
    </div>
  )
}
 
export default App