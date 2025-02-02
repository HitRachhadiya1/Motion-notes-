import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        {/* <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Docs.
        </div> */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl tracking-tighter font-semibold text-zinc-500">
          Notes
        </h1>
      </div>
    </>
  );
}

export default Background;
