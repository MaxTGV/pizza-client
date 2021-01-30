export const generateNewDate = () => {
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const newDate = `${day} января ${year}, ${hour}:${minute}`;
    return newDate;
  };