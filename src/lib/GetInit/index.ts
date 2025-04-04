export const getInitials = (email: string) => {
    const namePart = email.split('@')[0];
    const words = namePart.split(/[\.\_\-]/); // split on dot, underscore or hyphen
    if (words.length >= 2) {
      return words[0][0].toUpperCase() + words[1][0].toUpperCase();
    } else {
      return namePart.slice(0, 2).toUpperCase();
    }
  };
  