import { getVessels, getHaulers } from "./database.js";

const allVessels = getVessels();
const allHaulers = getHaulers();

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    // Check if a vessel list item was clicked
    if (itemClicked.dataset.type === "vessel") {
        const haulerVesselAssignedId = parseInt(itemClicked.dataset.vesselhaulerid);
        const vesselId = parseInt(itemClicked.dataset.id);
        let haulingHauler = 0;
        let haulingVessel = 0;

        // Iterate through allHaulers to find the matching hauler
        for (const hauler of allHaulers) {
            if (hauler.id === haulerVesselAssignedId) {
                haulingHauler = hauler;
                break; // Break the loop once the matching hauler is found
            }
        }

        // Iterate through allVessels to find the matching vessel
        for (const vessel of allVessels) {
            if (vessel.id === vesselId) {
                haulingVessel = vessel;
                break; // Break the loop once the matching vessel is found
            }
        }

        // Check if both haulingHauler and haulingVessel are found
        if (haulingHauler && haulingVessel) {
            window.alert(`The ${haulingVessel.name} is assigned to hauling service ${haulingHauler.name}`);
        } else {
            window.alert("Incorrect vessel or hauler ID.");
        }
    }
});

export const VesselList = () => {
    const vessels = getVessels();

    let vesselsHTML = "<ul>";

    for (const vessel of vessels) {
        vesselsHTML += `<li data-id="${vessel.id}"
                            data-vesselhaulerid="${vessel.vessel_hauler_id}"
                            data-type="vessel">
                            ${vessel.name}
                        </li>`;
    }

    vesselsHTML += "</ul>";

    return vesselsHTML;
}














