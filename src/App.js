import { useState } from "react";

export function App() {
  const [priceSelection, setPriceSelection] = useState(0);

  const handlePriceClick = (priceIndex) => {
    setPriceSelection(priceIndex);
    console.log("New price selection", priceIndex);
  };

  return (
    <>
      <div className="bg-slate-200 text-center py-2 mb-4">
        Mimicking Apple&apos;s{" "}
        <a
          target="_blank"
          className="text-blue-600"
          href="https://www.apple.com/shop/buy-mac/apple-studio-display/standard-glass-tilt-adjustable-stand"
          rel="noreferrer"
        >
          Studio Display
        </a>{" "}
        Page.
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="pt-10 text-center">
          <div className="text-amber-700 pb-2">New</div>
          <h1 className="text-5xl pb-4 font-medium">
            Buy Apple Studio Display
          </h1>
          <div className="pb-8">
            27-inch 5K Retina display. 12MP Ultra Wide camera with Center Stage.
            Studio-quality mics. Six-speaker sound system with Spatial Audio.
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 flex justify-between">
            <div className="flex justify-center items-center w-1/12">
              <span>&lt;</span>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl w-5/6">
              <div>
                Standard glass has an industry-leading anti-reflective coating
                for viewing comfort and readability.
              </div>
              <img
                alt="A front view of Studio Display with standard glass."
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-1-202203?wid=640&hei=528&fmt=p-jpg&qlt=95&.v=1675709041796"
              />
            </div>
            <div className="flex justify-center items-center w-1/12">
              <span>&gt;</span>
            </div>
          </div>
          <div className="w-full md:w-7/12 md:pl-12">
            <h2 className="font-bold mb-4">Display</h2>
            <div className="text-sm rounded-xl bg-slate-50 p-4 mb-4">
              <span className="font-bold">
                Choose from two anti-reflective glass options.
              </span>{" "}
              Standard glass is engineered for extremely low reflectivity.
              Nano-texture glass scatters light to further minimize glare while
              delivering outstanding image quality in workspaces with bright
              light sources.
            </div>
            <div
              className={`flex justify-between items-center cursor-pointer px-4 py-6 border rounded-xl mb-4 ${
                priceSelection === 0
                  ? "border-2 border-blue-400 cursor-default"
                  : "cursor-pointer hover:bg-gray-50"
              }`}
              onClick={() => {
                handlePriceClick(0);
              }}
            >
              <div className="text-lg font-semibold">Standard glass</div>
              <div className="text-right">
                <div className="text-lg">From $1599</div>
                <div>or $133.25/mo. for 12 mo.*</div>
              </div>
            </div>
            <div
              className={`flex justify-between items-center px-4 py-6 border rounded-xl mb-4 ${
                priceSelection === 1
                  ? "border-2 border-blue-400 cursor-default"
                  : "cursor-pointer hover:bg-gray-50"
              }`}
              onClick={() => {
                handlePriceClick(1);
              }}
            >
              <div className="text-lg font-semibold">Nano-texture glass</div>
              <div className="text-right">
                <div className="text-lg">From $1899</div>
                <div>or $158.25/mo. for 12 mo.*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
