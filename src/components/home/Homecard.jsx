import React from 'react'

const Homecard = () => {
    const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div style={{ zIndex: 1 }}>
        <div
      className={`group before:hover:scale-95 before:hover:h-72 m-3 hover:shadow-lg before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-[#5abaff] to-[#b26be9] before:absolute before:top-0 w-80 h-72 relative bg-[#252525] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden ${isHovered ? 'group-hover:scale-95 group-hover:h-72 group-hover:w-80 group-hover:h-44 group-hover:rounded-b-2xl group-hover:transition-all group-hover:duration-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 ${isHovered ? 'group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500' : ''}`}></div>
      <div className={`z-10 ${isHovered ? 'group-hover:-translate-y-10 transition-all duration-500' : ''}`}>
        <span className="text-2xl font-semibold">Dart Express</span>
        <p>Best shipment</p>
      </div>
      <a
        className={`bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500 ${isHovered ? 'group-hover:scale-125' : ''}`}
        href="#"
      >
        View
      </a>
    </div>
      
    </div>
  )
}

export default Homecard
