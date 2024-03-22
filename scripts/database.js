



const database = 
{
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [ 
        { id: 1, name:"ARMS International", dockid: 3 },
        { id: 2, name:"We Take Stuff Places", dockid: 4 },
        { id: 3, name:"What Did You Just Say About Me?", dockid: 3 }, 
        { id: 4, name:"I'll Have You Know I Graduated Top of My Class In The Navy Seals", dockid: 1 }
    ],
    vessels: [
        { id: 1, name:"Edmund Fitzgerald", hold: 10, vessel_hauler_id: 4 },
        { id: 2, name:"Titanic", hold: 20, vessel_hauler_id: 3 },
        { id: 3, name:"Von Spree", hold: 30, vessel_hauler_id: 2 }, 
        { id: 4, name:"Olympic", hold: 40, vessel_hauler_id: 1 } 
    ]
};
    




export const getDocks = () => { return [...database.docks] };

export const getHaulers = () => { return [...database.haulers] };

export const getVessels = () => { return [...database.vessels] };


// !! FUNTIME 


const updatePropertiesToRandom = (docks, haulers, vessels) => {
    docks.forEach(dock => {
        dock.id = Math.floor(Math.random() * 4) + 1;
    });
    // ############################################################################
    haulers.forEach(hauler => {
        hauler.dockid = Math.floor(Math.random() * 4) + 1;
    });
    // ############################################################################
    vessels.forEach(vessel => {
        vessel.vessel_hauler_id = Math.floor(Math.random() * 4) + 1;
    })
}

// Usage of the function with provided arrays from the database.js file
const allDocks = getDocks();
const allHaulers = getHaulers();
const allVessels = getVessels();

updatePropertiesToRandom(allDocks, allHaulers, allVessels);
