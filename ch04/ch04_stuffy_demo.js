
let s1 = {
    id: 1,
    type: "Weresquirrel",
    color: "gray",
    size: "x-large",
    limbs: 7
};
let s2 = {
    id: 2,
    type: "Authentic sean Blessing",
    color: "caucasian",
    size: "Large",
    limbs: 4
};
let s3 = {
    id: 3,
    type: "monkey",
    color: "indigo",
    size: "medium",
    limbs: 4
};

let stuffies = [s1,s2,s3];

for (let s of stuffies) {
    
    console.log("+++++++++  Stuffy stuff ++++++++++++");
    // console.log(s);
   //console.log("Stuffy " +s.id, "type " + s.type);
   //console.log(Object.keys(s));
   
   for (let k of Object.keys(s)) {
            console.log("property " + k + " , value: " +s[k])
   }

  
}

