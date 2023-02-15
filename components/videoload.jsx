/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
var L = 'Red';
const Videoload = ({ socket }) => {
  const [frame, setframe] = useState('');
  const [results, setresults] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit('request-frame', {});
    }, 1);

    socket.on('new-frame', (data) => {
      setframe(data.base64);
      // console.log(typeof(data.rec))
      if (data.rec != null) {
        // setframe(data.rec["main_image"])
        if (results.length > 5) {
          setresults(results.slice(results.length - 5, results.length - 1));
        } else {
          setresults([...results, data.rec]);
        }
      }
    });

    return () => {
      socket.off('new-frame', () => {
        console.log('first');
      });
    };
  }, [socket, results, frame]);

  return (
    <div>
      <div className="h-[320px] bg-black w-[640px] mx-auto relative py-2">
        <img
          src={`data:image/jpeg;base64,${frame}`}
          alt=""
          className="w-full h-[320px]"
        />
      </div>

      <div className="flex flex-col border-2 rounded-lg h-[300px] overflow-x-hidden mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto ">
                <thead className='border-b'>
                  <tr className='font-yekan'>
                    <th>ردیف</th>
                    <th>تاریخ</th>
                    <th>چراغ</th>
                    <th>نوع معلولیت </th>
                    <th>تصویر گرفته شده</th>
                  </tr>
                </thead>
                <tbody>
                  {results.length > 1 ? (
                    results.map((item, index) => {
                      return (
                        <tr key={index} className="border-2 font-yekan border-gray-200">
                          <td>{index}</td>
                          <td>{item.date_created}</td>
                          <td>{item.lightflag}</td>
                          <td>{item.classobj}</td>
                          <td>
                            <img
                              src={`data:image/png;base64,${item.img}`}
                              width={100}
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoload;
