window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el: '#vueContainer',
            data: {
                imgs: ['wallpaper1.jpg', 'wallpaper2.jpg', 'wallpaper3.jpg'],
                dotsArray: [],
                activeImg:0
            },
            methods: {
                changeImg() {
                    return activeImg
                }
            }

        }
    )


});
