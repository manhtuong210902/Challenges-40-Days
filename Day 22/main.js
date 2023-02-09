const updateInput = document.querySelector('#my-picture')
const previewEle = document.querySelector('.preview')
const iconUpdate = document.querySelector('.icon-upload')
const description = document.querySelector('.description')
const imgEle = previewEle.querySelector('img')
console.log(imgEle)
imgEle.classList.add('hide')

iconUpdate.innerHTML = `<i class='bx bxs-cloud-upload'></i>`
description.innerText = `Upload to preview image`

updateInput.addEventListener('change', (e)=>{
    let file = e.target.files[0]

    if(!file) {
        return;
    }

    if(!file.name.endsWith('.jpg') && !file.name.endsWith('.png')){
        iconUpdate.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`
        description.innerText = `Incorrect file format` 
        imgEle.classList.add('hide')
        imgEle.src = ""
    }else{
        iconUpdate.innerHTML = `<i class='bx bxs-cloud-upload'></i>`
        description.innerText = `Upload to preview image`
        console.log(imgEle)
        imgEle.classList.remove('hide')
        imgEle.src = URL.createObjectURL(file)
    }
})