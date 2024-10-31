import axios from "axios"
import { useState, useEffect } from "react"
import { Formik, Form, Field} from "formik"
import { Link } from "react-router-dom"

import "./listclient.css"

function ListClient() {
  const [clientData, setClientData] = useState()
  const [codCliente, setCodCliente] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [uf, setUf] = useState()


  useEffect(() => {
    axios
      .get("http://localhost:8800/get/cliente")
      .then((response) => {
        setClientData(response.data)
      })
  }, [])

  const handleClickEdit = (values) => {
    axios
      .put("http://localhost:8800/edit/cliente", {
        cod_cliente: codCliente,
        name: values.name,
        age: values.age,
        uf: values.uf
      })
      .then((response) => {
        console.log(response.data.msg)
      })

    location.reload()
  }

  return ( 
    <div className="listClientWrapper">
      <dialog>
        <Formik initialValues={{}} onSubmit={handleClickEdit}>
          <Form>
            <div className="inputWrapper">
              <label htmlFor="name">Nome: </label>
              <Field type="text" name="name" id="name" placeholder={name} />
            </div>

            <div className="inputWrapper">
              <label htmlFor="age">Idade: </label>
              <Field type="text" name="age" id="age" placeholder={age} />
            </div>

            <div className="inputWrapper">
              <label htmlFor="uf">UF: </label>
              <Field type="text" name="uf" id="uf" placeholder={uf} />
            </div>

            <a href="#" onClick={() => {
            var dialog = document.querySelector("dialog")
            dialog.hasAttribute("open") ? dialog.close() : dialog.showModal()
          }}>Cancelar</a>

          <button type="submit">Editar</button>
          </Form>          
        </Formik>
      </dialog>

      <h1>Listagem de Clientes</h1>
      <p>Clientes já cadastrados no sistema</p>

      <table>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>UF</th>
            <th>Ações</th>
          </tr>

          {
            typeof clientData != "undefined" &&
            clientData.map((value) => {
              let id = value.cod_cliente

              return (
                <tr key={value.cod_cliente}>
                  <td>{value.cod_cliente}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.uf}</td>
                  <td> 
                    <a href="#" onClick={() => {
                      var dialog = document.querySelector("dialog")
                      dialog.hasAttribute("open") ? dialog.close() : dialog.showModal()

                      setCodCliente(value.cod_cliente)
                      setName(value.name)
                      setAge(value.age)
                      setUf(value.uf)
                    }}>Editar</a> <a href="#" onClick={() => {
                      axios
                        .delete(`http://localhost:8800/delete/cliente/${value.cod_cliente}`)
                        .then((response) => {
                          console.log(response)
                          location.reload()
                        })
                    }}>Excluir</a>
                  </td>
                </tr>
              )
            })
          }
        </table> 

        <Link to="/addClient">Cadastrar novo</Link>
    </div>
  );
}

export default ListClient;