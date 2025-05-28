// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function performs simplified long division.
 */
function generate() {
  const amountOfNumbers = parseInt(document.getElementById("amount-of-numbers").value);
  document.getElementById("result").innerText = "";
  let value1 = 0;
  let value2 = 1;
  let sum = 0;
  // process
  for (let i = 1; i <= amountOfNumbers; i++) {
    document.getElementById("result").innerText += sum;
    sum = (value1 + value2);
    value1 = value2;
    value2 = sum;
    }
  }

