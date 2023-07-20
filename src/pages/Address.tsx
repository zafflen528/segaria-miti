import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Address = () => {

    const handleSubmit =  async () => {
        await Swal.fire({
            icon: "success",
            title: "Sukses!",
            text: "Pesanan telah dibuat!",
        });
    };

    return (
        <>
            <section className="text-2xl grid items-center w-full text-center mb-4 tracking-wide mt-4">
                Bentar lagi makananmu akan dikirim, tolong diisi form berikut!
            </section>
            <section className="flex justify-center items-center">
                <div className="w-full max-w-lg">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nomor telpon
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Alamat
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="alamat"
                                type="text"
                            />
                        </div>

                        <div className="grid justify-center items-center">
                            <button className="rounded-md bg-green px-4 py-2 text-offwhite hover:bg-dark-green"
                            onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Address;
