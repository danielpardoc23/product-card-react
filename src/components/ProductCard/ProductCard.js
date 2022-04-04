import React from 'react';

const ProductCard = () => (
<div className="contenedor">
    <div className="image">
        <img alt="Palmera de Chocolate" src="https://s3-eu-west-1.amazonaws.com/carritus.com/images_pms/70/59391570.jpg"/>
    </div>
    <div className="titulo">
        <h3>Palmera de cacao</h3>
    </div>
    <div className="descripcion">
        <span>Pieza de 425g</span>
    </div><br/>
    <div className="precio">
        <span className="numeroPrecio">1,75€</span><span className="unidad"> /ud</span>
    </div><br/>
    <div className="botonera">
        <button  id="boton1" onClick={mostrarBotones} className="botonAdd">Añadir al carro</button>
        <div id="botonesEscondidos" className="contenedorBotones">
            <table>
              <tbody>
                <tr>
                    <td> <div className="carro">
                        <span>En carro</span><div id="cantidadTotal"><span id="cantidad">1 </span><span id="unidades">ud.</span></div>
                    </div></td>
                    <td>
                        <div className="botonesFinales">
                            <button onClick={eliminarCompra}>E</button>
                            <button onClick={addProducto}>&#10133;</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table> 
        </div>
    </div>
</div>
  
);

function mostrarBotones(){
  document.getElementById("botonesEscondidos").style.display="block";
  document.getElementById("boton1").style.display="none";
}

function eliminarCompra(){
  document.getElementById("boton1").style.display="block";
  document.getElementById("botonesEscondidos").style.display="none";
  document.getElementById("cantidad").innerHTML=1;
  document.getElementById("unidades").innerHTML = " ud."
}

function addProducto(){
  let cantidad = document.getElementById("cantidad").innerHTML;
  if(cantidad === 1){
      document.getElementById("unidades").innerHTML = " uds."
  }
  cantidad++;
  document.getElementById("cantidad").innerHTML = cantidad;
}

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
