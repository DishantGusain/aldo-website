export default function FormSubmitted() {
   return (
      <div className="w-full flex justify-center font-montserrat font-medium text-center">
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
            <h1 className=" text-2xl md:text-3xl lg:text-4xl my-10 font-bold">
               Details Submitted Successfully.
            </h1>
            <div className="flex items-center justify-center">
               <img
                  className="w-28 md:w-36 lg:w-40 "
                  src="/check.webp"
                  alt="Thank You"
               />
            </div>

            <p className="text-lg md:text-xl lg:text-2xl  desktop:text-3xl my-10 font-medium">
               Our sales team will contact you within 48 hours.
            </p>

            <div className="w-full justify-center flex flex-col items-center space-y-14">
               <p className="text-sm">
                  Copyright 2025 © Aldo Luxury Fittings. All Rights Reserved.
               </p>
            </div>
         </div>
      </div>
   );
}
