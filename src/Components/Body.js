import React, { useEffect, useState } from "react";
import { mockData } from "../Utils/mock.js";
import { Table } from "./Table";
import Explore from "./Explore.js";

const Body = () => {
  const [drugData, setDrugData] = useState("");

  const datas = mockData;

  useEffect(() => {
    getData(datas);
  }, [datas]);

  const getData = async (datas) => {
    try {
      const data = await fetch(
        "https://hidocdr.com/api/hidoc-us/drug/getDrugList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datas),
        }
      );
      const json = await data.json();

      console.log(json);

      setDrugData(json);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return drugData ? (
    <div>
      <div className="bg-emerald-200 text-center  h-auto">
        <div className="bg-emerald-400 py-5 text-lg">
          Your one-stop solution for MEDICAL LEARNING and UPDATES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-7 justify-between">
          <div className="text-xl">
            <span>Get Knowledge of</span>{" "}
            <span className="text-emerald-800">APPROVED DRUGS</span>
          </div>

          <div>
            <input
              type="text"
              placeholder="enter the drug type "
              className="p-2 border border-black rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
        <div>
          DailyMed Drug Data . The DailyMed Database contains 143042 labeling
          submitted to the Food and Drug Administration(FDA) by companies ,
          DailyMed does not contain a complete listing of labeling for
          FDA-regulated products (e.g labeling tha submitted to the FDAt )
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Anesthesia{" "}
          </button>
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Cardiology
          </button>
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Critical Care{" "}
          </button>
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Dermatology
          </button>
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Diabetology
          </button>
          <button className="border border-black rounded-lg p-2 hover:bg-emerald-600">
            Dentistry
          </button>
        </div>
      </div>
      <Table drugs={drugData.data.drugData} />
      <Explore {...drugData.data.exploreMore} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Body;
