function DigaMeuNome(props){
    
    return(
        <div className="h1MeuNome">
          <p> Oiii {props.nome} você está com fome? </p>
          <p> Minha profissao é {props.profissao} gostou? </p>
          <p> Minha idade {props.idade}</p>
          <p> Minha cidade {props.cidade} </p>
        </div>
    )

}

export default DigaMeuNome