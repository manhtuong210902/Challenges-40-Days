const formELe = document.querySelector('form')
const inputFile = document.querySelector('.input-file')
const progressArea = document.querySelector('.progress-area')
const uploadedAre = document.querySelector('.uploaded-area')


formELe.addEventListener('click',()=>{
    inputFile.click();
})

inputFile.onchange = function(e){
    let file = e.target.files[0]
    console.log(file)
    if(file){
        let fileName = file.name;
        let fileSize = file.size;

        uploadFile(fileName)
    }
}

function uploadFile(fileName){
    
}