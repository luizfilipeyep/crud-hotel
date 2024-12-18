import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./addclient.css"

function AddClient() {
  

  const handleClickAddUser = (values) => {
    axios
        .post("http://localhost:8800/add/cliente", {
          name: values.name,
          age: values.age,
          uf: values.uf
        })
        .then((response) => {
          console.log(response.data.msg)          
        })  
  }

  return ( 
    <>
      <div className="AddClientWrapper">
        <h1>Cadastro de Clientes</h1>
        <p>Preencha os campos abaixo para salvar o cliente:</p>

        <Formik initialValues={{}} onSubmit={handleClickAddUser}>
          <Form>
            <div className="inputWrapper">
              <label htmlFor="name">Nome: </label>
              <Field type="text" name="name" id="name" />
            </div>

            <div className="inputWrapper">
              <label htmlFor="age">Idade: </label>
              <Field type="number" name="age" id="age" />
            </div>

            <div className="inputWrapper">
              <label htmlFor="uf">UF: </label>
              <Field as="select" name="uf" id="uf">
                <option value="" selected disabled> Selecione</option>
                <option value="AL">AL</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="MA">MA</option>
                <option value="PA">PA</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RN">RN</option>
                <option value="SE">SE</option>
              </Field>
            </div>

            <div className="inputWrapper">
              <Link to="/">Cancelar</Link> | <button type="submit">Salvar</button>
            </div>
          </Form>
        </Formik>       
      </div>
    </>
   );
}

export default AddClient;