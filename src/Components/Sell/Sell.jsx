import React from 'react';
import './Sell.css'

function Sell() {
  return (
    <div>
      <section class="dark:bg-jacarta-800 sell_main benifits_mmm2 relative py-24">
        {/* <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
     <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
   </picture>
   <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
     <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
   </picture> */}
        <div class="container">
          <h5 class="font-display text-center dark:text-white" style={{ color: "#F067D8" }}>Join Archieneko</h5>
          <h2 class="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white">
            Become a member of the exclusive<br></br>Archieneko
          </h2>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                <div class="bg-accent inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-5 w-5 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display  text-jacarta-700 mb-4 text-lg dark:text-white">1. Connect Your Wallet</h3>
              <p class="dark:text-jacarta-300 para_graph">
                Metamask to the Jutto Club site to mint a Archieneko
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                <div class="bg-green inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-5 w-5 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">2. Mint your NFT</h3>
              <p class="dark:text-jacarta-300 para_graph">
                Mint a archiemeta NFT to become a member of the exclusive Archieneko
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                <div class="bg-blue inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-5 w-5 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">3. Receive your membership</h3>
              <p class="dark:text-jacarta-300 para_graph">
                Receive your membership in the form of archiemeta NFT in your Metamask wallet
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                <div class="bg-red inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="h-5 w-5 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">4. Flaunt your membership</h3>
              <p class="dark:text-jacarta-300 para_graph">
                Use the archiemeta NFT as your display picture on social media platforms to flaunt your membership to this exclusive members-only club
              </p>
            </div>
          </div>

          <p class="text-jacarta-700 last_para mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
            for navigating Xhibiter
          </p>

          {/* <div class="mx-auto mt-7 max-w-md text-center">
             <form class="relative">
               <input type="email" placeholder="Email address" class="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"/>
               <button class="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
                 Subscribe
               </button>
             </form>
           </div> */}
        </div>
      </section>
    </div>
  )
}

export default Sell