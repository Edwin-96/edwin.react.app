import * as React from 'react';
import { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './style.css';

const amount = 50;
const percent = 100;

const calcBlocks = (amount: number, heightPercent: number) => {
  let size = window.innerWidth / amount;
  let amountHeight = Math.trunc(
    (window.innerHeight * (heightPercent / 100)) / size
  );
  return {
    size,
    amountHeight,
    totalAmount: amount * amountHeight,
    amountWidth: amount,
  };
};

const setBlocksSize = (size: number) => {
  document.documentElement.style.setProperty('--block-size', `${size}px`);
};

const stagger = () => {
  console.log('I was clicked');
  let blocks = calcBlocks(amount, percent);
  anime({
    target: '.block',
    backgroundColor: 'red',
    delay: anime.stagger(blocks.size, {
      grid: [blocks.amountWidth, blocks.amountHeight],
    }),
  });
};

const generateBlocks = (amount: number) => {
  let blocks: any[] = [];
  for (let i = 0; i < amount; i++)
    blocks.push(<div key={i} onClick={stagger} className="block"></div>);
  return blocks;
};

export default function App() {
  const [, setWidth] = useState(0);

  let blocks = calcBlocks(amount, percent);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    setBlocksSize(blocks.size);
  });

  return <div className="container">{generateBlocks(blocks.totalAmount)}</div>;
}
