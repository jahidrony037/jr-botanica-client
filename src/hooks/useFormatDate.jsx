const useFormatDate = (date) => {
  const dateFormat = new Date(date);
  return dateFormat.toISOString().split("T")[0];
};

export default useFormatDate;
