import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./styles.css"
import { useState } from 'react';
import { useEffect } from 'react';

const Pedidos = () => {

  const [mailInput, setMailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [items, setItems] = useState([])
  const [productInput, setProductInput] = useState('')
  const [quantityInput, setQuantityInput] = useState('')
  const [address1Input, setAddress1Input] = useState('')
  const [address2Input, setAddress2Input] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [stateInput, setStateInput] = useState('')
  const [zipInput, setZipInput] = useState('')

  useEffect(() => {
    document.getElementById("phoneNumberInput").classList.add("form-control")
  }, [])


  const addProduct = () => {
    setItems([...items, {"product": productInput, "quantity": quantityInput}])
  }

  const deleteProduct = (index) => {
    items.splice(index, 1);
    setItems([...items])
  }
  

    return (
        <>
        <div className='contact-container'>
        <form class="row g-3">
          <div className='col-12'>
            <h4>Datos de Pedido</h4>
          </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Correo Electrónico</label>
    <input type="email" class="form-control" id="inputEmail4" value={mailInput} onChange={e=>setMailInput(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="phoneNumberInput" class="form-label">Phone</label>
    <PhoneInput
      placeholder="Enter phone number"
      defaultCountry='MX'
      id="phoneNumberInput"
      value={phoneInput}
      onChange={setPhoneInput}/>
  </div>

  <div className='col-md-6'>
    <label for="inputEmail4" class="form-label">Producto</label>
    <input type="text" class="form-control" id="inputEmail4" value={productInput} onChange={e=>setProductInput(e.target.value)}/>
  </div>
  <div className='col-md-4'>
    <label for="inputEmail4" class="form-label">Cantidad</label>
    <input type="text" class="form-control" id="inputEmail4" value={quantityInput} onChange={e=>setQuantityInput(e.target.value)}/>
  </div>
  <div className='col-md-2'>
    <button type="button" class="btn btn-primary add-product" onClick={() => addProduct()}>Añadir</button>
  </div>

  {items && items.map((ele, index) => (
    <div className='product-view'>
      <div>
        <p className='product-desc'>{ele.product}</p>
      </div>
      <div>
        <p className='product-desc'>{ele.quantity}</p>
      </div>
      <div>
        <button type="button" class="btn" onClick={() => deleteProduct(index)}><i class="bi bi-x-lg"></i></button>
      </div>
    </div>
  ))}

  <div className='col-12'>
            <h4>Datos de Envio</h4>
          </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address1Input} onChange={e=>setAddress1Input(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2Input} onChange={e=>setAddress2Input(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" value={cityInput} onChange={e=>setCityInput(e.target.value)}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" value={stateInput} onChange={e=>setStateInput(e.target.value)}>
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" value={zipInput} onChange={e=>setZipInput(e.target.value)}/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
        </div>
        </>
    )
}

export default Pedidos;