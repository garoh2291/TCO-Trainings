import { myApi ,jsonPlaceholderApi } from './api.js';
import { $wrapper } from "./elements.js";
import { appendUserCard } from "./dom.js"


myApi.get('items/read.php')
    .then(data => {
        data.forEach(user=>{
            appendUserCard($wrapper,user)
        })
    })



