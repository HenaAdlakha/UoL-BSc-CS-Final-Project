"use client"
import React, {useEffect, useState} from "react";

const Form = ({disease, parentCallback}) => {

    let onTrigger;
    onTrigger = (event) => {
        // Call the parent callback function
        parentCallback(event.diagnosis);
        console.log(event)
    }

    const [file, setFile] = useState<File>()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        try {
            const data = new FormData()

            data.append('file', file)
            data.append('disease', disease)


            const res = await fetch('http://0.0.0.0:8000/results', {
                method: 'POST',
                body: data
            }).then((response) => response.json())
                .then((result) => {
                    //set diagnosis state here
                    onTrigger(result)
                })


        } catch (e: any) {
            console.error(e)
        }


    }
    return (
        <form className="flex items-center space-x-6" onSubmit={onSubmit}>
            <label className="block">
                <span className="sr-only">Choose scan</span>
                <input type="file" className="block w-full text-xl text-rose-900
                          file:mr-4 file:py-2 file:px-6
                          file:rounded-3xl file:border-0
                          file:text-xl file:font-semibold
                          file:bg-gradient-to-t from-orange-500 to-red-500 file:text-yellow-100
                          hover:file:bg-gradient-to-tr from-orange-500 to-red-500
                          file:cursor-pointer" onChange={(e) => setFile(e.target.files?.[0])}/>
            </label>
            <input type="submit" className="block  text-xl font-semibold text-yellow-100 bg-gradient-to-b from-[#4d4ded] from-47% to-[#b53aed] to-87% rounded-3xl py-2 px-6 hover:cursor-pointer hover:bg-gradient-to-tl from-[#4d4ded] from-47% to-[#b53aed] to-87%" />
        </form>
    )
}

export default Form