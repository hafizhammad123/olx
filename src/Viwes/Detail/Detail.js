import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Details() {
    const { adId } = useParams()
    const [main, setmain] = useState([])

    useEffect(function () {
        api()
    }, [])

    function api() {

        fetch(`https://dummyjson.com/products/${adId}`)
            .then(res => res.json())
            .then(res => setmain(res))

    }

    const { title, thumbnail ,brand, category , price, discountPercentage, rating } = main
    return <div>
        <Navbar />

        <div className="det">
            <div className="det2">
                <p className="gg">Home/</p>
                <p className="gg">Mobiles/</p>
                <p className="gg">Mobile Phones/</p>
                <p className="gg">Mobile Phones in Punjab/</p>
                <p className="gg">Mobile Phones in Lahore/</p>
                <p className="gg">Mobile Phones in Gulberg/</p>
                <p className="gg">Vivo in Gulberg</p>

            </div>

            <img src="https://tpc.googlesyndication.com/simgad/13143663721400190979" alt="" />


            <div className="silder">
                <img src={thumbnail} alt=""></img>
            </div>

            <div className="span11">
                <img className="aaa" src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" width="15%" alt="" />

                <h5 className="ggr">SMART MOBLIES</h5>
                <h6 className="eeee">member since oct -10</h6>
                <button className="ddd"><i class="fa-solid fa-phone"></i> Show phone number</button>
                <button className="ddd1"><i class="fa-solid fa-comment"></i> Chat</button>
            </div>

            <div className="fff">
                <h2 className="lll">Location</h2>
                <h2 className="lll1"><i class="fa-solid fa-location-dot"></i> Gulberg, Lahore</h2>
            </div>

            <center><div className="kj">
                <h1 className="line">Details</h1>
                <table border="2">
                    <tr>
                        <td>Brand:</td>
                        <th>{brand}</th>
                        <td>Title</td>
                        <th>{title}</th>
                        <td>Category</td>
                        <th>{category}</th>
                        <td>Rs:</td>
                        <th>{price}</th>
                    </tr>
    {/* const { title, thumbnail ,brand, category , price, discountPercentage, rating } = main */}

                </table>

            </div></center>
        </div>

    </div>
}
export default Details;