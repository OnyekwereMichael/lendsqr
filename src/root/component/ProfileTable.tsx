import { User } from '../../lib/types'
import '../../styles/profiledetails.scss'
const ProfileTable = ({ data }: { data: User }) => {
   
  return (
    <div>
         <section className="profile-data-container">
  <section className="section">
    <h2>Personal Info</h2>
    <div className="grid">
      <div>
        <p className="profile_info_personal">Email Address</p>
        <p className="profile_ans">{data.email}</p>
      </div>
      <div>
        <p className="profile_info_personal">Name</p>
        <p className="profile_ans">{data.name}</p>
      </div>
      <div>
        <p className="profile_info_personal">BVN</p>
        <p className="profile_ans">{data.BVN}</p>
      </div>
      <div>
        <p className="profile_info_personal">Gender</p>
        <p className="profile_ans">{data.Gender}</p>
      </div>
      <div>
        <p className="profile_info_personal">Marital status</p>
        <p className="profile_ans">{data.maritalStatus}</p>
      </div>
      <div>
        <p className="profile_info_personal">children</p>
        <p className="profile_ans">{data.children}</p>
      </div>
      <div>
        <p className="profile_info_personal">Type of residence</p>
        <p className="profile_ans">{data.TOR}</p>
      </div>
    </div>
  </section>

  <section className="section">
    <h2>Education and Employment</h2>
    <div className="grid">
      <div>
        <p className="profile_info_personal">level of education</p>
        <p className="profile_ans">{data.L0E}</p>
      </div>
      <div>
        <p className="profile_info_personal">sector of employment</p>
        <p className="profile_ans">{data.dateJoined}</p>
      </div>
      <div>
        <p className="profile_info_personal">employment status</p>
        <p className="profile_ans">{data.EmploymentStatus}</p>
      </div>
      <div>
        <p className="profile_info_personal">Duration of employment</p>
        <p className="profile_ans">2 years</p>
      </div>
      <div>
        <p className="profile_info_personal">office email</p>
        <p className="profile_ans">{data.officeemail}</p>
      </div>
      <div>
        <p className="profile_info_personal">Monthly income</p>
        <p className="profile_ans"><span>200,000</span> - <span>400,000</span></p>
      </div>
      <div>
        <p className="profile_info_personal">loan repayment</p>
        <p className="profile_ans">{data.loanRepayment + '00, 000'}</p>
      </div>
    </div>
  </section>

  

  <section className="section">
    <h2>Social Info</h2>
    <div className="grid">
      <div>
        <p className="profile_info_personal">Facebook</p>
        <p className="profile_ans">{data.facebook}</p>
      </div>
      <div>
        <p className="profile_info_personal">LinkedIn</p>
        <p className="profile_ans">{data.linkedin}</p>
      </div>
      <div>
        <p className="profile_info_personal">Twitter</p>
        <p className="profile_ans">{data.twitter}</p>
      </div>
    </div>
  </section>

  <section className="section">
    <h2>Guarantor</h2>
    <div className="grid">
      <div>
        <p className="profile_info_personal">full Name</p>
        <p className="profile_ans">{data.GurantorName}</p>
      </div>
      <div>
        <p className="profile_info_personal">Phone Number</p>
        <p className="profile_ans">{data.GurantorPhone}</p>
      </div>
      <div>
        <p className="profile_info_personal">Email Address</p>
        <p className="profile_ans">{data.GurantorEmail}</p>
      </div>
      <div>
        <p className="profile_info_personal">Relationship</p>
        <p className="profile_ans">{data.Married}</p>
      </div>
    </div>
  </section>

 

</section>

    </div>
  )
}

export default ProfileTable
