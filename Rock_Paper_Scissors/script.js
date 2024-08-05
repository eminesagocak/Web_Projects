//en başta elementleri tanımladık
const container = document.querySelector(".container"),
      userResult = document.querySelector(".user-images img")
      cpuResult =document.querySelector(".cpu-images img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click",(e) =>{
        image.classList.add("active")
        // console.log(e.target.value);

        optionImages.forEach((img2, index2) =>{
            // console.log(index, index2)
            if(index !== index2 ){
                img2.classList.remove("active")
            }
        })
        let imageSrc =e.target.querySelector("img").src;
        // console.log(imageSrc);
        userResult.src = imageSrc;

        let randomNumber= Math.floor(Math.random()*3)
         
        let cpuImages = ["tas.png", "kagit.png", "makas.png"]
        cpuResult.src = cpuImages[randomNumber]
        // console.log(randomNumber)

        let cpuValue =["R","P","S"][randomNumber];
        let userValue =["R","P","S"][index];
        // console.log(userValue,cpuValue);

        let outcomes = {
            // RR : "Berabere",
            RP : "Kaybettin",
            RS : "Kazandın",
            // PP : "Berabere",
            PR : "Kazandın",
            PS : "Kaybettin",
            // SS : "Berabere",
            SR : "Kaybettin",
            SP : "Kazandın",
        };
        let outComeValue = outcomes[userValue + cpuValue]
        // console.log(outComeValue)

        result.textContent = userValue === cpuValue ? "Berabere" : `${outComeValue} `
        
    })
})