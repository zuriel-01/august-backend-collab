import React, { useState } from 'react'

export default function Transaction() {

  const [bg, setBg] = useState('')

  const status = () =>{
    if (td==="pending"){
      bacground-color;"red"
    }
  }




  return (
    <div className="px-[20px]">

      <div className='rounded-lg bg-green-800 px-5'>

        <h2 className='text-3xl pl-5 py-4'>Transactions</h2>

        <div className='py-9'>
          <table className="table overflow-x-auto border-spacing-2 border border-slate-500 h-max w-screen rounded-md  bg-blue-200 text-2xl ">
            {/* head */}
            <thead className='bg-slate-200 border text-2xl text-black'>
              <tr>
                <th>Transaction</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              <tr className="">

                <th>Black beauty</th>
                <td>Feb 24, 2024</td>
                <td>$2000</td>
                <td>Successful</td>

                <td>
                  <button className="btn border-black text-xl bg-white" onClick={()=>document.getElementById('my_modal_01').showModal()}>Details</button>
                  <dialog id="my_modal_01" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">profile pic</h3>
                      <p className="py-4">Recipient: 1</p>
                      <p className="py-4">Date: 1</p>
                      <p className="py-4">Amount: 1</p>
                      <p className="py-4">Time: 1</p>
                      <p className="py-4">Txnhash: 1</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>

              </tr>
              {/* row 2 */}
              <tr>
                <th><span className='bg-blue-500 py-2 px-6 rounded-lg text-lg'>K</span>
                <span>Kate Bishop</span>                
                </th>
                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>
                
                <td>
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_02').showModal()}>Details</button>
                  <dialog id="my_modal_02" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 2</p>
                      <p className="py-4">Date: 2</p>
                      <p className="py-4">Amount: 2</p>
                      <p className="py-4">Time: 2</p>
                      <p className="py-4">Txnhash: 2</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Flying Jack</th>
                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>
                
                <td>
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_03').showModal()}>Details</button>
                  <dialog id="my_modal_03" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 3</p>
                      <p className="py-4">Date: 3</p>
                      <p className="py-4">Amount: 3</p>
                      <p className="py-4">Time: 3</p>
                      <p className="py-4">Txnhash: 3</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                
              </tr>

              {/* row 4 */}
              <tr>
                <th>Psycho Man</th>
                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_04').showModal()}>Details</button>
                  <dialog id="my_modal_04" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 4</p>
                      <p className="py-4">Date: 4</p>
                      <p className="py-4">Amount: 4</p>
                      <p className="py-4">Time: 4</p>
                      <p className="py-4">Txnhash: 4</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 5 */}
              <tr>
                <th>Sakura Useless</th>
                <td>Feb 25, 2024</td>
                <td>$25000</td>
                <td>Failed</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_05').showModal()}>Details</button>
                  <dialog id="my_modal_05" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 5</p>
                      <p className="py-4">Date: 5</p>
                      <p className="py-4">Amount: 5</p>
                      <p className="py-4">Time: 5</p>
                      <p className="py-4">Txnhash: 5</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 6 */}
              <tr>
                <th>Black Beauty</th>
                <td>Feb 24, 2024</td>
                <td>$2000</td>
                <td>Successful</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_06').showModal()}>Details</button>
                  <dialog id="my_modal_06" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 6</p>
                      <p className="py-4">Date: 6</p>
                      <p className="py-4">Amount: 6</p>
                      <p className="py-4">Time: 6</p>
                      <p className="py-4">Txnhash: 6</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 7 */}
              <tr>
                <th>Kate Bishop</th>
                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_07').showModal()}>Details</button>
                  <dialog id="my_modal_07" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 7</p>
                      <p className="py-4">Date: 7</p>
                      <p className="py-4">Amount: 7</p>
                      <p className="py-4">Time: 7</p>
                      <p className="py-4">Txnhash: 7</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 8 */}
              <tr>
                <th>Flying Jack</th>
                <td>Feb 23, 2024</td>
                <td>$2500</td>
                <td>Pending</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_08').showModal()}>Details</button>
                  <dialog id="my_modal_08" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 8</p>
                      <p className="py-4">Date: 8</p>
                      <p className="py-4">Amount: 8</p>
                      <p className="py-4">Time: 8</p>
                      <p className="py-4">Txnhash: 8</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>

              {/* row 9 */}
              <tr>
                <th>Psycho Man</th>
                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_09').showModal()}>Details</button>
                  <dialog id="my_modal_09" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 9</p>
                      <p className="py-4">Date: 9</p>
                      <p className="py-4">Amount: 9</p>
                      <p className="py-4">Time: 9</p>
                      <p className="py-4">Txnhash: 9</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 10 */}
              <tr>
                <th>Sakura Useless</th>
                <td>Feb 25, 2024</td>
                <td>$2500</td>
                <td>Failed</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_10').showModal()}>Details</button>
                  <dialog id="my_modal_10" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 10</p>
                      <p className="py-4">Date: 10</p>
                      <p className="py-4">Amount: 10</p>
                      <p className="py-4">Time: 10</p>
                      <p className="py-4">Txnhash: 10</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 11 */}
              <tr>
                <th>Maurice Bryne</th>
                <td>Feb 29, 2024</td>
                <td>$4800</td>
                <td>Successful</td>
                
                <td> 
                  <button className="btn border border-black text-xl" onClick={()=>document.getElementById('my_modal_11').showModal()}>Details</button>
                  <dialog id="my_modal_11" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg bg-white">profile pic</h3>
                      <p className="py-4">Recipient: 11</p>
                      <p className="py-4">Date: 11</p>
                      <p className="py-4">Amount: 11</p>
                      <p className="py-4">Time: 11</p>
                      <p className="py-4">Txnhash: 11</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <button className="btn botder border-black bg-red-200">Exit</button>
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
  )
}
