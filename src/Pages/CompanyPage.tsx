import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-white-50 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/find-talent">
        <Button
          onClick={() => navigate(-1)}
          leftSection={<IconArrowLeft size={20} />}
          className="rounded"
          color="azure-radiance.6"
          variant="light"
          fullWidth
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-between">
        <Company/>
        <SimilarCompanies/>
      </div>
    </div>
  );
};

export default CompanyPage;
