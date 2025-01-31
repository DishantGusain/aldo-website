"use client";

import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "asdasda";

export default function AldoForm() {
   let [active_spinner, setActiveSpinner] = useState(false);

   const [utmParams, setUtmParams] = useState({
      utmSource: "",
      utmName: "",
   });

   const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
   });

   const [FirstName, setFirstName] = useState("");
   const [LastName, setLastName] = useState("");
   const [MobileNumber, setMobileNumber] = useState("");
   const [Service, setService] = useState("");
   const [City, setCity] = useState("");
   const [TravelledBefore, setTravelledBefore] = useState("");

   useEffect(() => {
      const utmParams = {
         utmSource: localStorage.getItem("utmSource") || "",
         utmName: localStorage.getItem("utmName") || "",
      };
      setUtmParams(utmParams);
   }, []);

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setActiveSpinner(!active_spinner);
      await submit({
         FirstName,
         LastName,
         MobileNumber,
         Service,
         City,
         TravelledBefore,
         ...utmParams,
      });
      if (TravelledBefore === "Yes") {
         window.location.href = "/thank-you";
      } else if (TravelledBefore === "No") {
         window.location.href = "/form-submitted";
      }
   };

   return (
      <div className="w-full flex justify-center font-montserrat font-medium">
         <div className="max-w-screen-lg w-full min-h-screen  space-y-12 py-10 px-4">
            <h1 className="mt-20 mb-10 font-bold text-2xl text-center ">
               Please provide the following details:
            </h1>

            <form
               onSubmit={onSubmit}
               data-formtrack
               data-formtrack-params="utm_source, referrer,ref "
               className="relative font-semibold text-base space-y-6"
            >
               <div className="relative  space-y-1">
                  <label
                     htmlFor="FirstName"
                     className="block w-full"
                  >
                     Your Name*
                  </label>
                  <input
                     type="text"
                     name="FirstName"
                     value={FirstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     id="FirstName"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="Akash Patel"
                     required
                  />
               </div>
               <div className="relative  space-y-1">
                  <label
                     htmlFor="MobileNumber"
                     className="block w-full"
                  >
                     Phone Number*
                  </label>
                  <input
                     type="number"
                     name="MobileNumber"
                     value={MobileNumber}
                     onChange={(e) => setMobileNumber(e.target.value)}
                     id="MobileNumber"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="99999XXXXX"
                     required
                  />
               </div>
               <div className="block  w-full  space-y-1">
                  <label
                     htmlFor="Service"
                     className="block w-full"
                  >
                     Are you a Wholesaler?*
                  </label>
                  <select
                     name="Service"
                     value={Service}
                     onChange={(e) => setService(e.target.value)}
                     id="Service"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 h-10  border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     required
                  >
                     <option
                        className="font-medium text-base"
                        value=""
                        disabled
                     >
                        - select -
                     </option>
                     <option
                        className="font-medium text-base"
                        value="Full Visa Application"
                     >
                        Yes
                     </option>
                     <option
                        className="font-medium text-base"
                        value="Only Early Appointment"
                     >
                        No
                     </option>
                  </select>
               </div>
               <div className="relative  space-y-1">
                  <label
                     htmlFor="City"
                     className="block w-full"
                  >
                     What's your Agency Name?
                  </label>
                  <input
                     name="City"
                     value={City}
                     onChange={(e) => setCity(e.target.value)}
                     type="text"
                     id="City"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="Eg. Radha Hardware"
                     required
                  />
               </div>
               <div className="block  w-full  space-y-1">
                  <label
                     htmlFor="TravelledBefore"
                     className="block w-full"
                  >
                     What's Your Monthly Turnover?
                  </label>
                  <select
                     name="Travelled Before"
                     value={TravelledBefore}
                     onChange={(e) => setTravelledBefore(e.target.value)}
                     id="TravelledBefore"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4  h-10  border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     required
                  >
                     <option
                        className="font-medium text-base"
                        value=""
                        disabled
                     >
                        - select -
                     </option>
                     <option
                        className="font-medium text-base  "
                        value="Yes"
                     >
                        Below 10 Lakhs
                     </option>
                     <option
                        className="font-medium text-base"
                        value="No"
                     >
                        10 to 50 Lakhs
                     </option>
                     <option
                        className="font-medium text-base"
                        value="No"
                     >
                        More than 50 Lakhs
                     </option>
                  </select>
               </div>

               <button
                  type="submit"
                  disabled={submitting}
                  className="flex justify-center items-center bg-[#EB560D] hover:bg-red-500 shadow shadow-orange-500 py-3 rounded w-full font-semibold text-lg text-white transition duration-300"
               >
                  <h1 className="pr-3">Submit Details</h1>

                  {active_spinner ? (
                     <div
                        className="inline-block border-2 border-current border-r-transparent border-solid rounded-full w-6 h-6 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] align-[-0.125em]"
                        role="status"
                     ></div>
                  ) : (
                     <></>
                  )}
               </button>
            </form>
            <p className="text-center text-xs">Copyright 2025 © Aldo Luxury Fittings. All Rights Reserved. </p>
         </div>
      </div>
   );
}
