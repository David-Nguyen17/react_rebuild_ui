export const findAllPosition = (content: string, value: string) => {
  const result: number[] = [];
  let findIndex = content
    .toLocaleLowerCase()
    .indexOf(value.toLocaleLowerCase());
  while (findIndex !== -1) {
    result.push(findIndex);
    findIndex = content
      .toLocaleLowerCase()
      .indexOf(value.toLocaleLowerCase(), findIndex + 1);
  }
  return result;
};
export const convertStringArray = (content: string, value: string) => {
  if (content && value) {
    const allPosition = findAllPosition(content, value);
    const result: string[] = [];
    let currentIndex = 0;
    allPosition.forEach((potion) => {
      result.push(content.slice(currentIndex, potion));
      result.push(content.slice(potion, potion + value.length));
      currentIndex = potion + value.length;
    });
    result.push(content.slice(currentIndex));
    return result;
  }
  return [];
};
