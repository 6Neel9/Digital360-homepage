import { useState } from 'react'


function Product() {

    const [arr, setArr] = useState([true, false, false, true, false, true, false, true])


    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>{arr.map((item, key) => {
            return (
                <div className="cards">
                    <div className="image_box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu1FLb9WPho0u0jHLD2oMqdcg4pU2IV1VvLx8yElY&s" alt="" />
                    </div>
                    <div className="details" style={{textAlign:"center"}}>
                        <p>Kids Jeans</p>
                        {item===true?(
                            <p style={{color:"red"}}>$59</p>
                        ):<p>$59</p>}
                    </div>
                </div>
            )
        })

        }
        </div>

    )
}

export default Product