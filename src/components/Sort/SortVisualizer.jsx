import React, { useRef, useState, useEffect } from "react";
import { QuickSortAnimation } from "./algorithms/QuickSort.js";
import { SelectionSort } from "./algorithms/SelectionSort.js";
import { BubbleSort } from "./algorithms/BubbleSort.js";
import "../css/sort.css";

const arr_len = 100;
const delay = 1;
const color = "blue";
const max = 100;
const min = 10;
const sorted_color = "green";

export default function SortVisualizer(props) {
  const [array, setArray] = useState([]);
  const [isSorted, setSorted] = useState(false);
  const [isSorting, setSorting] = useState(false);
  const Ref = useRef(null);

  useEffect(createArray, []);

  function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  }

  function createArray() {
    if (isSorting) return;
    if (isSorted) resetArrayColor();
    setSorted(false);
    const array = [];
    for (let i = 0; i < arr_len; i++) {
      array.push(Math.floor(Math.random() * (max - min)) + min);
    }
    shuffle(array);
    setArray(array);
  }

  function quickSort() {
    const animations = QuickSortAnimation(array);
    animateArrayAnimation(animations);
  }

  function selectionSort() {
    const animations = SelectionSort(array);
    animateArrayAnimation(animations);
  }

  function bubbleSort() {
    const animations = BubbleSort(array);
    animateArrayAnimation(animations);
  }

  function animateArrayAnimation(animations) {
    if (isSorting) return;
    setSorting(true);
    animations.forEach(([comparison, swap], index) => {
      setTimeout(() => {
        if (!swap) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateArraySwap(i);
            animateArraySwap(j);
          } else {
            const [i] = comparison;
            animateArraySwap(i);
          }
        } else {
          setArray((prevArray) => {
            const [n, newV] = comparison;
            const newArray = [...prevArray];
            newArray[n] = newV;
            return newArray;
          });
        }
      }, index * delay);
    });
    setTimeout(() => {
      animateSortedArray();
    }, animations.length * delay);
  }

  function animateArraySwap(i) {
    const Bars = Ref.current.children[i];
    const BarStyle = Bars[i].style;
    setTimeout(() => {
      BarStyle.backgroundColor = color;
    }, delay);
    setTimeout(() => {
      BarStyle.backgroundColor = "";
    }, delay * 2);
  }

  function animateSortedArray() {
    const Bars = Ref.current.children;
    for (let i = 0; i < Bars.length; i++) {
      const BarStyle = Bars[i].style;
      setTimeout(() => {
        BarStyle.backgroundColor = sorted_color;
      }, i * delay);
    }
    setTimeout(() => {
      setSorted(true);
      setSorting(false);
    }, Bars.length * delay);
  }

  function resetArrayColor() {
    const Bars = Ref.current.children;
    for (let i = 0; i < arr_len; i++) {
      const BarStyle = Bars[i].style;
      BarStyle.backgroundColor = "";
    }
  }

  return (
    <div className="sort-visualizer-container">
      <div ref={Ref} className="sort-array-container">
        {array.map((barHeight, i) => (
          <div
            className="array-bar"
            style={{
              height: `${barHeight}vmin`,
              width: `${100 / arr_len}vw`,
            }}
            key={i}
          ></div>
        ))}
      </div>

      <div className="buttons-bar">
        <button className="btn quick-button" onClick={createArray}>
          Start
        </button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={selectionSort}>Selection Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
      </div>
    </div>
  );
}
