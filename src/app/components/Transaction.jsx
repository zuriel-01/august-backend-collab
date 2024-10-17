"use client";
import React, { useState } from "react";

export default function Transaction() {
  // const [bg, setBg] = useState('')

  // const status = () =>{
  //   if (td==="pending"){
  //     bacground-color;"red"
  //   }
  // }
  const txnHash1 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash2 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash3 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash4 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash5 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash6 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash7 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash8 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash9 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash10 = Math.ceil(Math.random() * 1000000000) + 1;
  const txnHash11 = Math.ceil(Math.random() * 1000000000) + 1;

  return (
    <div className="pl-[5rem] bg-neutral-100">
      <div className="rounded-lg  placeholder:px-[5rem] bg-white">
        <h2 className="text-3xl px-9 py-4">Transactions</h2>

        <div className="py-9 px-9">
          <table className="table overflow-x-auto border-spacing-2 border  h-max w-[100] rounded-md  bg-white text-2xl ">
            {/* head */}
            <thead className=" border text-2xl text-black">
              <tr>
                <th>Transaction</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <a href=""></a>

            <tbody>
              {/* row 1 */}
              <tr className="">
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div> Black Beauty</div>
                  </div>
                </td>
                <td>Feb 24, 2024</td>
                <td>$2000</td>
                <td>Successful</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_01").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_01" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>
                      <p className="py-4">Recipient: Black Beauty</p>
                      <p className="py-4">Date: Feb 24, 2024</p>
                      <p className="py-4">Amount: $2000</p>
                      <p className="py-4">Time: 23:24 GMT</p>
                      <p className="py-4">Status: Successful</p>
                      {/* <p className="py-4">Txnhash: {txnHash1}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="flex items-center gap-3 h-max">
                  <div className="bg-blue-500 py-2 px-6 rounded-lg text-lg">
                    K
                  </div>
                  <div>Kate Bishop</div>
                </td>

                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_02").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_02" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <div className="bg-blue-500 py-20 px-6 text-center text-3xl">
                          K
                        </div>
                      </div>
                      <p className="py-4">Recipient: Kate Bishop</p>
                      <p className="py-4">Date: Feb 23, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 12:22 GMT</p>
                      <p className="py-4">Status: Pending</p>
                      {/* <p className="py-4">Txnhash: {txnHash2}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Flying Jack</div>
                  </div>
                </td>

                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_03").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_03" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>
                      <p className="py-4">Recipient: Flying Jack</p>
                      <p className="py-4">Date: Feb 23, 2024 </p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 14:56 GMT</p>
                      <p className="py-4">Status: Pending</p>
                      {/* <p className="py-4">Txnhash: {txnHash3}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Psycho Man</div>
                  </div>
                </td>

                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_04").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_04" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Psycho Man</p>
                      <p className="py-4">Date: Feb 25, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 16:14 GMT</p>
                      <p className="py-4">Status: Failed</p>
                      {/* <p className="py-4">Txnhash: {txnHash4}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 5 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div> Sakura Useless</div>
                  </div>
                </td>

                <td>Feb 25, 2024</td>
                <td>$25000</td>
                <td>Failed</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_05").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_05" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Sakura Useless</p>
                      <p className="py-4">Date: Feb 25, 2024</p>
                      <p className="py-4">Amount: $25000</p>
                      <p className="py-4">Time: 14:20 GMT</p>
                      {/* <p className="py-4">Txnhash: {txnHash5}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 6 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Black Beauty</div>
                  </div>
                </td>

                <td>Feb 24, 2024</td>
                <td>$2000</td>
                <td>Successful</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_06").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_06" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Black Beauty</p>
                      <p className="py-4">Date: Feb 24, 2024</p>
                      <p className="py-4">Amount: $2000</p>
                      <p className="py-4">Time: 00:24 GMT</p>
                      <p className="py-4">Status: Successful</p>
                      {/* <p className="py-4">Txnhash: 6</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 7 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Kate Bishop</div>
                  </div>
                </td>

                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_07").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_07" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>
                      <p className="py-4">Recipient: Kate Bishop</p>
                      <p className="py-4">Date: Feb 23, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 18:14 GMT</p>
                      <p className="py-4">Status: Pending</p>
                      {/* <p className="py-4">Txnhash: {txnHash7}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 8 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Flying Jack</div>
                  </div>
                </td>

                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_08").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_08" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>
                      <p className="py-4">Recipient: Flying Jack</p>
                      <p className="py-4">Date: Feb 23, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 23:20 GMT</p>
                      <p className="py-4">Status: Pending</p>
                      {/* <p className="py-4">Txnhash: 8</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 9 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Psycho Man</div>
                  </div>
                </td>

                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_09").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_09" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Psycho Man</p>
                      <p className="py-4">Date: Feb 25, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 21:50 GMT</p>
                      <p className="py-4">Status: Failed</p>
                      {/* <p className="py-4">Txnhash: 9</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 10 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Sakura Useless</div>
                  </div>
                </td>

                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_10").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_10" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Sakura Useless</p>
                      <p className="py-4">Date: Feb 25, 2024</p>
                      <p className="py-4">Amount: $2500</p>
                      <p className="py-4">Time: 18:20 GMT</p>
                      <p className="py-4">Status: Failed</p>
                      {/* <p className="py-4">Txnhash: 10</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 11 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3 h-max">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/katie-transaction.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>Maurice Bryne</div>
                  </div>
                </td>

                <td>Feb 29, 2024</td>
                <td>$4800</td>
                <td>Successful</td>

                <td>
                  <button
                    className="btn border border-black text-xl bg-transparent"
                    onClick={() =>
                      document.getElementById("my_modal_11").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog id="my_modal_11" className="modal">
                    <div className="modal-box">
                      <div className="mask mask-circle h-[150px] w-[150px]">
                        <img
                          src="/katie-transaction.webp"
                          alt="Recipient Profile Image"
                        />
                      </div>

                      <p className="py-4">Recipient: Maurice Bryne</p>
                      <p className="py-4">Date: Feb 29, 2024</p>
                      <p className="py-4">Amount: $4800</p>
                      <p className="py-4">Time: 22:30 GMT</p>
                      <p className="py-4">Status: Successful</p>
                      {/* <p className="py-4">Txnhash: {txnHash11}</p> */}
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn botder border-black bg-red-200">
                            Exit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
