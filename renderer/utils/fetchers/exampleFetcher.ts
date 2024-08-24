import axiosInstance from "../axios/axiosInstance";

export const exampleFetcher = async () => {
    try{
        const response = await axiosInstance.get("/example");
        return response.data;
    }catch(e:unknown){
        throw new Error("Failed to fetch example data");
    }
};