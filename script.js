window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el: '#vueContainer',
            data: {
                imgs: ['wallpaper1.jpg', 'wallpaper2.jpg', 'wallpaper3.jpg'],
                dotsArray: [],
                activeImg: 0
            },
            methods: {
                changeImgPlus() {
                    this.activeImg +=1
                    if(this.activeImg==this.imgs.length){
                        this.activeImg = 0;
                    }
                },
                changeImgMinus() {
                    if(this.activeImg==0){
                        this.activeImg = this.imgs.length;
                    }
                    this.activeImg -=1
                }
            }

        }
    )


});
