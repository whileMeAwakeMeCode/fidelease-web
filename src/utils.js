import { fideleaseApi } from "./constants";

export const smoothScroll = ref => {
    const target = ref.current;
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
        top: top + window.pageYOffset,
        behavior: "smooth"
    });
}


/**
* Fetch Fidelease server /api routes with a specific request route, method and body(post datas)
* @param {object} fetchConfig {body, route, method}
* @param {object} options
*  - returnServerError (bool) : return error from server
* @return {object} {error, response, status}
*/
export const fetchApi = async(fetchConfig, options) => {
    const {body, route, method} = fetchConfig;
    const { returnServerError} = options || {};
    try {
       
            let url = await Promise.resolve(`${fideleaseApi}?request=${route}`);
            const isPost = await Promise.resolve((method && (method.toLowerCase() === 'post')) || !method); 
            let fetchOptions = await Promise.resolve(
                {
                    method: method || 'POST',
                    mode: 'cors',
                    headers: isPost
                        ? {
                            Accept: (options && options.acceptHeader) || 'application/json',
                            'Content-Type': 'application/json',
                        }
                        : undefined,
        
                    body: isPost 
                        ? JSON.stringify(body)
                        : undefined
                }
            )
            let fetching = await fetch(url, fetchOptions);
            let error = await Promise.resolve(
                !fetching.ok 
                ? (
                    returnServerError
                    ? fetching.json()
                    : "There was an error fetching Fidelease API" 
                )
                : false
             );
 
             error = error?.error || error;
            let response = !error && await Promise.resolve(fetching.json());
 
            const status = fetching.status;
 
            return (
                {response, error, status}
               
            );

    }catch(e) {
        return(
            {error: e, status: 500}
        )
    }
 }

 export const isJSON = (supJ) => {
    try {
        const p = JSON.parse(supJ);
        return p;
    } catch(err) {
        return false;
    }
}

export const plural = (total, expression) => `${expression}${(parseInt(total)>1) ? 's' : ''}`

export const isUuidV4 = async uuidStr => (
    (uuidStr?.length === 36)
    && uuidStr.split('-').length === 5
)