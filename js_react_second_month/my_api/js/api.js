export class Api {
    constructor(API_URL) {
        this.API_URL = API_URL;
    }

    async get(route) {
        try {
            const response = await fetch(`${this.API_URL}/${route}`);
            const dataObj = await response.json();
            const data = dataObj.items;
            return data;
        } catch (err){
            return console.log(err);
        }
    }

    async post(route,_body){
        try {
            const response = await fetch(`${this.API_URL}/${route}`,{
                method: "POST",
                body: JSON.stringify(_body)
            });
            const dataObj = await response.json()
            return dataObj 
        } catch (err){
            return console.log(err);
        }
    }

    async delete(route,_deleteItem){
        try{
            const response = await fetch(`${this.API_URL}/${route}`,{
                method: "POST",
                body: JSON.stringify(_deleteItem)
            });
            const dataObj = await response.json();
            return dataObj
        } catch(err){
            return console.log(err);
        }

    } 

}

export const myApi = new Api("https://api.karapetyankaren.com")
export const jsonPlaceholderApi = new Api("https://jsonplaceholder.typicode.com");
