const HEAD = (
    <div style={{
        height:"50px",
        width:"50px", 
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        /* -30px takes into account 5px for border */
        right:"-30px"

    }}/>
)

const BODY = (
    <div style={{
        height:"100px",
        width:"10px", 
        background:"black",
        position: "absolute",
        top:"120px",
        right:0,
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        height:"10px",
        width:"100px", 
        background:"black",
        position: "absolute",
        top:"150px",
        right:"-100px",
        rotate:"-30deg",
        //stops rotate happening from middle line and instead puts it on left side
        transformOrigin:"left bottom"
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        height:"10px",
        width:"100px", 
        background:"black",
        position: "absolute",
        top:"150px",
        right:"10px",
        rotate:"30deg",
        //stops rotate happening from middle line and instead puts it on right side
        transformOrigin:"right bottom"
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        height:"10px",
        width:"100px", 
        background:"black",
        position: "absolute",
        top:"210px",
        right:"-90px",
        rotate:"60deg",
        //stops rotate happening from middle line and instead puts it on right side
        transformOrigin:"left bottom"
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        height:"10px",
        width:"100px", 
        background:"black",
        position: "absolute",
        top:"210px",
        right:0,
        rotate:"-60deg",
        //stops rotate happening from middle line and instead puts it on left side
        transformOrigin:"right bottom"
    }}></div>
)


export function HangmanDrawing() {
    //posiiton relative to allow position of indivdual elements drawing in div
return<div style={{position:"relative"}}>
{HEAD}
{BODY}
{RIGHT_ARM}
{LEFT_ARM}
{RIGHT_LEG}
{LEFT_LEG}
{/* little head support */}
<div style={{
    height:"50px",
    width:"10px", 
    background:"black",
    marginLeft:"120px",
    position: "absolute",
    top:0,
    right:0,
}}></div>
{/* horizontal support holds hangman */}
<div style={{
    height:"10px",
    width:"200px", 
    background:"black",
    marginLeft:"120px"
}}></div>
{/* vertical upright suppport */}
<div style={{
    height:"400px",
    width:"10px", 
    background:"black",
    marginLeft:"120px"
}}></div>
{/* Base */}
<div style={{
    height:"10px",
    width:"250px", 
    background:"black"
}}></div>

</div>
}