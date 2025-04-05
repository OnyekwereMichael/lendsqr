import '../../styles/table.scss';
import { IMAGES } from '../../assets/images';
import { GetAllUsers } from '../../lib/query';
import { User } from '../../lib/types';
import { useState } from 'react';
import Loader from './Loader';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { generateStatus } from '../../lib/GenerateStatus/GenerateStatus';
import FilterForm from './Filterform';

const Table = () => {
  const { data: usersData, isLoading, isError } = GetAllUsers();
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openModalUserId, setOpenModalUserId] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  });

  const itemsPerPage = 10;

  
  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading users</p>;
  const uniqueOrganizations = [...new Set((usersData as User[])?.map((user) => user.organization))];

  const filteredUsers = usersData?.filter((user: User) => {
    const matchesOrg = filters.organization ? user.organization === filters.organization : true;
    const matchesUsername = filters.username ? user.name.toLowerCase().includes(filters.username.toLowerCase()) : true;
    const matchesEmail = filters.email ? user.email.toLowerCase().includes(filters.email.toLowerCase()) : true;
    const matchesPhone = filters.phone ? user.phone.includes(filters.phone) : true;
    const matchesDate = filters.date ? user.dateJoined === filters.date : true;
    const matchesStatus = filters.status ? generateStatus() === filters.status : true;
    return matchesOrg && matchesUsername && matchesEmail && matchesPhone && matchesDate && matchesStatus;
  });

  const totalPages = Math.ceil((filteredUsers?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredUsers?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const toggleModal = (userId: number) => {
    setOpenModalUserId(prev => (prev === userId ? null : userId));
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handleFilterReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phone: '',
      status: '',
    });
    setCurrentPage(1);
    setShowFilter(false);
  };

  return (
    <div className="table-container" style={{ position: 'relative' }}>
      {showFilter && (
        <div className="filter-backdrop" onClick={() => setShowFilter(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <FilterForm
              filters={filters}
              setFilters={setFilters}
              onSubmit={handleFilterSubmit}
              onReset={handleFilterReset}
              organizations={uniqueOrganizations}
            />
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr className="table_sub-container">
            <th>
              <div className="table-header">
                ORGANIZATION
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
            <th>
              <div className="table-header">
                USERNAME
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
            <th>
              <div className="table-header">
                EMAIL
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
            <th>
              <div className="table-header">
                PHONE NUMBER
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
            <th>
              <div className="table-header">
                DATE JOINED
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
            <th>
              <div className="table-header">
                STATUS
                <img src={IMAGES.filter} alt="filter" width={12} height={12} onClick={toggleFilter} style={{ cursor: 'pointer' }} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData?.map((user: User) => {
            const status = generateStatus();
            return (
              <tr key={user.id} style={{ position: 'relative' }}>
                <td>{user.organization}</td>
                <td><Link to={`/profile/${user?.id}`}>{user.name}</Link></td>
                <td><Link to={`/profile/${user?.id}`}>{user.email}</Link></td>
                <td><Link to={`/profile/${user?.id}`}>{user.phone}</Link></td>
                <td>{user.dateJoined}</td>
                <td>
                  <span className={`status ${status}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </td>
                <td>
                  <img
                    src={IMAGES.dot}
                    alt="options"
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleModal(user.id)}
                  />
                  {openModalUserId === user.id && (
                    <div className="modal-dropdown">
                      <ul>
                        <li><Link to={`/profile/${user?.id}`}>View Details</Link></li>
                        <li>Blacklist User</li>
                        <li>Activate User</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <span className="page-info">
          Showing {startIndex + 1} - {Math.min(endIndex, filteredUsers?.length || 0)} out of {filteredUsers?.length}
        </span>
        <div className="pagination-left">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-btn">
            <IoIosArrowBack size={15} color="#213F7D" />
          </button>

          <div className="page-numbers">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`page-btn ${page === currentPage ? 'active' : ''} ${page !== currentPage ? 'blur' : ''}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-btn">
            <IoIosArrowForward size={15} color="#213F7D" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
