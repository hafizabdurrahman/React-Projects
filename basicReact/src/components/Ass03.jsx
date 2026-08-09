
function Ass02(){
    const secondName = "Rahman"
    return(
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <h1 className="text-5xl">No : 3</h1>
            <h2>Beginner:</h2>
            <p>Math : {2 * 6}</p>
            <p>Terneray : {true? <b>True</b>: <b>False</b>}</p>
            <p>String Concat : {"kdjflk" + "kdfjkd"}</p>
            <p>Array Length : {["kdjflk", "kdfjkd", 4, false].length}</p>
            <p>Template literal : {`Hello Abdur ${secondName}`}</p>
            <br /><br />
            <h2>Intermediate: done , got error and solved it</h2>
            <br /><br />
            <h2>Challenge: Explained in comment</h2>
            {/* jab bhi hm jsx likhte hein to jo bhi tag name hota he vo is k attributes aur iska text or child pass krdia jata he agr koi value na ho to us ki jga null place kr dia jata he */}
        </div>
    )
}


export default Ass02