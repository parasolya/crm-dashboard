import clsx from 'clsx';
import StatusLabel, { Status } from '../StatusLabel/StatusLabel';

import styles from "./CustomersRow.module.scss";

export interface CompanyRowProps {
  id: number;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: 'active' | 'inactive';
}

const labelByStatus: Record<'active' | 'inactive', string> = {
  active: 'Active',
  inactive: 'Inactive',
};

const CustomersRow: React.FC<CompanyRowProps> = ({
  id,
  customerName,
  company,
  phone,
  email,
  country,
  status,
}) => {
  return (
    <tr className={styles.tr}>
      <td>
        {customerName}
      </td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <StatusLabel status={status}>
          {labelByStatus[status]}
        </StatusLabel>
      </td>
    </tr>
  );
};

export default CustomersRow;