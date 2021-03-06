window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el: '#vueContainer',
            data: {
                imgs: ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'],
                dotsArray: [],
                activeImg: 0,
                animation: '',
                isAutoPlay: false,
                isPlay: true,
                isPause: false,
            },
            methods: {
                changeImgPlus() {
                    this.animation = 'animation';
                    const self = this;
                    setTimeout(function () {
                        self.animation = '';
                        self.activeImg += 1
                        if (self.activeImg == self.imgs.length) {
                            self.activeImg = 0;
                        }
                    }, 200)
                },
                changeImgMinus() {
                    this.animation = 'animation';
                    const self = this;
                    setTimeout(function () {
                        self.animation = '';
                        self.activeImg -= 1;
                        if (self.activeImg <= -1) {
                            self.activeImg = self.imgs.length - 1;
                        }
                    }, 200)
                },
                createDotsByImgs() {
                    this.imgs.forEach(element => {
                        this.dotsArray.push(element);
                    });
                },
                autoPlay() {
                    self = this;
                    if (this.isAutoPlay == '') {
                        this.isAutoPlay = setInterval(function () {
                            self.changeImgPlus();
                        }, 1000)
                    }

                },
                stop() {
                    clearInterval(this.isAutoPlay)
                    console.log("STOP", this.isAutoPlay)
                    this.isAutoPlay = false
                },
                showPlay() {
                    this.isPause = false
                    this.isPlay = true
                },
                showPause() {
                    this.isPause = true
                    this.isPlay = false
                },
                setActiveImg(index){
                    this.activeImg = index;
                }
            }

        }
    )
});
