import { getHaulers, getVessels, } from "./database.js"


const haulers = getHaulers();
const vessels = getVessels();





document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    
    if (itemClicked.classList.contains('hauler')) {
        
        const haulerAssignment = parseInt(itemClicked.dataset.id); 
        const selectedHauler = haulers.find(hauler => hauler.id === haulerAssignment);

        
        let counter = 0;

        for (const vessel of vessels) {
           
            if (vessel.vessel_hauler_id === haulerAssignment) {
                
                counter++;
            }
        }

        // Output the number of vessels for this hauler and its name
        window.alert(`The hauler: ${selectedHauler.name} is assigned: ${counter} ships`);
    }
});
export const HaulerList = () => {
    
    let haulersHTML = "<ul>";

    for (const hauler of haulers) {
        haulersHTML += `<li class="hauler" 
                        data-id="${hauler.id}" 
                        data-type="hauler">${hauler.name}  
                        
                        </li>`;
    }
    
    haulersHTML += "</ul>";
    
    return `<div class="haulers">${haulersHTML}</div>`;
};