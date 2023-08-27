import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./styles.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pedidos = ({handleCount, handleMCount, nivelateCount}) => {

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
  const [searchParams] = useSearchParams();

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    document.getElementById("phoneNumberInput").classList.add("form-control")
    let param = searchParams.get("producto")
    if (param) {
      setProductInput(param)
    }
    if (localStorage.getItem("cart") !== undefined && localStorage.getItem("cart") !== null){
      localStorage.setItem("cart", localStorage.getItem("cart"));
      setCartItems(JSON.parse(localStorage.getItem("cart")))
    }
    if (localStorage.getItem("items") !== undefined && localStorage.getItem("items") !== null){
      localStorage.setItem("items", localStorage.getItem("items"));
      setItems(JSON.parse(localStorage.getItem("items")))
    }
  }, [searchParams])

  useEffect(() => {
    if (cartItems.length > 0){
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items])
  
  

  const addProduct = () => {
    if(items.findIndex(item => item.product === productInput) !== -1) {
      setItems(
        items.map(item => {
          if (item.product === productInput ){
            nivelateCount(item.quantity, quantityInput)
            return {...item, "quantity": quantityInput}
          }
          else {
            return item 

          }
        }))
    }
    else{
      setItems([...items, {"product": productInput, "quantity": quantityInput}])
      handleCount(quantityInput);
    }
  }

  const deleteProduct = (index) => {
    items.splice(index, 1);
    setItems([...items])
    localStorage.setItem("items", JSON.stringify(items));
  }

  const subsctractProduct = (index) => {
    if (items[index].quantity - 1 > 0) {
      items[index].quantity--;
    }
    else {
      deleteProduct(index);
    }
    handleMCount()
    setItems([...items])
  }

  const increaseProduct = (index) => {
    items[index].quantity++;
    handleCount();
    setItems([...items])
  }

  const deleteProductCart = (index) => {
    cartItems.splice(index, 1);
    setItems([...items])
  }

  const subsctractProductCart = (index) => {
    if (cartItems[index][1] - 1 > 0) {
      cartItems[index][1]--;
    }
    else {
      deleteProductCart(index);
    }
    handleMCount()
    setCartItems([...cartItems])
  }

  const increaseProductCart = (index) => {
    handleCount();
    cartItems[index][1]++;
    setCartItems([...cartItems])
  }
  

    return (
        <>
        <div className='contact-container'>
        <form className="row g-3">
          <div className='col-12'>
            <h4>Datos de Pedido</h4>
          </div>
  <div className="col-md-6">
    <label htmlFor="mailTextInput" className="form-label">Correo Electrónico</label>
    <input type="email" className="form-control" id="mailTextInput" placeholder='ejemplo@correo.com' value={mailInput} onChange={e=>setMailInput(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="phoneNumberInput" className="form-label">Teléfono</label>
    <PhoneInput
      placeholder="(222) 222 2222"
      defaultCountry='MX'
      id="phoneNumberInput"
      value={phoneInput}
      onChange={setPhoneInput}/>
  </div>

  <div>
    <p className='desc-section'>*Si no encontrase algún producto, agrégalo, nosotros nos encargamos</p>
  </div>

  <div className='col-md-6'>
    <label htmlFor="inputEmail4" className="form-label">Producto</label>
    <input type="text" className="form-control" id="inputEmail4" value={productInput} onChange={e=>setProductInput(e.target.value)} placeholder="Ingrese Producto"/>
  </div>
  <div className='col-md-4'>
    <label htmlFor="inputEmail4" className="form-label">Cantidad</label>
    <input type="text" className="form-control" id="inputEmail4" value={quantityInput} onChange={e=>setQuantityInput(e.target.value)} placeholder="Ingrese Cantidad"/>
  </div>
  <div className='col-md-2'>
    <button type="button" className="btn btn-primary add-product" onClick={() => addProduct()}>Añadir</button>
  </div>


  <div className='product-view'>
    <div className='product-section'>
      <p className='product-desc'>Producto</p>
    </div>
    <div className='product-section'>
      <p className='product-desc'>Cantidad</p>
    </div>
    <div className='product-section2'>
    </div>
  </div>
  {cartItems.map((ele, index) => {
    if (ele[0] !== "0") {
      return (
        <div className='product-view' key={ele[0]}>
          <div className='product-section'>
            <p className='product-desc'>{ele[2]}</p>
          </div>
          <div className='product-section'>
            <p className='product-desc'>{ele[1]}</p>
          </div>
          <div className='product-section2'>
            <button type="button" className="btn" onClick={() => deleteProductCart(index)}><i className="bi bi-x-lg"></i></button>
            <button type="button" className="btn" onClick={() => subsctractProductCart(index)}><i className="bi bi-dash-lg"></i></button>
            <button type="button" className="btn" onClick={() => increaseProductCart(index)}><i className="bi bi-plus-lg"></i></button>
          </div>
        </div>
      )
    }
    return(<></>);
  })}
  {items.map((ele, index) => (
    <div className='item-view' key={index}>
      <div className='product-section'>
        <p className='product-desc'>{ele.product}</p>
      </div>
      <div className='product-section'>
        <p className='product-desc'>{ele.quantity}</p>
      </div>
      <div className='product-section2'>
        <button type="button" className="btn" onClick={() => deleteProduct(index)}><i className="bi bi-x-lg"></i></button>
        <button type="button" className="btn" onClick={() => subsctractProduct(index)}><i className="bi bi-dash-lg"></i></button>
        <button type="button" className="btn" onClick={() => increaseProduct(index)}><i className="bi bi-plus-lg"></i></button>
      </div>
    </div>
  ))}

  <div className='col-12'>
            <h4>Datos de Envío</h4>
          </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Dirección</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Calle" value={address1Input} onChange={e=>setAddress1Input(e.target.value)}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Dirección 2 (Opcional)</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Casa, Apartamento o Estudio" value={address2Input} onChange={e=>setAddress2Input(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="inputCity" value={cityInput} onChange={e=>setCityInput(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Estado</label>
    <input type="text" className="form-control" id="inputState" value={stateInput} onChange={e=>setStateInput(e.target.value)}/>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">C.P.</label>
    <input type="text" className="form-control" id="inputZip" value={zipInput} onChange={e=>setZipInput(e.target.value)}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Enviar Pedido</button>
  </div>
</form>
        </div>
        </>
    )
}

export default Pedidos;