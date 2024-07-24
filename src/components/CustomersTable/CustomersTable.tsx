import { customersData, customersPageData } from "../../data";
import CustomersRow from "../CustomersRow/CustomersRow";
import { Status } from "../StatusLabel/StatusLabel";

import styles from "./CustomersTable.module.scss";

const CustomersTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {customersPageData.map((item, index) => (
              <th key={index}>
                {item.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customersData.map(
            ({ id, customerName, company, phone, email, country, status }) => (
              <CustomersRow
                key={id}
                id={id}
                customerName={customerName}
                company={company}
                phone={phone}
                email={email}
                country={country}
                status={status as Status}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;