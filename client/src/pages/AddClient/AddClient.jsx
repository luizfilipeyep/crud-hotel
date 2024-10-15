import "./addclient.css"

function AddClient() {
  return ( 
    <>
      <div className="AddClientWrapper">
        <h1>Cadastro de Clientes</h1>
        <p>Preencha os campos abaixo para salvar o cliente:</p>
        <div className="inputWrapper">
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="age">Idade: </label>
          <input type="text" name="age" id="age" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="uf">UF: </label>
          <select name="uf" id="">
            <option value="AC">AC</option>
            <option value="AL">AL</option>
          </select>
        </div>
        <div className="inputWrapper">
          <a href="#">Cancelar</a> | <button>Salvar</button>
        </div>
      </div>
    </>
   );
}

export default AddClient;