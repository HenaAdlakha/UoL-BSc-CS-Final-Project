'use client'
import React, {useState} from 'react'
import Form from "@/components/form";
import Results from "@/components/Results";

const Hero = ({title,disease,text}) => {
    const [state, setState] = useState({name: ""})


    // Callback function to handle data received from the
    //child component
    let handleCallback = (childData) => {
        // Update the name in the component's state
        setState({ name: childData })
    }
     const {name} = state;
        return (
            <div className=" mx-30 px-20 pt-10 flex ">
                <div className="w-3/5 min-[1100px]:w-2/5  whitespace-normal  rounded-[20px] justify-between text-indigo-600 text-3xl h-[600px] min-[500]:h-[500px] min-[1100]:h-[600px] overflow-hidden">
                    <h1 className="text-6xl min-[750px]:text-7xl my-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#b53aed] from-13% via-[#4d4ded] via-47% to-[#b53aed] to-87%">
                        {title[0]}
                        <span className="bg-clip-text bg-gradient-to-br from-[#b53aed] from-13% via-[#4d4ded] via-47% to-[#b53aed] to-87%"> {title[1]} </span>
                    </h1>


                    <p className="w-5/6 text-2xl text-transparent bg-clip-text bg-gradient-to-b from-violet-800 to-pink-700">
                        {text}

                </p>

                    <h1 className="text-4xl min-[750px]:text-5xl my-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] from-13% via-[#fd1d1d] via-47% to-[#fcb045] to-87%">
                        Get a <span className="bg-clip-text bg-gradient-to-tr from-[#833ab4] from-13% via-[#fd1d1d] via-87% to-[#fcb045] to-17%">
                        prediction
                    </span>
                    </h1>

                    <Form disease={disease} parentCallback={handleCallback}/>

                </div>
                <Results diagnosis={name}/>

            </div>
        )
}

export default Hero