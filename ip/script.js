"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("/get-ip")
    .then((response) => response.text())
    .then((ip) => {
      document.getElementById("ipAddress").textContent = ip;
    });
});
