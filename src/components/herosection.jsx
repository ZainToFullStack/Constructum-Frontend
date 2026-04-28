import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const herosection = () => {
  return (
    <section className="bg-[#f3f3f3] pt-28 pb-20 px-10 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            DYNAMIC SOLUTIONS <br />
            FOR YOUR CONSTRUCTION <br />
            JOURNEY EVER
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start lg:items-start gap-6">
          <p className="text-gray-600 max-w-md">
            Whether you're dreaming of a new home, commercial space, or a renovation,
            our skilled team is dedicated to delivering excellence at every step.
          </p>

          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition">
            Discover
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default herosection;




