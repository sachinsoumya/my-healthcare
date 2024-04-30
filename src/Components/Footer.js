import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-950 grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center md:text-justify">
        <div>
          <div className="w-24">
            <img
              src="https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png"
              alt="logo"
            />
            <div>Fatest growing medical platforms for doctors</div>
          </div>
        </div>
        <div>
            <div className="text-lg underline">REACHES US</div>
            <div className="pt-3">Please contact the below details for any other informations.</div>
            <div className="pt-3">Email:<div>info@hidoc.com</div></div>
            <div className="pt-3">Address : 
              <div>Hidoc Dr. Inc 2055 Limestone Rd , STE 200 -c</div>
            </div>
          
        </div>
        <div>
            <div className="text-lg underline">HIDOC DR FEATURES.</div>
            <div className="pt-3">Drug Database</div>
            <div className="pt-3">Webinars</div>
            <div className="pt-3">Drug Interaction</div>
            <div className="text-lg">Medical Calculators</div>
            <div className="pt-3">Articles</div>
            <div className="pt-3">Quiz</div>
            <div className="pt-3">Disease Database</div>
            <div className="pt-3">Surveys</div>
          
        </div>
      </div>

      <div className="text-center py-3 bg-gray-400">
        <div>@copywrite hadoc 2022 </div>
        <div>Terms & conditions | Privacy policy</div>
      </div>
    </div>
  );
};

export default Footer;
