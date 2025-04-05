import React from 'react';
import '../../styles/filterform.scss';

type Filters = {
  organization: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
};

interface FilterFormProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  organizations: string[];
}

const FilterForm: React.FC<FilterFormProps> = ({
  filters,
  setFilters,
  onSubmit,
  onReset,
  organizations,
}) => {
  return (
    <div className="filter-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Organization</label>
          <select
            value={filters.organization}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, organization: e.target.value }))
            }
          >
            <option value="">Select</option>
            {organizations.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="User"
            value={filters.username}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={filters.email}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            value={filters.phone}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="form-actions">
          <button
            type="reset"
            className="reset-btn"
            onClick={onReset}
          >
            Reset
          </button>
          <button type="submit" className="filter-btn">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
