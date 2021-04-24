<template>
    <div class="download">
        <div class="download__button">
            <label for="ms-download">
                <div class="ms-content">
                    <div class="ms-content-inside">
                        <input type="checkbox" id="ms-download" />
                        <div class="ms-line-down-container">
                            <div class="ms-line-down"></div>
                        </div>
                        <div class="ms-line-point"></div>
                    </div>
                </div>
            </label>
        </div>
        <p>Delta T v5.0.41 stable.apk</p>
    </div>
</template>

<script>
    export default {
        name: "download"
    }
</script>

<style lang="scss" scoped>
    .download{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__button{
            position: relative;
            width: 110px;
            height: 110px;
        }
    }

    .ms-content {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 5px solid #3D9C8F;
        border-radius: 100%;
        transition: .3s;
        &:hover{
            filter: drop-shadow(0px 0px 5px #00d672);
        }
    }

    .ms-content-inside {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .ms-line-down-container {
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        bottom: 0;
        transform: rotate(0deg);
        transition: transform 0s ease;
    }
    #ms-download {
        display: none;
    }
    #ms-download:checked ~ .ms-line-down-container {
        transform: rotate(-360deg);
        transition: transform 1.5s ease 1.25s;
    }

    .ms-line-down {
        position: absolute;
        top: 10px;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 5px;
        height: 62.5px;
        background: #00d672;
        border-radius: 50px;
        transition: height .5s ease;
    }

    #ms-download:checked ~ .ms-line-down-container .ms-line-down {
        height: 5px;
        top: -10px;
        animation: ms-bounce .5s forwards .55s;
    }
    #ms-download:checked ~ .ms-line-down-container .ms-line-down:before {
        content: '';
        position: absolute;
        top: 0;
        left: -53px;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
        border: 5px solid transparent;
        border-radius: 100%;
        animation: ms-border-fill .5s forwards 3s;
    }

    .ms-line-point {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 28px;
        height: 65px;
        transition: height .15s ease .45s;
    }

    #ms-download:checked ~ .ms-line-point {
        height: 60px;
    }

    #ms-download:checked ~ .ms-line-point:before {
        transform: rotate(90deg);
        right: -7px;
        animation: ms-check-right .25s forwards 3s;
    }

    #ms-download:checked ~ .ms-line-point:after {
        transform: rotate(-90deg);
        left: -7px;
        animation: ms-check-left .25s forwards 3s;
    }

    .ms-line-point:before,
    .ms-line-point:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 37.5px;
        bottom: -10px;
        background: #00d672;
        border-radius: 50px;
        transition: transform .15s ease .47s, left .15s ease .47s, right .15s ease .47s;
    }

    .ms-line-point:before {
        right: 0px;
        transform: rotate(45deg);
    }

    .ms-line-point:after {
        left: 0px;
        transform: rotate(-45deg);
    }

    @keyframes ms-bounce {
        0% {
            top: -10px;
        }
        25% {
            top: -125px;
        }
        50% {
            top: -137.5px;
        }
        100% {
            top: -95px;
        }
    }

    @keyframes ms-check-left {
        0% {
            transform: rotate(-90deg);
            left: -10px;
            height: 75px;
        }
        100% {
            transform: rotate(-45deg);
            left: -6px;
            height: 40px;
            bottom: 0;
        }
    }

    @keyframes ms-check-right {
        0% {
            transform: rotate(90deg);
            right: -10px;
            height: 75px;
            bottom: -10px;
        }
        100% {
            transform: rotate(45deg);
            right: -5px;
            height: 60px;
            bottom: -5px;
        }
    }

    @keyframes ms-border-fill {
        0% {
            border: 5px solid transparent;
        }
        100% {
            border: 5px solid #00d672;
        }
    }
</style>