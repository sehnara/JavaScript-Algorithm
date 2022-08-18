"use strict";
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution() {
  input.map((e) => {
    while(e.includes('BUG')){
        e = e.replace(/BUG/g, "");
    }
    console.log(e);
  });
}
solution();
