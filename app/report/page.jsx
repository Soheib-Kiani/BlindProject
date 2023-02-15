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

  // const onSubmitFirst = () => {
  //   setSubmitFirst(data);
  // };
  // const onSubmitSecond = ({ date }) => {
  //   setSubmitSecond(date);
  // };
  // console.log('data', submitFirst?.format?.('YYYY-MM-DD'));

  let x = submitFirst?.convert(gregorian, gregorian_en).format('YYYY-MM-DD');
  let xfa = submitFirst?.convert(persian, persian_fa).format('YYYY-MM-DD');
  let y = submitSecond?.format?.('YYYY-MM-DD');
  // var en_number = "0123456789";
  // let ii = x.toString()
  console.log(x);
  console.log(xfa);
  console.log(y);

  // const p2e = ({ s }) => {
  //   return s.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  // };
  // console.log(p2e('۱۴۰۱-۱۱-۲۶'));
  const getCity = async (e) => {
    // e.preventDefault()
    try {
      const resApi = await fetch('http://176.65.252.189:4001/date_filter/', {
        method: 'POST',
        body: JSON.stringify({
          startdate: x,
          enddate: y,
        }),
      });

      const data = await resApi.json();
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
        {/* First */}
        <div>
          <label>از تاریخ</label>
          <DatePicker
            inputClass="form-control"
            calendar={persian}
            locale={persian_fa}
            value={submitFirst}
            onChange={setSubmitFirst}
            format="YYYY-MM-DD"
          />
        </div>
        {/* second */}
        <p>First {submitFirst?.format?.('YYYY-MM-DD')}</p>
        <div>
          <label>تا تاریخ</label>
          <DatePicker
            inputClass="form-control"
            calendar={persian}
            locale={persian_fa}
            value={submitSecond}
            onChange={setSubmitSecond}
            format="YYYY-MM-DD"
          />
        </div>
        <p>second {submitSecond?.format?.('YYYY-MM-DD')}</p>
        <button onClick={() => getCity()}>Ersal</button>
      </>
      {/* ////////////////////////////////////////// */}
      <div className="h-[320px] bg-black w-[640px] mx-auto relative py-2">
        {/* <img
          src={`data:image/jpeg;base64,${frame}`}
          alt=""
          className="w-full h-[320px]"
        /> */}
      </div>

      <div className="flex flex-col border-2 h-[300px] overflow-x-hidden mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto tbl">
                <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>تاریخ</th>
                    <th>چراغ</th>
                    <th>نوع معلولیت </th>
                    <th>تصویر گرفته شده</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {results.length > 1 ? (
                    results.map((item, index) => {
                      return (
                        <tr key={index} className="border-2 border-gray-200">
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
                  )} */}
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
