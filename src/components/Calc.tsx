import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../config/store";

const Calc = () => {

    const values = useSelector((state: RootState) => state.values);
    const remain: number = 100-Number(values.rate);
    const opens: number = Math.floor(Number(values.candidates)/100)*remain;
    const responses: number = Math.floor((opens/100)*3);
    const positive: number = Math.floor((responses/100)*40);
    const meetings: number = Math.floor((positive/100)*50);
    const newdeals: number = Math.floor((meetings/100)*25);

    console.log(values.value, remain);
    const investment: number = newdeals*Number(values.value);

    const onclickEvent = () => {
        alert(`I don't what I have to do.`);
    }

    return (
        <div className="mx-2 my-5 w-auto flex flex-col">
            <div className="grid grid-rows-6 grid-flow-col gap-3.5">
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-9/12 bg-black text-white p-3.5" style={{transform: "perspective(10px) rotateX(-1deg)"}}>
                        <span>Prospects</span>
                        <span>{values.candidates}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-10px"}}>30%</div>
                </div>
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-8/12 bg-black text-white p-3.5" style={{transform: "perspective(10px) rotateX(359deg)"}}>
                        <span>Opens</span>
                        <span>{(opens)}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", backgroundColor: "#000000", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-10px"}}>{remain}%</div>
                </div>
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-7/12 bg-black text-white p-3.5" style={{transform: "perspective(10px) rotateX(359deg)"}}>
                        <span>Responses</span>
                        <span>{(responses)}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", backgroundColor: "#000000", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-8px"}}>3%</div>
                </div>
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-6/12 bg-black text-white p-3.5" style={{transform: "perspective(10px) rotateX(359deg)"}}>
                        <span>Positive responses</span>
                        <span>{(positive)}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", backgroundColor: "#000000", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-8px"}}>40%</div>
                </div>
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-5/12 bg-blue-500 text-white p-3.5" style={{transform: "perspective(10px) rotateX(359deg)"}}>
                        <span>Meetings</span>
                        <span>{(meetings)}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", backgroundColor: "#3B82F6", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-6px"}}>50%</div>
                </div>
                <div className="flex justify-center">
                    <div className="row-span-1 flex justify-between w-4/12 bg-blue-500 text-white p-3.5" style={{transform: "perspective(10px) rotateX(359deg)"}}>
                        <span>New deals</span>
                        <span>{(newdeals)}</span>
                    </div>
                    <div className="opacity-75 text-white" style={{padding: "5px", backgroundColor: "#3B82F6", height: "35px", paddingLeft: "10px", marginTop: "16px", marginLeft: "-6px"}}>25%</div>
                </div>
            </div>
            <div className="py-5 flex justify-center">
                <div className="bg-green-600 px-2 py-2.5 rounded-md text-white text-center shadow-sm shadow-green-500/50 hover:text-gray-300 hover:bg-green-700" onClick={onclickEvent}>
                    <p>Return on Investment</p>
                    <p className="font-bold">{investment}</p>
                </div>
            </div>
        </div>
    );
};

export default Calc;