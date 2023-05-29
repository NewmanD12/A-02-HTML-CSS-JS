

let rating = 1
const rating_num = document.getElementById('rating-num')
rating_num.innerText = rating


const remove_button = document.getElementById('remove-button')
const add_button = document.getElementById('add-button')

let img1 = document.getElementById('img-1')
let img2 = document.getElementById('img-2')
let img3 = document.getElementById('img-3')
let img4 = document.getElementById('img-4')
let img5 = document.getElementById('img-5')

let emptyStarImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHbb3hx5QmeTR90gYocfRDUeN_WrprKyPeC-jxJ6dzArE8DwqK5E4rL_ujJORi1tzlRc&usqp=CAU'

let fullStarImg = 'https://w7.pngwing.com/pngs/661/1019/png-transparent-star-icon-flat-black-emblem-favourite-rate-mark-like-sign-thumbnail.png'

add_button.addEventListener('click', () => {
    if(rating < 5){
        rating++
    }
    rating_num.innerText = rating
    switch (rating){
        case 2:
            img2.src = fullStarImg
            return
        case 3: 
            img3.src = fullStarImg
            return
        case 4: 
            img4.src = fullStarImg
            return
        case 5: 
            img5.src = fullStarImg
            return
        default:
            return
    }
})

remove_button.addEventListener('click', () => {
    if(rating > 1){
        rating--
    }
    rating_num.innerText = rating
    switch (rating){
        case 1: 
            img2.src = emptyStarImg
        case 2:
            img3.src = emptyStarImg
            return
        case 3: 
            img4.src = emptyStarImg
            return
        case 4: 
            img5.src = emptyStarImg
            return
        default:
            return
    }
})