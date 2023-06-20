import React, { useState } from 'react';
import usePayment from '../../../hooks/usePayment';

const History = () => {
    const [history] = usePayment();
    console.log(history)
    return (
        <div className="overflow-x-auto mb-40">
            <table className="table border border-indigo-200 ml-3">
                {/* head */}
                <thead>
                    <tr className='bg-slate-400'>
                      
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>TransactionId</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    history.map((item,index) =>  <tr className='border border-indigo-300' key={item._id}>
                        <th>
                           {index+1}
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <td>{item.instructor}</td>
                                </div>
                            </div>
                        </td>
                      <td>{item.email}</td>
                      <td>{item.transactionId}</td>
                      <td>{item.date}</td>
                    </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default History;