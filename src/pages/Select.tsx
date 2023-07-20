import React from "react";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router";

const Select = () => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <section className="text-2xl grid items-center w-full text-center mb-4 tracking-wide mt-4">
                Pilih rencana makananmu
            </section>
            <section className="grid grid-cols-1">
                <section className="mb-2">
                    <h1 className="font-semibold m-2 text-center">
                        Pilih makanan yang kamu inginkan
                    </h1>
                    <div className="grid grid-cols-1 place-items-center">
                        <Checkbox
                            label="Daging dan sayur"
                            onChange={() => {
                                setFirst(!first);
                            }}
                            value={first}
                        />
                        <Checkbox
                            label="Tahu dan tempe"
                            onChange={() => {
                                setSecond(!second);
                            }}
                            value={second}
                        />
                        <Checkbox
                            label="Ikan"
                            onChange={() => {
                                setThird(!third);
                            }}
                            value={third}
                        />
                    </div>
                    <div>
                        <h2 className="text-center">Total harga: <span className="font-bold">Rp. 899,000.00</span> </h2>
                    </div>
                </section>
                <section className="grid justify-items-center">
                    <button className="rounded-md bg-green px-4 py-2 text-offwhite hover:bg-dark-green"
                    onClick={() => {
                      navigate('/address')
                    }}
                    >
                        Submit
                    </button>
                </section>
            </section>
        </>
    );
};

export default Select;
