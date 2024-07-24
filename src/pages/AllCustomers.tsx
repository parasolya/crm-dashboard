import React from "react";
import { Title } from "../components/ui/Title/Title";
import CustomersTable from '../components/CustomersTable/CustomersTable';

import Button from "../components/ui/Button/Button";
import { ReactComponent as ArrowRightIcon } from '../../../public/chevron-right.svg';

const CustomersRow = () => {
  return (
    <div>
      <div>
      <Title title="All Customers" />
      <CustomersTable />
      {/* <Button
        variant="secondary"
        type="button"
        iconPosition="before"
        className=""
    
      >
      Active Members
      </Button> */}

      </div>
      {/* <Button
        variant="main"
        type="button"
        iconPosition="before"
        className=""
        icon={<ArrowRightIcon width={24} height={24} className="h-6 w-6" />}
      >
        Search
      </Button> */}
      </div>
  );
};

export default CustomersRow;
