'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import DatePicker from 'react-multi-date-picker';

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const Report = () => {
  const { control, handleSubmit } = useForm();
  const [submittedDate, setSubmittedDate] = useState();

  const onSubmit = ({ date }) => {
    setSubmittedDate(date);
  };
  console.log('data',submittedDate?.format?.('YYYY-MM-DD'))
  // console.log(x);
  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/mydate_filter/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setpost(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  // useEffect(() => {
  //     axios
  //       .get(`http://127.0.0.1:8000/d/getmynews/6`)
  //       .then((res) => {
  //         setpost(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },[id]);

  return (
    // <div>
    <div>
      {/* Date */}
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="date"
            rules={{ required: true }} //optional
            render={({
              field: { onChange, name, value },
              fieldState: { invalid, isDirty }, //optional
              formState: { errors }, //optional, but necessary if you want to show an error message
            }) => (
              <>
                <DatePicker
                  value={value || ''}
                  onChange={(date) => {
                    onChange(date?.isValid ? date : '');
                  }}
                  format={'YYYY-MM-DD'}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />
                {errors && errors[name] && errors[name].type === 'required' && (
                  //if you want to show an error message
                  <span>your error message !</span>
                )}
              </>
            )}
          />
          <input type="submit" />
        </form>
        <p>تاریخ ارسال شده: {submittedDate?.format?.('YYYY-MM-DD')}</p>
      </>
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
