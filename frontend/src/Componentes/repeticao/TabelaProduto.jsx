import React from "react";
import "./TabelaProduto.css"
import produtos from "../../data/produtos";


export default (props) => {
    function getLinhas(){
        return produtos.map((produto, i) => {
            return(
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impa'}>
                <td><strong>{produto.id}</strong></td>
                <td>{produto.nome}</td>
                <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
};