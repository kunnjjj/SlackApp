const isCurrentTimestampNewDay = (
  currentTimestamp: number,
  oldTimestamp: number
): boolean => {
  const oldDate = new Date(oldTimestamp);
  const currentDate = new Date(currentTimestamp);
  return (
    oldDate.getDate() !== currentDate.getDate() ||
    oldDate.getMonth() !== currentDate.getMonth() ||
    oldDate.getFullYear() !== currentDate.getFullYear()
  );
};

export { isCurrentTimestampNewDay };
