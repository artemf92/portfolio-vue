<template>
    <div class="preloader-wrap">
        <div class="preloader">
            <span>LOADING</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preloader'
}
</script>

<style lang="scss">
.preloader {
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 9999;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: loading 1.2s ease-in-out forwards;
    animation-delay: 3.5s;
    pointer-events: none;

    @keyframes loading {
        0% {
        //   transform: translateX(0);
            width: 100%;
          opacity: 1;
        }
        100% {
            // transform: translateX(100%);
            width: 0;
            opacity: 0;
        }
    }
    span {
        font-weight: 600;
        font-size: 2.5em;
        color: white;
        position: relative;
        overflow-x: hidden;
        transform: translateY(-60px);
        @media (min-width: 992px) {
            transform: translateY(0);
        }

        &:before {
            content: '';
            width: 100%;
            height: 5px;
            background-color: #fff;
            display: block;
            position: absolute;
            bottom: 0;
            animation: bottomBlock 2s ease-out forwards;
            animation-delay: 1.5s;


            @keyframes bottomBlock {
                0% {
                    width: 100%;
                }
                
                100% {
                    width: 0;
                }
            }
        }
        &:after {
            content:'';
            width: 100%;
            height: 80%;
            background-color: white;
            display: block;
            position: absolute;
            top: 0;
            transform: translateX(-110%);
            animation: nameBlock 2s ease-out forwards;
            animation-delay: 1.5s;

            @keyframes nameBlock {
                0% {
                    transform: translateX(-110%);
                }
                100% {
                    transform: translateX(0);
                }

            }
        }
    }
}
</style>