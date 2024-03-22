import { DockList } from "./recievingDocks.js"
import { HaulerList } from "./shippingHaulers.js"
import { VesselList } from "./shippingVessels.js"
const mainContainer = document.querySelector("#container")




const applicationHTML = `
<h1>We Got Boats</h1>
<article class="details">

    <div class="details-container">

        <section class="detail--row list details__vessels">
            <h2>Vessels</h2>
            
            ${VesselList()}
        </section>
        <section class="detail--row list details__haulers">
            <h2>Haulers</h2>
            ${HaulerList()}
        </section>
        <section class="detail--row list details__docks">
            <h2>Docks</h2>
            ${DockList()}
        </section>

    </div>

</article>

<article class="assignments">
    <h2></h2>
    
</article>
`

mainContainer.innerHTML = applicationHTML

