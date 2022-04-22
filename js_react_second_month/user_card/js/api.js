export class Api {
    constructor(API_URL) {
        this.API_URL = API_URL;
    }

    async get(route) {
        try {
            const response = await fetch(`${this.API_URL}/${route}`);
            const data = await response.json();
            return data;
        } catch (err) {
            return console.log("🚀 ~ err", err)
        }
    }

    async post(route, _body) {
        try {
            const response = await fetch(`${this.API_URL}/${route}`, {
                method: "POST",
                body:JSON.stringify(_body)
            });
            const data = await response.json();
            return data;
        } catch (err) {
            return console.log("🚀 ~ err", err)
        }
    }

}


//Backend instanceof

export const jsonPlaceholderApi1 = new Api("https://api.karapetyankaren.com");
export const jsonPlaceholderApi = new Api("https://jsonplaceholder.typicode.com");
