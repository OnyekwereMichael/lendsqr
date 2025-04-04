import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/profilebottomnav.scss'
const ProfileBottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Navigation items with corresponding routes
  const navItems = [
    { label: "General Details", path: "/general-details" },
    { label: "Documents", path: "/document" },
    { label: "Bank Details", path: "/education" },
    { label: "Loans", path: "/socials" },
    { label: "App and System", path: "/guarantors" }
  ];

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path); // Navigate to the specified path
  };

  return (
    <section className="profile_bottom_nav">
      {navItems.map((item, index) => (
        <p
          key={index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => handleNavigation(index, item.path)}
        >
          {item.label}
        </p>
      ))}
    </section>
  );
};

export default ProfileBottomNav;
