import './styles/Dashboard.css'
 
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to your Inventory Management System!</p>
 
      <div className="stats-container">
 
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>120</p>
        </div>
 
        <div className="stat-card">
          <h3>Available Stock</h3>
          <p>350</p>
        </div>
 
        <div className="stat-card">
          <h3>Low Stock</h3>
          <p>15</p>
        </div>
 
        <div className="stat-card">
          <h3>Out of Stock</h3>
          <p>5</p>
        </div>
 
      </div>
    </div>
  )
}
 
export default Dashboard