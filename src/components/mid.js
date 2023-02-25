import { useState } from 'react'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


function Mid() {
    const [arr, setArr] = useState([false, true, false])

    return (
        <>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <div style={{ fontWeight: "500" }}>
                <span style={{ textDecoration: "underline red" }}>HOT T</span><span>REND</span>
                <br /><br />
                {arr.map((item, key) => {
                    return (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img alt='' src='https://m.media-amazon.com/images/I/510NHH2o-IL._SX300_SY300_QL70_FMwebp_.jpg' style={{ width: "40%", height: "15vh" }} />
                            &nbsp;&nbsp;
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4 style={{ marginTop: "1%" }}>Small Pocket Chain</h4>
                                {item === true ? (
                                    <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></div>
                                ) : <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></div>}
                                <h4 style={{ marginTop: "3%" }}>$ 12.0</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ fontWeight: "500" }}>
                <span style={{ textDecoration: "underline red" }}>BEST S</span><span>ELLER</span>
                <br /><br />
                {arr.map((item, key) => {
                    return (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img alt='' src='data:image/jpeg;base64,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' style={{ width: "40%", height: "15vh" }} />
                            &nbsp;&nbsp;
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4 style={{ marginTop: "1%" }}>Small Pocket Chain</h4>
                                {item === true ? (
                                    <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></div>
                                ) : <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></div>}
                                <h4 style={{ marginTop: "3%" }}>$ 12.0</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ fontWeight: "500" }}>
                <span style={{ textDecoration: "underline red" }}>FEATU</span><span>RE</span>
                <br /><br />
                {arr.map((item, key) => {
                    return (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img alt='' src='https://images.bewakoof.com/t640/zipped-it-printed-small-backpack-229513-1655746814-1.jpg' style={{ width: "40%", height: "15vh" }} />
                            &nbsp;&nbsp;
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h4 style={{ marginTop: "1%" }}>Small Pocket Chain</h4>
                                {item === true ? (
                                    <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></div>
                                ) : <div style={{ marginTop: "3%" }}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></div>}
                                <h4 style={{ marginTop: "3%" }}>$ 12.0</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div><br/><br/>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",height:"40vh"}}>
            <img alt='' style={{width:"40%"}} src='https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg' />&nbsp;&nbsp;
            <img alt='' style={{width:"40%"}} src='https://img.freepik.com/free-vector/summer-sale-design-with-parrot-flower-tropical-palm-leaves_1314-2467.jpg?size=626&ext=jpg&ga=GA1.2.1922596042.1659245411&semt=ais' />
        </div><br/><br/>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
        <AiFillCar size={100}/>
                <div style={{marginTop:"7%"}}>
                    <h4>FREE DELIVERY</h4>
                    <p>For All Orders Over &99</p>
                </div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <FaRegMoneyBillAlt size={100}/>&nbsp;&nbsp;
                <div style={{marginTop:"7%"}}>
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p>If good have no Problems</p>
                </div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <MdSupportAgent size={100}/>
                <div style={{marginTop:"7%"}}>
                    <h4>ONLINE SUPPORT 24/7</h4>
                    <p>Dedicated Support</p>
                </div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <RiSecurePaymentLine size={100}/>
                <div style={{marginTop:"7%"}}>
                    <h4>PAYMENT SECURE</h4>
                    <p>100% secure Payment</p>
                </div>
        </div>
        </div>

        </>
    )
}

export default Mid