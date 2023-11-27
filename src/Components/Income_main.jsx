import React from 'react'
import Income from './Income/Income'

function Income_main() {
  return (
    <div>
      <main class="pt-[5.5rem] lg:pt-24 bnnr">

        <section class="relative bnnr" style={{ paddingTop: "50px" }}>

          <div class="container">

            <div class="mx-auto max-w-2xl pt-16 text-center">
              <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white banner_p" style={{ color: "#fff" }}>Passive Income</h1>
              <p class="dark:text-jacarta-300 banner_p text-lg leading-normal" style={{ color: "#fff" }}>
                An exclusive private<br></br>-members club by ARCHIENEKO
              </p>
            </div>
          </div>
        </section>
        <Income />
      </main>
    </div>
  )
}

export default Income_main