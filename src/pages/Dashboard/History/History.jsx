import React, { useState } from 'react';
import usePayment from '../../../hooks/usePayment';
import SetPageTitle from '../../../components/SetPageTitle';
import { Helmet } from 'react-helmet-async';

const History = () => {
    const [history] = usePayment();

    return (
        <>
            <Helmet>
                <title>Sports Easy - Dashboard - history</title>
            </Helmet>
            <SetPageTitle title='Payment History'></SetPageTitle>
            <div className="overflow-x-auto mb-40 mt-10">
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
                            history.map((item, index) => <tr className='border border-indigo-300' key={item._id}>
                                <th>
                                    {index + 1}
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
        </>
    );
};

export default History;