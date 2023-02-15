'use client';
import React from 'react';
import HttpCall from '../../../../components/HttpCall';
import WebSocketCall from '../../../../components/WebSocketCall';
import Videoload from '../../../../components/videoload';
import { io } from 'socket.io-client';
import { HiOutlinePlay, HiOutlineStop } from 'react-icons/hi';
import { useEffect, useState } from 'react';
const Main = () => {
  const [socketInstance, setSocketInstance] = useState('');
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io('localhost:7001/', {
        transports: ['websocket'],
        cors: {
          origin: 'http://localhost:3000/',
        },
      });

      setSocketInstance(socket);

      socket.on('connect', (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on('disconnect', (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);

  return (
    <div className="">
      {/* <HttpCall /> */}

      {!buttonStatus ? (
        <div className="flex space-x-4">
          <button
            onClick={handleClick}
            className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              پخش زنده
            </span>
          </button>
          {/* <button
            onClick={handleClick}
            className=" flex px-4 py-2 shadow-2xl font-semibold bg-rose-500 text-white rounded-md hover:bg-gray-700 space-x-2 align-middle"
          >
            <HiOutlinePlay className="text-2xl mx-2"></HiOutlinePlay>
            <span> پخش زنده</span>
          </button> */}
        </div>
      ) : (
        <div className="flex space-x-4">
          <button
            onClick={handleClick}
            className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
             توقف پخش
            </span>
          </button>
        </div>
      )}
      <div className="text-center justify-center items-center">
        {!buttonStatus ? (
          <>
            <div className="h-[480px] bg-black w-[640px] mx-auto relative"></div>
          </>
        ) : (
          <>
            <div className="text-center justify-center items-center">
              {!loading && <Videoload socket={socketInstance} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Main;
