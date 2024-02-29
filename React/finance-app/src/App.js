import React, {useState, useEffect} from "react"
import api from './api'

const App = () => {
  const [transactions, setTransaction] = useState([])
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  });

  const fetchTransaction = async () => {
    const response = await api.get("/transactions");
    setTransaction(response.data)
};

useEffect(() => {
fetchTransaction();
}, []);

const handleInputChange = (event) => {
  const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value 
  setFormData({
    ...formData, 
    [event.target.name]: value,
  });
}

const handleFormSubmit = async (event) => {
  event.preventDefault(); 
  await api.post('/transactions', formData);
  fetchTransaction();
  setFormData({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  }) 


}

return (
<div>
<nav className="navbar navbar-dark bg-primary">  

<div className="container-fluid"> 

<a className="navbar-brand" href="#">

Fiance APP
</a>


</div>
</nav>
<div className="container"> 
<form onSubmit={handleFormSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="amount" className="form-lable">
      Amount
    </label>
    <input type="text" className="form-control" id="amount" name="amount" onChange={handleInputChange} value={formData.amount}/>
  </div>


  <div className="mb-3 mt-3">
    <label htmlFor="category" className="form-lable">
      Category
    </label>
    <input type="text" className="form-control" id="category" name="category" onChange={handleInputChange} value={formData.category}/>
  </div>

  <div className="mb-3">
    <label htmlFor="description" className="form-lable">
      Description
    </label>
    <input type="text" className="form-control" id="description" name="description" onChange={handleInputChange} value={formData.description}/>
  </div>

  <div className="mb-3">
    <label htmlFor="is_income" className="form-lable">
  Income? 
    </label>
    <input type="checkbox" id="is_income" name="is_income" onChange={handleInputChange} value={formData.is_Income}/>
  </div>

  <div className="mb-3">
    <label htmlFor="date" className="form-lable">
      Date
    </label>
    <input type="text" className="form-control" id="date" name="date" onChange={handleInputChange} value={formData.date}/>
  </div>

<button type= "submit" className="btn btn primary">
submit
</button>



  </form> 

  <table className="table table-striped table-bordered table-hover">
    <thead>
   <tr>
    <th> Amount </th>
    <th>  Category  </th>
      <th>Description</th>
      <th>Income? </th>
      <th> Date </th>
      </tr>
    </thead>
<tbody>
  {transactions.map((transactions)=> (
    <tr key = {transactions.id}>
      <td>{transactions.amount}</td>
      <td>{transactions.category}</td>
      <td>{transactions.description}</td>
      <td>{transactions.is_income ? "Yes": "No"}</td>
      <td>{transactions.date}</td>
    </tr>
  
  ))}
      </tbody>
    </table>
  </div>
</div>
)

}



export default App;
