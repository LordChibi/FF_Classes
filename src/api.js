import axios from "axios";

const BASE_URL="https://www.moogleapi.com/api/v1/characters/search?job=l'cie"

class FinalFantasyApi{
    static async GetClassesByJob(){
        let res= await axios.get (BASE_URL)
        console.log (res)
        return res

    }
}
export default FinalFantasyApi