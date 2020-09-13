export function getFundInfo(): Promise<any> {
    return fetch("https://demoapis.com/sample/finance/info").then((response) =>
        response.json()
    );
}

export function getFundAllocation(): Promise<any> {
    return fetch(
        "https://demoapis.com/sample/finance/allocation?counter=5"
    ).then((response) => response.json());
}

export function getPerformance(): Promise<any> {
    return fetch(
        "https://demoapis.com/sample/finance/performance"
    ).then((response) => response.json());
}

export function getPositions(): Promise<any> {
    return fetch(
        "https://demoapis.com/sample/finance/positions"
    ).then((response) => response.json());
}

// export default function connectBackends(url, form_data, history): Promise<any> {
//     return fetch(url, {
//         method: "POST",
//         //body: JSON.stringify(form_data),
//         body: form_data,
//         headers: {
//             "Accept": 'application/json',
//             "Content-Type": "application/json",
//             //'content-type' : 'application/x-www-form-urlencoded',
//             //'API-Key': 'secret'
//         },
//         credentials: "same-origin",
//         mode: "no-cors",
//         redirect: "follow",
//         referrer: "no-referrer",
//         referrerPolicy: "origin-when-cross-origin"
//     })
//         .then((response) => {
//             if (response.status === 200) {
//                 console.log(response.json());
//                 //window.location.reload();
//                 //history.push("/Home");
//                 //return response.json();
//             } else {
//                 console.log("error occurs");
//             }
//         })
//         .catch((err) => err);
// }
