import { AuthContext } from "../Context";

import { useContext } from "react";
const Cart = () => {
  const { data_from_server, setdata_from_server } = useContext(AuthContext);
  const { ShowCart, setShowCart } = useContext(AuthContext);
  const { Cart, setCart } = useContext(AuthContext);


const Removing=(data_from_server,id)=>{
const index=data_from_server.findIndex(prev=>prev.id===id)

if(index>-1){
  data_from_server.splice(index,1)
}
return data_from_server

}


  const DeletingFromCart = (id) => {
    setdata_from_server((prev) => prev);
   Removing(data_from_server,id)
   setCart(prev=>{
    return prev.map(data=>{
      return data_from_server
    })
   })
    
localStorage.setItem("Cart1",JSON.stringify(Cart))

  };
  const render = data_from_server.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.name}</td>
        <td>{book.days}</td>
        <td>
          <p>Ksh.{book.days*9000}</p>
          <img src="./src/Assets/images/cancel.png"    className="cancel1"  onClick={() => DeletingFromCart(book.id)}/>
        </td>
      </tr>
    );
  });

  return (
    <section className="Cart">
      <table>
        <thead>
          <th>Name</th>
          <th>Days</th>
          <th>Cost</th>
        </thead>

        <tbody>{render}</tbody>
      </table>
      <button
        onClick={() => {
          setShowCart(false);
        }}
      >
        Close Cart
      </button>
    </section>
  );
};

export { Cart };
