import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";

const FindTalentPage = () => {
    return  <div className="min-h-[100vh] bg-white-50 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <SearchBar/>
        <Divider size="xs" mx="md"/>
    </div>
}
export default FindTalentPage;