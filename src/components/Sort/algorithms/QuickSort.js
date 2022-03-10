export function QuickSortAnimation(arr) {
  const array = [...arr];
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(arr, l, r, animations) {
  if (r <= l) return;
  const part = partition(arr, l, r, animations);
  quickSort(arr, l, part, animations);
  quickSort(arr, part + 1, r, animations);
}

function partition(arr, l, r, animations) {
  let i = l;
  let j = r + 1;
  const pivot = arr[l];
  while (1) {
    while (arr[++i] <= pivot) {
      if (i === r) break;
      animations.push([[i], false]);
    }
    while (arr[--j] >= pivot) {
      if (j === l) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, arr[j]], true]);
    animations.push([[j, arr[i]], true]);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  animations.push([[l, arr[j]], true]);
  animations.push([[j, arr[l]], true]);
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}
