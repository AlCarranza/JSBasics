// Declaring my promise
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(()=>{
    console.log('Promised consumed');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const dataInner = {abr:'NASA', name:'National Aeronauthics and Space Administration'};
        resolve(dataInner);
    }, 2000);
}).then((dataOuter)=> console.log(dataOuter));

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        const post = {name: 'Adrian', text:'NBA is fantastic'}

        if(!error) {
            resolve(post);
        } else {
            reject('Error post not found');
        }
    }, 1000);
});

promise3.then((post) => console.log(post)).catch((error) => console.log(error));

console.log('Hello from global scope');
