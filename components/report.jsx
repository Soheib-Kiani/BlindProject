// "use client"
// import React, { useState, useEffect } from 'react'
// var L="Red"
// const Videoloadhh = ({ socket }) => {

//     const [frame, setframe] = useState("")
//     const [results, setresults] = useState([])
//     useEffect(() => {
//         const interval = setInterval(() => {
//             socket.emit('request-frame', {});
//         }, 1);

//         socket.on("new-frame", (data) => {
//             setframe(data.base64)
//             // console.log(typeof(data.rec))
//             if (data.rec != null) {
//                 // setframe(data.rec["main_image"])
//                 if (results.length > 5) {
                    
//                     setresults(results.slice(results.length-5, results.length-1))
//                 }
//                 else{
//                 setresults([...results, data.rec])}
                
//             }

//         })

//         return () => {
//             socket.off("new-frame", () => {
//                 console.log("first")
//             })
//         }
//     }, [socket, results, frame])

//     return (
//         <div>
//             <div className='h-[320px] bg-black w-[640px] mx-auto relative py-2'>
//                 <img src={`data:image/jpeg;base64,${frame}`} alt="" className='w-full h-[320px]' />
//             </div>


//             <div className="flex flex-col border-2 h-[300px] overflow-x-hidden mt-4">
//                 <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//                         <div className="overflow-hidden">
//                             <table className="min-w-full table-auto tbl">
//                                 <thead >
//                                     <tr>
//                                         <th>ردیف</th>
//                                         <th>تاریخ</th>
//                                         <th>چراغ</th>
//                                         <th>نوع معلولیت </th>
//                                         <th>تصویر گرفته شده</th>
//                                         </tr>
//                                 </thead>
//                                 <tbody>

//                                     {

//                                         results.length > 1 ? (
//                                             results.map((item, index) => {
//                                                 return <tr key={index} className="border-2 border-gray-200">
//                                                     <td>{index}</td>
//                                                      <td>{item.date_created}</td>
                                                     
//                                                      {/* <script>
//                                                         var el = document.getElementById('content');
//                                                         var content;
//                                                         if  ({item.lightflag}==true) {
//                                                             content = '<td> Green0</td> '
//                                                         }
//                                                         if  ({item.lightflag}==false) {
//                                                             content = '<td> Red11</td> '
//                                                         }
//                                                         el.insertAdjacentHTML('afterbegin', content);

//                                                      </script> */}


//                                                      <td> {item.lightflag}</td> 
//                                                      <td>{item.classobj}</td>

//                                                     {/* <td>{`data:image/png;base64,${item.img}`}</td> */}
//                                                     <td><img src={`data:image/png;base64,${item.img}`}  width={100}/></td>
//                                                     {/* <td><img src={"http://127.0.0.1:8000/detect" + item.img}/></td> */}
//                                                     {/* {console.log('image',`${item.img}`)} */}
                                                     
                                                    
//                                                 </tr>
//                                             })) : <></>}

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>)
// }

// export default Videoloadhh




import React, { useEffect, useState } from 'react';



const Report = () => { 
    const [mypost, setpost] = useState([]);
    

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/camera`)
        .then((response) => response.json()
        )
        .then((data) => {
          setpost(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);
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
        <div className="flex w-full justify-center items-center h-screen">
          
        <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
          {mypost.map((post,key) => (

            <div
              key={post.id}
              
          
              className="flex w-full justify-center p-1 items-center mt-5 md:m-2  lg:mt-0">
            
              <div className="border border-[#0AAAA0] w-full rounded-xl shadow-lg shadow-gray-400">
                <div className='h-32 w-full   bg-green-500'>
                  
                 
                  {/* <img src={"http://localhost:8000/" + post.img}  alt="main" className="rounded-t-xl h-full object-cover w-full" /> */}
                
                </div>

                {/* <Router>
                <h3 className="text-xs h-16 w-full font-thin  bg-red-500 text-center  text-black">
                <div>
                <Link to={"/news/"+posts.title}>{posts.title}</Link></div>
                </h3>
                </Router> */}


                <div className="w-full">
                  
                  <h3 className="text-xs h-16 w-full font-thin  bg-red-500 text-center  text-black">
                  
                  {post.cameraip}
                  
                  </h3>

                  <div className="h-32 w-full bg-green-500 overflow-hidden font-vazir">
                  <h3 className="text-black text-xs  w-full text-right ">
                    {post.date_created}
                    
                  </h3>
                  </div>
                  </div>  
                </div>
                
              </div>
            
            
          ))}
          
        </div>

        
      
      </div>
        );



            {/* <h1>First News</h1>
            <h1>The id is : {id}</h1> */}
        // </div>)
    }

    export default Report;