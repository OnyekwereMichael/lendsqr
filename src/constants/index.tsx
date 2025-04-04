import {IMAGES} from '../assets/images'

// customers 
export const sidebarLinks = [
    {
      imgURL:  IMAGES.User_friend,
      route: '/',
      label: "Users",
    },
    {
      imgURL: IMAGES.user_one,
      route: "/all-users",
      label: "Guarantors",
    },
    {
      imgURL: IMAGES.Loans,
      route: "/saved",
      label: "Loans",
    },
    {
      imgURL:IMAGES.Handshake,
      route: "/create-post",
      label: "Decision Models",
    },
    {
      imgURL:  IMAGES.Piggy,
      route: "/create-post",
      label: "Savings",
    },
    {
      imgURL: IMAGES.Loan_request,
      route: "/create-post",
      label: "Loan Requests",
    },
 
    {
      imgURL: IMAGES.user_times,
      route: "/create-post",
      label: "Whitelist",
    },
    {
      imgURL: IMAGES.user_times,
      route: "/create-post",
      label: "Karma",
    },

    // business 

    {
      imgURL:  IMAGES.Briefcase,
      route: '/ORGANIZATION',
      label: "Organization",
    },
    {
      imgURL: IMAGES.Loans,
      route: "/all-users",
      label: "Loan Products",
    },
    {
      imgURL: IMAGES.savings,
      route: "/saved",
      label: "Savings Products",
    },
    {
      imgURL:IMAGES.fees,
      route: "/create-post",
      label: "Fees and Charges",
    },
    {
      imgURL:  IMAGES.transaction,
      route: "/create-post",
      label: "Transactions",
    },
    {
      imgURL: IMAGES.services,
      route: "/create-post",
      label: "Services",
    },
 
    {
      imgURL: IMAGES.service_user,
      route: "/create-post",
      label: "Service Account",
    },
    {
      imgURL: IMAGES.settlement,
      route: "/create-post",
      label: "Settlements",
    },
    {
      imgURL: IMAGES.chart,
      route: "/create-post",
      label: "Reports",
    },

    // setting

    {
      imgURL: IMAGES.preference,
      route: "/create-post",
      label: "Preferences",
    },
    {
      imgURL: IMAGES.badge,
      route: "/create-post",
      label: "Fees and Pricing",
    },
    {
      imgURL: IMAGES.clipboard,
      route: "/create-post",
      label: "Audit Logs",
    },
  ];

  
  
  // Users 
  export const usersHome = [
    {
      imgUrl: IMAGES.total_user,
      label: 'Users',
      number: '2,453',
    },
    {
      imgUrl: IMAGES.total_user,
      label: 'Active Users',
      number: '2,453',
    },
    {
      imgUrl: IMAGES.Users_loans,
      label: 'Users with Loans',
      number: '12,453',
    },
    {
      imgUrl: IMAGES.total_user,
      label: 'Users with Savings',
      number: '102,453',
      
    },
  ]

 export const usersData = [
    { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "inactive" },
    { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "pending" },
    { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "blacklisted" },
    { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "pending" },
    { organization: "Lendsqr", username: "Grace Effiom", email: "grace@lendsqr.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "active" }
];

export const profileData = [
  {
    section: "Personal Information",
    details: [
      { label: "Full Name", value: "Grace Effiom" },
      { label: "Phone Number", value: "07060780922" },
      { label: "Email Address", value: "grace@gmail.com" },
      { label: "BVN", value: "07060780922" },
      { label: "Gender", value: "Female" },
      { label: "Marital Status", value: "Single" },
      { label: "Children", value: "None" },
      { label: "Type of Residence", value: "Parent’s Apartment" },
    ],
  },
  {
    section: "Education and Employment",
    details: [
      { label: "Level of Education", value: "B.Sc" },
      { label: "Employment Status", value: "Employed" },
      { label: "Sector of Employment", value: "FinTech" },
      { label: "Duration of Employment", value: "2 years" },
      { label: "Office Email", value: "grace@lendsqr.com" },
      {
        label: "Monthly Income",
        value: "₦200,000.00 - ₦400,000.00",
      },
      { label: "Loan Repayment", value: "40,000" },
    ],
  },
  {
    section: "Socials",
    details: [
      { label: "Twitter", value: "@grace_effiom" },
      { label: "Facebook", value: "Grace Effiom" },
      { label: "Instagram", value: "@grace_effiom" },
    ],
  },
  {
    section: "Guarantor",
    details: [
      { label: "Full Name", value: "Debby Ogana" },
      { label: "Phone Number", value: "07060780922" },
      { label: "Email Address", value: "debby@gmail.com" },
      { label: "Relationship", value: "Sister" },
    ],
  },
];
