export function App() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <div>New</div>
        <h1 className="text-4xl">Buy Apple Studio Display</h1>
        <div>
          27-inch 5K Retina display. 12MP Ultra Wide camera with Center Stage.
          Studio-quality mics. Six-speaker sound system with Spatial Audio.
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <div className="p-8 bg-slate-50 rounded-xl">
            <div>
              Standard glass has an industry-leading anti-reflective coating for
              viewing comfort and readability.
            </div>
            <img
              alt="A front view of Studio Display with standard glass."
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-1-202203?wid=640&hei=528&fmt=p-jpg&qlt=95&.v=1675709041796"
            />
          </div>
        </div>
        <div className="w-2/3">
          <div>Display</div>
          <div>
            <span>Choose from two anti-reflective glass options.</span> Standard
            glass is engineered for extremely low reflectivity. Nano-texture
            glass scatters light to further minimize glare while delivering
            outstanding image quality in workspaces with bright light sources.
          </div>
          <div className="flex justify-between">
            <div>Standard glass</div>
            <div>
              <div>From $1599</div>
              <div>or $133.25/mo.per month for 12 mo.monthsFootnote*</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>Nano-texture glass</div>
            <div>
              <div>From $1899</div>
              <div>or $158.25/mo.per month for 12 mo.monthsFootnote*</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
