import Card from "../Cards/Cards";

function Navbar() {
    return <div>
        <div className="main-nav">

            <img className="olxImg1st" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo-700x394.png" width="2.5%" alt="" />

            <div>
                <per className="carImg" ><i class="fa-solid fa-car" />  Motors </per>

                <per className="carImg1st"><i class="fa-solid fa-building" /> PROPERTY </per>
            </div>
            <img className="olxLogo" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol-700x394.png" width="5%" alt=""></img>

            <select class="inpu form-select" aria-label="Default select example">

                <option selected>Pakistan</option>
                <option value="1">Azad Kashmir, Pakistan</option>
                <option value="2">Muzaffarabad, Azad Kashmir</option>
                <option value="3">Alfalah Town, Lahore</option>
            </select>

            <input className="inpu2Nd" placeholder="Find Cars, Mobile Phones and More.." type="text" name="" id=""></input>

            <span className="daba"><i class="fa-solid fa-magnifying-glass"></i></span>

            <h3 className="haedLogin">Login</h3>

            <span className="sell"><b>+</b> SELL</span>

            <div className="navFooter">
                <select className="naoe">
                <option >All categories</option>
                </select>
              
                    <p className="ONE">Mobile Phones</p>
                    <p className="ONE">Cars</p>
                    <p className="ONE">Motorcycles</p>
                    <p className="ONE">Houses</p>
                    <p className="ONE">Video-Audios</p>
                    <p className="ONE">Tablets</p>
                    <p className="ONE">Land & Plots</p>
                
            </div>
           


        </div>
    </div>
}
export default Navbar;