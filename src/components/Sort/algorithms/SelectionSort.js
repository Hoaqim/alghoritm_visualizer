export function SelectionSort(arr) {
  const array = [...arr];
  const animations = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, i], false]);
      if (array[j] < array[i]) {
        animations.push([[i, array[j]], true]);
        animations.push([[j, array[i]], true]);
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return animations;
}
