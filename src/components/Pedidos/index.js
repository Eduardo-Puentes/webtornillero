import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./styles.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.getElementById("phoneNumberInput").classList.add("form-control")
    let param = searchParams.get("producto")
    if (param) {
      setProductInput(param)
    }
  }, [])


  const addProduct = () => {
    if(items.findIndex(item => item.product === productInput) !== -1) {
      setItems(
        items.map(item => 
            item.product === productInput 
            ? {...item, "quantity": quantityInput}
            : item 
    ))
    }
    else{
      setItems([...items, {"product": productInput, "quantity": quantityInput}])
    }
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
    <label for="mailTextInput" class="form-label">Correo Electrónico</label>
    <input type="email" class="form-control" id="mailTextInput" placeholder='ejemplo@correo.com' value={mailInput} onChange={e=>setMailInput(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="phoneNumberInput" class="form-label">Teléfono</label>
    <PhoneInput
      placeholder="(222) 222 2222"
      defaultCountry='MX'
      id="phoneNumberInput"
      value={phoneInput}
      onChange={setPhoneInput}/>
  </div>

  <div className='col-md-6'>
    <label for="inputEmail4" class="form-label">Producto</label>
    <input type="text" class="form-control" id="inputEmail4" value={productInput} onChange={e=>setProductInput(e.target.value)} placeholder="Ingrese Producto"/>
  </div>
  <div className='col-md-4'>
    <label for="inputEmail4" class="form-label">Cantidad</label>
    <input type="text" class="form-control" id="inputEmail4" value={quantityInput} onChange={e=>setQuantityInput(e.target.value)} placeholder="Ingrese Cantidad"/>
  </div>
  <div className='col-md-2'>
    <button type="button" class="btn btn-primary add-product" onClick={() => addProduct()}>Añadir</button>
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
  {items.map((ele, index) => (
    <div className='product-view' key={ele.product}>
      <div className='product-section'>
        <p className='product-desc'>{ele.product}</p>
      </div>
      <div className='product-section'>
        <p className='product-desc'>{ele.quantity}</p>
      </div>
      <div className='product-section2'>
        <button type="button" class="btn" onClick={() => deleteProduct(index)}><i class="bi bi-x-lg"></i></button>
      </div>
    </div>
  ))}

  <div className='col-12'>
            <h4>Datos de Envío</h4>
          </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Dirección</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Calle" value={address1Input} onChange={e=>setAddress1Input(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Dirección 2 (Opcional)</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Casa, Apartamento o Estudio" value={address2Input} onChange={e=>setAddress2Input(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="inputCity" value={cityInput} onChange={e=>setCityInput(e.target.value)}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Estado</label>
    <input type="text" class="form-control" id="inputState" value={stateInput} onChange={e=>setStateInput(e.target.value)}/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">C.P.</label>
    <input type="text" class="form-control" id="inputZip" value={zipInput} onChange={e=>setZipInput(e.target.value)}/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar Pedido</button>
  </div>
</form>
        </div>
        </>
    )
}

export default Pedidos;