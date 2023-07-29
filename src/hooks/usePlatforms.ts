import useData from "./useData";

interface Platform {
    id : string;
    name : string;
    slug : string;
}

const usePlatforms = ()=> useData<Platform>('/platforms/lists/parents');

export default usePlatforms;