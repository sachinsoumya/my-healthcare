import React, { useState } from "react";
// import { mfrom "../Utils/mock.js";

export const Table = ({drugs}) => {

    const [drugDetails , setDrugDetails] = useState("Click on Drug name to see details");
//   const [drugData, setDrugData] = useState("");

//   const datas = mockData;

//   useEffect(() => {
//     getData(datas);
//   }, []);

//   const getData = async (datas) => {
//     const data = await fetch(
//       "https://hidocdr.com/api/hidoc-us/drug/getDrugList",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(datas),
//       }
//     );
//     const json = await data.json();

//     console.log(json);

//     setDrugData(json);
//   };

console.log(drugs);

  return (
    <div >
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 p-6">

            <div className="border border-black h-44 ">
                <div className="border border-black h-6 ">Drugs Name</div>

                {drugs.map((item)=> <div className="py-2 cursor-pointer" key={item.id} onClick={()=>setDrugDetails(item.drugDetails)}>{item.drugName}</div>)}

               
                {/* <div className="py-2">anything</div>
                <div className="py-2">anything</div>
                <div className="py-2">anything</div> */}

                

            </div>


            <div className="border border-black h-44" >
            <div className="border border-black h-6 ">Drugs Details</div>

            <div className="text-center">
                {drugDetails}

            </div>

            </div>



        </div>

    </div>
  );
};
