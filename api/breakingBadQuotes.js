import axios from "axios";

const breakingBadQuotes = axios.create({
    baseURL: "https://api.breakingbadquotes.xyz/v1",
});

export default breakingBadQuotes;
