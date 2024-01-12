import { useState, ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { submitvalues, CounterState } from '../reducer/counterSlice'

const Input = () => {
    const [amount, setAmountValue] = useState('0');
    const [percent, setPercentValue] = useState('0');
    const [prospect, setProspectValue] = useState('5000');

    const data: CounterState = {
        value: amount,
        rate: percent,
        candidates: prospect,
    }

    const dispatch = useDispatch()
    
    const getAmountValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAmountValue(event.target.value)
    }

    const getRangePercentValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPercentValue(event.target.value)
    }

    const getRangeProspectValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        setProspectValue(event.target.value)
    }

    return (
        <div className="bg-white mx-2 my-5 w-auto rounded-lg shadow-sm shadow-[#ddd]-500/50">
            <div className="w-full pt-5">
                <p className="antialiased font-sans text-5xl font-bold text-center w-full py-5">ROI Calculator</p>
                <div className="w-3/4 m-auto">
                    <div className="pb-10">
                        <label htmlFor="label" className="block text-sm font-medium leading-6 text-gray-900">
                            What is your Client Life Time Value?
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="number" value={amount} onChange={getAmountValue} name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" />
                        </div>
                    </div>

                    <div className="pb-10">
                        <div className="flex justify-between">
                            <label htmlFor="label" className="block text-sm font-medium leading-6 text-gray-900">
                                What is your estimated close rate(%)?
                            </label>
                            <span className="">{percent}%</span>
                        </div>
                        <input type="range" value={percent} onChange={getRangePercentValue} className="transparent h-[12px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600" min="0" max="100" step="1" id="customRange3" />
                    </div>

                    <div className="pb-10">
                        <div className="flex justify-between">
                            <label htmlFor="label" className="block text-sm font-medium leading-6 text-gray-900">
                                Number of Prospects
                            </label>
                            <span className="">{prospect}</span>
                        </div>
                        <input type="range" value={prospect} onChange={getRangeProspectValue} className="transparent h-[12px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600" min="0" max="5000" step="1" id="customRange3" />
                    </div>
                    
                    <div className="pb-10 flex justify-center">
                        <button type="button" onClick={() => dispatch(submitvalues(data))} className="bg-blue-500 px-10 py-2 rounded-md text-white shadow-sm shadow-blue-500/50 hover:text-gray-300 hover:bg-blue-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;