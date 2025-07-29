import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobsPage = () => {
    return  <div className="min-h-[100vh] bg-white-50 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <SearchBar/>
        <Divider size="xs" mx="md"/>
        <Jobs/>
    </div>
}
export default FindJobsPage;