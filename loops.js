//For Loop

const forLoop = {
    name: "Raghu",
    age: 30,
    city: "Salem"
};

const keys = Object.keys(forLoop);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = forLoop[key];
    console.log(key + ": " + value);
}

// For in

const forIn = {
    name: "RDX",
    age: 30,
    city: "Salem"
};

for (let key in forIn) {
    console.log(key + ": " + forIn[key]);
}

// For of

const forOF = {
    name: "Raghu",
    age: 30,
    city: "Salem"
};

const a = Object.entries(forOF);

for (let [key, value] of a) {
    console.log(key + ": " + value);
}

// For Each

const foreach = {
    name: "Raghu",
    age: 30,
    city: "Salem"
};

Object.keys(foreach).forEach(key => {
    console.log(key + ": " + foreach[key]);
});