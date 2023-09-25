"use client"
import React, {useEffect, useState} from "react";
import JsPDF from 'jspdf';

const Results = ({diagnosis}) => {
    let result;
    if (diagnosis == 'MildlyDemented') {
        result = "Mildly Demented"
    }
    const generatePDF = () => {

        const report = new JsPDF('portrait','pt','a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });}
    return(
        <div className="w-3/4 lg:w-1/2 flex flex-col mx-auto h-[600px]">
            <div id='report' className=" bg-white  w-full min-[1100px]:w-3/4 h-3/4 min-[1100px]:h-full mx-auto min-[1100px]mx-auto rounded-3xl overflow-hidden">
                <div className="mt-7 mx-1 bg-gradient-to-bl from-sky-500/70 from-5% via-blue-500/70 via-30% to-violet-500/70 to-90%" style={{height:3}}> </div>
                <div className="my-1 mx-1 bg-gradient-to-bl from-sky-500/70 from-5% via-blue-500/70 via-30% to-violet-500/70 to-90%" style={{height:3}}> </div>

                <div className="w-5/6 my-auto flex mx-auto h-5/6 text-center overflow-auto flex-col">
                    <div>
                        <h1 className="py-5 text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFC0CB] from-43% via-[#4d4ded]/70 via-57% to-[#FFC0CB] to-47%">
                            ༶•┈┈ Prediction ┈┈•༶
                        </h1>
                    </div>
                    <div>
                        <p>
                           {diagnosis}
                        </p>
                        <p  className="my-2">  Important Note: Don't self-diagnose. Consult a medical professional for accurate diagnosis and treatment options.</p>
                        <button onClick={generatePDF} className="bg-[#8b88f8]/90 hover:bg-[#8b88f8]/70 text-white font-bold py-2 px-4 rounded">
                            Save as PDF
                        </button>
                    </div>

                </div>

                <div className=" my-1 mx-1 bg-gradient-to-bl from-sky-500/70 from-5% via-blue-500/70 via-30% to-violet-500/70 to-90%" style={{height:3}}> </div>
                <div className="mb-7 mx-1 bg-gradient-to-bl from-sky-500/70 from-5% via-blue-500/70 via-30% to-violet-500/70 to-90%" style={{height:3}}> </div>
            </div>
        </div>

        )
}
export default Results