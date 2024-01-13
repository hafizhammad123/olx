import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Card() {
    const Navigate= useNavigate()

const [product, setproduct] = useState ([])

 useEffect(function(){

 ADDS()

 },[])   

function ADDS(){
    fetch('https://dummyjson.com/products')
    .then (res => res.json())
    .then (res => setproduct(res.products))
    

}


    return <div   className="mar">

    {product.map(function(item){

    const {price, description, thumbnail ,id} = item

        return<div onClick={()=> Navigate(`/Details/${id}`)}  className="card">
            <div>
                <img src={thumbnail} alt="" />
            </div>
            <div className="detai">
                <h2 className="text">Rs:{price} <i class="fa-regular fa-heart"></i></h2>

                <p className="textDES">{description}</p>

            </div>
        </div>
    })}    



        







    </div>
}
export default Card;