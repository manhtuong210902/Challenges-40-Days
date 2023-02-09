
const btnSuccess = document.querySelector('.btn.btn--success')
const btnInfo = document.querySelector('.btn.btn--info')
const btnWarning = document.querySelector('.btn.btn--warning')

//Toast function
function toast({title = '', message = '', type = 'info', duration = 3000}){
    const main = document.querySelector('.toast__list')
    if(main){
        const toast = document.createElement('div')
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation'
        }

        const delay = (duration / 1000).toFixed(2)
        //auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);
        
        //remove toast when clicked
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icon = icons[type]
        toast.style.animation = `showToastMsg ease-in 0.3s, hideToastMsg linear 1s ${delay}s forwards`
        toast.classList.add('toast',`toast--${type}`)
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast)
    }
}

btnSuccess.onclick = function(){
    toast({
        title: 'Success',
        message: 'Máy tính kết nối thành công với Internet',
        type: 'success',
        duration: 3000
    })
}

btnInfo.onclick = function(){
    toast({
        title: 'Info',
        message: 'Tôi cần biết thêm thông tin của bạn',
        type: 'info',
        duration: 3000
    })
}

btnWarning.onclick = function(){
    toast({
        title: 'Warning',
        message: 'Có lỗi sảy ra vui lòng liên hệ quản trị viên',
        type: 'warning',
        duration: 3000
    })
}