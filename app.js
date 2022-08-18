"use strict";
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim();

function solution() {
  let count = 0;
  const a = input.replace(/[A-Z]/g, " ").split(" ");

  a.map((e, i) => {
    if (e === "" && (i === 0 || i === a.length - 1)) return true;
    else if (e.length >= 4 && i === a.length - 1) return true;
    else count += 3 - (e.length % 4);
  });
  console.log(count);
}
solution();
