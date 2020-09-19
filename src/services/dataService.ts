export function getFundInfo(): Promise<any>
{
    return fetch("https://demoapis.com/sample/finance/info").then((response) =>
        response.json()
        );
}

export function getFundAllocation(): Promise<any>
{
    return fetch(
        "https://demoapis.com/sample/finance/allocation?counter=5"
        ).then((response) => response.json());
}

export function getPerformance(): Promise<any>
{
    return fetch(
        "https://demoapis.com/sample/finance/performance"
        ).then((response) => response.json());
}

export function getPositions(): Promise<any>
{
    return fetch(
        "https://demoapis.com/sample/finance/positions"
        ).then((response) => response.json());
}

export async function connectBackends(url, history)
{
    try
    {
        let result = await fetch(url,
        {
            method: "POST",
            headers:
            {
                'Accept': "application/json",
                "Content-Type": "application/json, charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            },
            credentials: "include",
            mode: "cors",
        })
        .then((res) => res.json());
        console.log(result['username'])
        return result;
    }
    catch(e)
    {
        console.log(e);
        throw e;
    }
}
