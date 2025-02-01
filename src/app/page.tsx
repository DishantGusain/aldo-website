export default function Home() {
   return (
      <div className="w-full flex justify-center font-montserrat font-medium">
         <div className="max-w-screen-2xl w-full min-h-screen  space-y-12 px-4">
            {/* --------------- HEADER --------------- */}

            <div className="text-center font-bold text-2xl  space-y-12">
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
               <h1 className="">
                  Best Quality & Best Price in the Market, Guaranteed!
               </h1>
            </div>

            <div className="text-xl space-y-10">
               <h2 className="">
                  Welcome to Aldo Luxury Fittings &#45; Trusted Hardware
                  Solutions for Over{" "}
                  <span className="font-bold">15 Years!</span>
               </h2>

               <p className="space-y-2">
                  <h2 className="">
                     We specialize in crafting high-quality Mortise Rose Knobs,
                     Cabinet Locks, Cylinders, and Pull Handles.
                  </h2>

                  <ol className="space-y-2">
                     <li className="">
                        &#45; Trusted by <span className="font-bold">800+</span>
                        Clients Worldwide
                     </li>

                     <li className="">
                        &#45; Precision Engineering & Premium Materials
                     </li>
                     <li className="">
                        &#45; Modern Designs with Lasting Durability
                     </li>
                     <li className="">
                        &#45; Unmatched Quality Control & Support
                     </li>
                  </ol>
               </p>

               <h2 className="">
                  Choose
                  <span className="font-bold"> ALDO Luxury Fittings</span> for
                  hardware you can trust—crafted to perfection!
               </h2>
               <div className="w-full justify-center flex flex-col items-center space-y-14">
                  <a
                     href="aldo-form"
                     className="bg-[#ff550d] px-16 xl:px-32 py-3 text-white font-semibold rounded hover:bg-red-500 duration-300 cursor-pointer text-2xl"
                  >
                     Get Started
                  </a>
                  <p className="text-sm">
                     Copyright 2025 © Aldo Luxury Fittings. All Rights Reserved.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
