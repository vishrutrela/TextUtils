import React ,{useState}from 'react'
const changetoup = ()=>{
    console.log("button has clicked");
}
export default function TextForm(props) {
    const [Text, setText] = useState("sxblcdbo");
    
    return (
        <><h1 className='my-3'>{props.heading}-{Text}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={changetoup} >changetoUp</button>
        </>


    )
}
