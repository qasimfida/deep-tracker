import './App.css'
import tracker from './assets/tracker.gif'
import logo from "./assets/logo.png"
import bg from "./assets/bg.png"


function App() {
  return (
    <>

      <div className={`flex w-screen min-h-screen  font-helvetica-neue bg-black overflow-hidden `}
      >
        <div className='absolute w-full h-full max-w-full bg-[#020203]' >
          <img src={bg} className='w-full h-full max-w-full opacity-20' />
        </div>
        <div className="relative z-10 w-full px-5">
           <a href="https://deepfi.tools/" target="_blank" rel="noopener noreferrer" className="block py-6 decoration-none">
            <img src={logo} alt="deepfi" />
          </a>
          <div className="">
            <div className="relative z-10 flex flex-col items-center text-center md:mt-[144px] mt-16 ">
              <div className="flex items-center overflow-hidden content">
                <div class="spotlight"></div>
                <h2 className="font-bold deep-text ">DeepTracker</h2>
              </div>

              <p className="text-white md:text-[22px] text-xl font-normal mb-10 mt-6 ">
                Easily monitor your liquidity pool positions and performance.</p>
              <button className="relative z-10 border border-white rounded-full px-6 md:h-[60px] h-10 text-white text-lg font-normal  transition-colors duration-200 hover:text-[#ACAFBB] flex items-center shadow-light">
                Coming Soon
              </button>
            </div>
            <img
              src={tracker}
              alt="deep-tracker"
              className="z-0 w-[1000px] max-w-full mx-auto relative left-0 right-0 bottom-0 md:-mt-36"
            />
            <footer className="fixed md:bottom-12 bottom-6 left-0 right-0 mx-auto z-10 flex flex-wrap items-center justify-center w-full gap-3 py-4 text-sm font-normal tracking-wide text-center text-[#ACAFBB] md:flex-nowrap md:flex">
              <p>©2025 DeepTracker, a DeepFi Project.</p>
              <p>All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
