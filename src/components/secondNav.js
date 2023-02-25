function SecNav() {
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <div style={{ fontWeight: "600" }}><u style={{ textDecoration: "underline red" }}>NEW</u>&nbsp;PRODUCT</div>

            <div className="midNav" >
                <span><u style={{ textDecoration: "underline red" }}>All</u></span>&nbsp;&nbsp;
                <span>Women's</span>&nbsp;&nbsp;
                <span>Men's</span>&nbsp;&nbsp;
                <span>Kid's</span>&nbsp;&nbsp;
                <span>Accessories</span>&nbsp;&nbsp;
                <span>Cosmetics</span>&nbsp;&nbsp;
            </div>
        </div>
    )
}

export default SecNav