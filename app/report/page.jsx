'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePicker from 'react-multi-date-picker';

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  digitsArToFa,
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn,
  digitsEnToAr,
  digitsFaToAr,
} from '@persian-tools/persian-tools';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
const Report = () => {
  const { control, handleSubmit } = useForm();
  const [submitFirst, setSubmitFirst] = useState();
  const [submitSecond, setSubmitSecond] = useState();
  const [results, setResult] = useState([]);

  // const onSubmitFirst = () => {
  //   setSubmitFirst(data);
  // };
  // const onSubmitSecond = ({ date }) => {
  //   setSubmitSecond(date);
  // };
  // console.log('data', submitFirst?.format?.('YYYY-MM-DD'));

  let x = submitFirst?.format?.('YYYY-MM-DD');
  let y = submitSecond?.format?.('YYYY-MM-DD');
  // var en_number = "0123456789";

  console.log(x);
  console.log(y);

  const getCity = async (e) => {
    // e.preventDefault()
    try {
      const resApi = await fetch('http://176.65.252.189:4001/date_filter/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          startdate: x,
          enddate: y,
        }),
      });

      const data = await resApi.json();
      setResult(data);
      console.log(data);
      console.log('status', resApi.status);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    // <div>
    <div>
      {/* Date */}
      <>
        <div>
          <div className="flex justify-center items-center mt-5  gap-x-10">
            <div>
              <label>از تاریخ</label>
              <DatePicker
                inputClass="form-control"
                required
                calendar={persian}
                locale={persian_fa}
                value={submitFirst}
                onChange={setSubmitFirst}
                format="YYYY-MM-DD"
              />
            </div>
            <div>
              <label>تا تاریخ</label>
              <DatePicker
                inputClass="form-control"
                required
                calendar={persian}
                locale={persian_fa}
                value={submitSecond}
                onChange={setSubmitSecond}
                format="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center my-2">
          <button
            className="p-2 w-16 text-center h-auto bg-gray-800 text-white rounded-lg"
            onClick={() => getCity()}
          >
            انتخاب
          </button>
        </div>
      </>
      {/* ////////////////////////////////////////// */}
      <div className="h-[320px] bg-black w-[640px] mx-auto relative py-2">
        {/* <img
          src={`data:image/jpeg;base64,${frame}`}
          alt=""
          className="w-full h-[320px]"
        /> */}
      </div>

      <div className="flex flex-col border-2 rounded-lg h-[300px] overflow-x-hidden mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto tbl">
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
                  {results.map((item) => {
                    return (
                      <tr key={item.id} className="border-2 font-yekan border-gray-200">
                        <td>{item.id}</td>
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
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
