export const calculateFine = (dueDate) => {
  const finePerDay = 1; //1 rupee
  const today = new Date();

  if (today > dueDate) {
    const lateHours = Math.ceil((today - dueDate) / (1000 * 60 * 60));
    const fine = lateHours * finePerDay;
    return fine;
  }
  return 0;
};
