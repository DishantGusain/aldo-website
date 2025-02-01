"use client";

import { useFormspark } from "@formspark/use-formspark";
import React, { useState } from "react";

const FORMSPARK_FORM_ID = "RX5dtbFXM";

export default function AldoForm() {
   const [active_spinner, setActiveSpinner] = useState(false);

   const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
   });

   const [Name, setName] = useState("");
   const [MobileNumber, setMobileNumber] = useState("");
   const [Wholeseller, setWholeseller] = useState("");
   const [AgencyName, setAgencyName] = useState("");
   const [Turnover, setTurnover] = useState("");

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setActiveSpinner(!active_spinner);

      if (Wholeseller === "Yes") {
         await submit({
            Name,
            MobileNumber,
            Wholeseller,
            AgencyName,
            Turnover,
         });

         if (Turnover === "Below 10 Lakhs") {
            window.location.href = "/thank-you";
         } else {
            window.location.href = "/form-submitted";
         }
      } else {
         window.location.href = "/thank-you";
      }
   };

   return (
      <div className="w-full flex justify-center font-montserrat font-medium">
         <div className="max-w-screen-lg w-full min-h-screen  space-y-12 py-10 px-4">
            <div className="w-full flex justify-between">
               <img
                  className=""
                  src="/aldoLogo.png"
                  alt="ALDO Logo"
                  width={150}
               />
               <img
                  className=""
                  src="/badge.png"
                  alt="15 years of excellence"
                  width={150}
               />
            </div>
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
                     htmlFor="Name"
                     className="block w-full"
                  >
                     Your Name*
                  </label>
                  <input
                     type="text"
                     name="Name"
                     value={Name}
                     onChange={(e) => setName(e.target.value)}
                     id="Name"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="Akash Patel"
                     required
                  />
               </div>
               {Name}
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
               {MobileNumber}
               <div className="block  w-full  space-y-1">
                  <label
                     htmlFor="Wholeseller"
                     className="block w-full"
                  >
                     Are you a Wholeseller?*
                  </label>
                  <select
                     name="Wholeseller"
                     value={Wholeseller}
                     onChange={(e) => setWholeseller(e.target.value)}
                     id="Wholeseller"
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
                        value="Yes"
                     >
                        Yes
                     </option>
                     <option
                        className="font-medium text-base"
                        value="No"
                     >
                        No
                     </option>
                  </select>
               </div>
               {Wholeseller}
               {Wholeseller === "Yes" && (
                  <>
                     <div className="relative  space-y-1">
                        <label
                           htmlFor="AgencyName"
                           className="block w-full"
                        >
                           What&apos;s your Agency Name?
                        </label>
                        <input
                           name="AgencyName"
                           value={AgencyName}
                           onChange={(e) => setAgencyName(e.target.value)}
                           type="text"
                           id="AgencyName"
                           className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded w-full font-medium text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                           placeholder="Eg. Radha Hardware"
                           required
                        />
                     </div>
                     {AgencyName}
                     <div className="block  w-full  space-y-1">
                        <label
                           htmlFor="Turnover"
                           className="block w-full"
                        >
                           What&apos;s Your Monthly Turnover?
                        </label>
                        <select
                           name="Turnover"
                           value={Turnover}
                           onChange={(e) => setTurnover(e.target.value)}
                           id="Turnover"
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
                              value="Below 10 Lakhs"
                           >
                              Below 10 Lakhs
                           </option>
                           <option
                              className="font-medium text-base"
                              value="10 to 50 Lakhs"
                           >
                              10 to 50 Lakhs
                           </option>
                           <option
                              className="font-medium text-base"
                              value="More than 50 Lakhs"
                           >
                              More than 50 Lakhs
                           </option>
                        </select>
                     </div>
                     {Turnover}
                  </>
               )}

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
            <p className="text-center text-xs">
               Copyright 2025 © Aldo Luxury Fittings. All Rights Reserved.{" "}
            </p>
         </div>
      </div>
   );
}
