import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import './style.css';

const calcBlocks = (amount: number, heightPercent: number) => {
  let size = window.innerWidth / amount;
  console.log(window.innerHeight, size);
  let amountHeight = Math.trunc(
    (window.innerHeight * (heightPercent / 100)) / size
  );
  console.log(amount * amountHeight);
  return amount * amountHeight;
};

const setBlocksSize = (size: number) => {
  document.documentElement.style.setProperty('--block-size', `${size}px`);
};

const stagger = () => {};

const generateBlocks = (amount: number) => {
  let blocks: any[] = [];
  for (let i = 0; i < amount; i++)
    blocks.push(<div key={i} onClick={stagger} className="block"></div>);
  return blocks;
};

export default function App() {
  const [, setWidth] = useState(0);
  const amount = 50;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    setBlocksSize(window.innerWidth / amount);
  });

  return (
    <div className="container">{generateBlocks(calcBlocks(amount, 100))}</div>
  );
}
