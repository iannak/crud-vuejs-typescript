import axios from "axios";

const token = "68f2dabb8a5ca6ba631544828caab13db3962fe48169539457a47d8158cd849d";

export default axios.create({
    baseURL: "https://gorest.co.in/public/v2/",
    headers: {
        "Authorization": `Bearer ${token}`
    }
});