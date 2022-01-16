import React from 'react';
import HeaderWithoutText from '../components/HeaderWithoutText'
import "../style/style.css";

const ProductRegister = () => {
  return(
    <div>
      <HeaderWithoutText />
    <h1 className="register-title">Venda seu produto em minutos!</h1>
    <h2 className="register-h2">Registro de produtos</h2>
    <form className="form-register">
      <div className="register-form">
        <label htmlFor="product">Nome do Produto</label>
        <input id="product" name="product" type="text" />
      </div>
      <div className="register-form">
        <label htmlFor="description">Descrição</label>
        <input id="description" name="description" type="text" />
      </div>
      <div className="register-form">
        <label htmlFor="preco">Valor</label>
        <input id="preco" name="preco" type="number" />
      </div>
      <div className="register-form">
        <label htmlFor="image">Imagem do Produto</label>
        <input id="image" name="image" type="file" /> <br />
      </div>
      <div className="button">
        <button type="submit">Salvar</button>
      </div>
    </form>
  </div>
  )
}

export default ProductRegister;