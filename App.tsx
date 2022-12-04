import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './style.css';
import anime from 'animejs';

import Menu from './menu';

const amount = 25;
const percent = 75;

const colors = [
  '#f57f4f',
  '#0a80b0',
  '#008080',
  '#ffd700',
  '#0d7373',
  '#a575c5',
  '#4febbf',
];

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

const setGlobalColor = (color: string) => {
  document.documentElement.style.setProperty('--color-0', color);
};

const generateBlocks = (amount: number, click: (index: number) => void) => {
  let blocks: any[] = [];
  for (let i = 0; i < amount; i++)
    blocks.push(<div key={i} onClick={() => click(i)} className="block"></div>);
  return blocks;
};

const getColor = () => colors[Math.trunc(Math.random() * (colors.length - 1))];

export default function App() {
  const [, setWidth] = useState(0);
  const [color, setColor] = useState(getColor());

  let blocks = calcBlocks(amount, percent);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    setBlocksSize(blocks.size);
    setGlobalColor(color);
  });

  const stagger = (index: number) => {
    let newColor = getColor();
    anime({
      targets: '.block',
      autostart: false,
      backgroundColor: newColor,
      delay: anime.stagger(25, {
        grid: [blocks.amountWidth, blocks.amountHeight],
        from: index,
        // easing: 'steps(10)',
      }),
    });
    setColor(newColor);
  };

  return [
    <Menu />,
    <div className="container">
      {generateBlocks(blocks.totalAmount, stagger)}
    </div>,
  ];
}
