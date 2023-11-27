import React from 'react'
// import ArchieMeta_NFT from "./" 
// import {ArchieMeta} from "./ArchieMeta NFT.pdf";
import ArchieMeta_NFT from "./ArchieMeta NFT.pdf"
import Bring from './Bring/Bring'

function Roadmap_main() {
  return (
    <div>
      <main class="pt-[5.5rem] lg:pt-24 bnnr">
      {/* <!-- Banner --> */}
      <section class="relative bnnr" style={{paddingTop: "75px"}}>
        {/* <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="banner.jpg" alt="gradient" class="h-full w-full"/>
        </picture> */}
        <div class="container">
          {/* <!-- Page Title --> */}
          <div class="mx-auto max-w-2xl pt-16 text-center">
            <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white banner_p" style={{color:"#fff"}}>Roadmap</h1>
            <p class="dark:text-jacarta-300 text-lg leading-normal" style={{color:"#fff"}}>
              An exclusive private<br></br>-members club by ARCIHIENEKO.
            </p>
          </div>
       
        </div>
      </section>
      <Bring />
      </main>


      {/* download button is here  */}
      <div className="d-flex justify-content-center">
          <a href={ArchieMeta_NFT} download >
            <button class="btn btn-1 download_btn text-white">
              {/* <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg> */}
             Download More Information
            </button>
          </a>
        </div>
    </div>
  )
}

export default Roadmap_main
