export  const generateStatus = () => {
    const statuses = ['active', 'inactive', 'pending', 'blacklisted'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };