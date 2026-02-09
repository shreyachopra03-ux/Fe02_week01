
//  what is async ?
//  what is await?
//  how async await works behind the scenes?
//  examples of using async /await
//  error handling
//  interviews
//  async await vs promise.then/.catch

// +++++++++++ async fn always returns a promise +++++++++++=

// const p = new Promise((resolve, reject) => {
//     resolve('PROMISE RESOLVED VALUE!');
// });

// ++++++++++ async fn always returns a promise (vvv imp) ++++++++++++++++
// async function getData() {
//     return p;
// }

// const dataPromise = getData();

// console.log(dataPromise);
// dataPromise.then(res => console.log(res));

// +++++++++++++ Async / Await is used to handle promises ++++++++++++
// +++++++++ Await can only be used inside async function ++++++++++++
// await humesha promise ke aage likha jaata hai & it resolves the promise 

// const p = new Promise((resolve , reject) => {
//     resolve('promise is resolved!')
// })

// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// handlePromise()



// +++++++++++++ examples of how JS handles promises ++++++++++++
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved value!');
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved value!');
//     }, 10000);
// });

// await can only be used inside an async fn
// async function handlePromise() {
//     console.log("HELLO JS");

//     const val1 = await p1;
//     console.log("namaste js 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log('namaste js 2')
//     console.log(val2);
// }

// handlePromise();


// real example of fetch call & handling it with async / await
// to handle errors in async/await -> try/catch is used !

 const API_URL = "https://invalid.com";

 async function handlePromise() {

    try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    } catch(err) {
        console.log(err);
    }
}

handlePromise();


