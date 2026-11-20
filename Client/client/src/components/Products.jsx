import './styles/Products.css'
 
function Products() {
  return (
    <div className="products">
      <div className="products-header">
        <h2>Product Inventory</h2>
        <button className="add-button">+ Add Product</button>
      </div>
 
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
 
        <tbody>
          <tr>
            <td>001</td>
            <td>Laptop</td>
            <td>Electronics</td>
            <td>25</td>
            <td>₱35,000</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
 
          <tr>
            <td>002</td>
            <td>Keyboard</td>
            <td>Accessories</td>
            <td>50</td>
            <td>₱850</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
 
          <tr>
            <td>003</td>
            <td>Mouse</td>
            <td>Accessories</td>
            <td>15</td>
            <td>₱450</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
 
          <tr>
            <td>004</td>
            <td>Monitor</td>
            <td>Electronics</td>
            <td>5</td>
            <td>₱8,500</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
 
export default Products