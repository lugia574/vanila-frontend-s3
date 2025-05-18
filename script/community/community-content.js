const regBtn = document.querySelector(".register-btn");

regBtn.addEventListener("mouseover", ()=>{
    console.log("진입");
    regBtn.classList.add("btn-point");
});

regBtn.addEventListener("mouseout", ()=>{
    console.log("진입");
    regBtn.classList.remove("btn-point");
});
