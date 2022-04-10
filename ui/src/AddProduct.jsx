import React from 'react';

export default class AddProduct extends React.Component {
  constructor(props) {
      super(props);
      this.state = defaultState
  }

  onAddHandler(event) {
      event.preventDefault();
      const data = {...this.state}
      data.price = parseFloat(this.state.price.slice(1, this.state.price.length))
      this.props.onAdd({...data});
      this.setState({...defaultState})
  }

  setPrice(val){
      this.setState({price: val})
  }
  setCategory(val){
      this.setState({category: val})
  }
  setUrl(val){
      this.setState({url: val})
  }
  setName(val){
      this.setState({name: val})
  }

  render() {
      return (
          <div>
              <h3> Add a new product to Inventory</h3>
              <hr></hr>
              <form onSubmit={(event)=>this.onAddHandler(event)} className="product-form">
                  <div className="form-input">
                      <label htmlFor="category">
                          Category
                      </label>
                      <select name="category" onChange={(e)=>{this.setCategory(e.target.value)}} value={this.state.category}>
                          <option value=""    >---select category---</option>
                          <option value="Shirt">Shirt</option>
                          <option value="Jeans">Jeans</option>
                          <option value="Jacket">Jacket</option>
                          <option value="Sweater">Sweater</option>
                          <option value="Accessories">Accessories</option>
                      </select>
                  </div>
                  <div className="form-input">
                      <label htmlFor="price">
                          Price Per Unit
                      </label>
                      <input name="price" placeholder="$" onChange={(e)=>this.setPrice(e.target.value)} value={this.state.price}></input>
                  </div>
                  <div className="form-input">
                      <label htmlFor="name">
                          Product Name
                      </label>
                      <input name="name" onChange={(e)=>{this.setName(e.target.value)}} value={this.state.name}></input>
                  </div>
                  <div className="form-input">
                      <label htmlFor="url">
                          Image URL
                      </label>
                      <input name="url" onChange={(e)=>{this.setUrl(e.target.value)}} value={this.state.url}></input>
                  </div>
                      <button className="submit-btn" type='submit'>Add Product</button>
              </form>
          </div>
      )
  }
}