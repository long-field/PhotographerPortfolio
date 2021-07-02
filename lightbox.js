

const lightbox = document.createElement("div");
lightbox.id ="lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");

for (image of images){
    image.addEventListener("click", function()
        {
        lightbox.classList.add('active');
        let img = document.createElement('img');
        img.src = this.src;
        while (lightbox.firstChild) {
           lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        console.log(image.src);
        }
    )};

        
lightbox.addEventListener('click',function(e){
 if (e.target !== e.currentTarget)return;
lightbox.classList.remove('active');
})
