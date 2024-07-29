
import { Title } from "../../components/ui/Title/Title";
import CustomersTable from "../../components/CustomersTable/CustomersTable";

import Button from "../../components/ui/Button/Button";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import styles from './AllCustomers.module.scss'

const AllCustomers = () => {
  return (
    <div className="container">
      <div className={`pageWrapper ${styles.customersHead}`}>
        <div>
          <Title title="All Customers" />

          <p className={styles.customersSign}>Active Members</p>
        </div>

        <Button
          variant="main"
          type="button"
          iconPosition="before"
          className=""
          icon={<SearchIcon className={styles.searchIcon} width={24} height={24} />}
        >
          Search
        </Button>
      </div>
      <CustomersTable />
    </div>
  );
};

export default AllCustomers;
