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

export default function connectBackends(url, history): Promise<any> {
    return fetch(url, {
        method: "POST",
        //body: JSON.stringify(form_data),

        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json, charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            //'content-type' : 'application/x-www-form-urlencoded',
            //'API-Key': 'secret'
        },
        credentials: "include",
        mode: "cors",
        //redirect: "follow",
        //referrer: "no-referrer-when-downgrade",
        //referrerPolicy: "origin-when-cross-origin",
    })
    .then((res) => res.json())
    .then((res) => {
            if (res.ok) {
                console.log(res.text());
            }
            else
            {
                console.log(res)
                //console.log("error occurs");
            }
        })
        .catch((err) => err);
//        .then((res) => res.json())
//        .then((res) => console.log(res))
//        .catch((err) => console.log("error occurs：", err));
}
