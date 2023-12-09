$(document).ready(() => {


    $(window).scroll(() => {
        let scroll = $(document).scrollTop();
       // console.log(scroll);
        if (scroll > 500) {
            $('.navbar').addClass('fixed-top')
        } else {
            $('.navbar').removeClass('fixed-top')
        }
    })
})