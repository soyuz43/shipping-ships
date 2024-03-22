import { getDocks, getHaulers } from "./database.js";


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    // Check if a dock was clicked
    if (itemClicked.classList.contains('dock')) {
        const dockId = parseInt(itemClicked.dataset.id);   // # Does parseInt asssume base 10? I bet it does
        const docks = getDocks();
        let dockLocationName = "";

        
        
        // ! ASK ABOUT THIS IF IT COMES UP
        // let dockLocationName = itemClicked.dataset.location;



        for (let i = 0; i < docks.length; i++) { 
            if (docks[i].id === dockId) {
                dockLocationName = docks[i].location;              // used 'location' instead of 'name' 
                break;                                     // break the loop as soon as the codition is found
            }
        }

        

        const haulers = getHaulers();
        let haulersAtDock = [];

        
        for (let i = 0; i < haulers.length; i++) {                      // * Haulers at clicked dock
            if (haulers[i].dockid === dockId) {
                haulersAtDock.push(haulers[i].name);
            }
        }

        let message;                                    // crafting a message based on the length of haulersAtDock, is switch case any better?
            

            if (haulersAtDock.length === 0) { 
                message = `No haulers are currently unloading at ${dockLocationName}.`;   
            } else if (haulersAtDock.length === 1) {
                message = `The ${haulersAtDock[0]} dock is currently unloading at ${dockLocationName}.`;
            } else {
            
                     // * For multiple haulers, using .join with " ," as the delimiter
                const allButLastHauler = haulersAtDock.slice(0, -1).join(", ");                         // * playing with Array.slice, exluding the last element with -1, 
                const lastHauler = haulersAtDock.slice(-1);                                             // * Getting the last element only here
                message = `The ${allButLastHauler}, and ${lastHauler} docks are currently unloading at ${dockLocationName}.`;
            }
        
        window.alert(message);
    }
});



export const DockList = () => {
    const docks = getDocks();

    let docksHTML = "<ul>";
                                                                        
    for (const dock of docks) {
        docksHTML += `<li class="dock" 
                       data-id="${dock.id}"
                       data-id="${dock.location}">  
                       ${dock.location}
                       - Volume: ${dock.volume}</li>`;
    }

    docksHTML += "</ul>";

    return docksHTML;
}
