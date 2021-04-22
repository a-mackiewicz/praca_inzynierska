<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto" style="width: 753px;">
    <div class="row">
        <div class="col px-1 pt-1 pb-1">
            <div class="row p-1" style="width: 653px;height: calc(100vh - 61px);overflow: hidden;">
                
                <form @submit.prevent="handleUpdateForm"  class="form-inline">
                    <input type="text" class="form-control form-control-sm mr-1" v-model="picture.head" style="width:420px">
                    <button class="btn btn-dark btn-sm d-inline" style="width:149px">Zapisz</button>
                    <input type="sumbmit" @click="$router.go(-1)" class="btn btn-dark btn-sm d-inline ml-1" style="width:40px;" value="X">
                </form>
                <div id="drawing" @mousedown="mouseDown = 1 + $event.button;transfromFunc($event.pageX, $event.pageY)" @mousemove="transfromFunc($event.pageX, $event.pageY)" style="width: 653px;height: calc(100vh - 121px);overflow: auto;"></div>
            </div>
        </div>
        
        <div class="col px-1 pt-1 pb-1">
        <div style="margin-top: 60px;width: 103px;height: calc(100vh - 61px);overflow: hidden;">
        <h6>Wielkość</h6>
        <input type="range" @input="sizeFunc($event.target.value)" class="form-control-range" style="margin-top: 130px;margin-bottom: 130px;margin-left: -100px;width:250px;transform: rotate(270deg);-moz-transform: rotate(270deg);">
        <h6>Obracanie</h6>
        <input type="range" @input="rotateFunc($event.target.value)" class="form-control-range" style="margin-top: 130px;margin-left: -100px;width:250px;transform: rotate(270deg);-moz-transform: rotate(270deg);">
        </div>
        </div>
    </div>
</div>
<div class="col-sm border-left" style="margin-left: 15px; background-color: #f3f3f3;">

</div>
</div>
</template>

<script>
import axios from "axios";
import { SVG } from '@svgdotjs/svg.js'
axios.defaults.withCredentials = true;

export default {
    data() {
        return {
            picture: [],
            files: null,
            head: '',
            draw: null,
            image: null,
            imgSize: 50,
            imgRotate: 50,
            mouseDown: 0,
            startPos: 0,
            tempX: 0,
            tempY: 0,
            tempTransX: 0,
            tempTransY: 0,
            transX: 0,
            transY: 0,
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/picture/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.picture = res.data;
            console.log(res.data)

            this.svgFunc();

        })
    },
    mounted() {
        
        window.addEventListener('mouseup', this.stopDrag);
    },
    methods: {
        stopDrag() {
            this.mouseDown = 0;
            this.startPos = 0;
        },
        svgFunc(){
            this.draw = SVG().addTo('#drawing').size(603, 603)

            this.image = this.draw.image(this.picture.files[0])
            this.image.size(650, 650).move(0, 0)
            //this.image.transform({
  //rotate: 125,
  //translateX: 50,
  //translateY: 100,
  //scale: 3 
//})
        },
        sizeFunc(tempValue){
            this.imgSize = tempValue;
            this.image.transform({
                translateX: this.tempTransX,
                translateY: this.tempTransY,
                rotate: (this.imgRotate * 3.6) - 180,
                scale: 0.5 + (tempValue/100)
            })
        },
        rotateFunc(tempValue){
            this.imgRotate = tempValue;
            this.image.transform({
                translateX: this.tempTransX,
                translateY: this.tempTransY,
                
                scale: 0.5 + (this.imgSize/100),
                rotate: (tempValue * 3.6) - 180
            })
        },
        transfromFunc(x, y){
            
            if(this.mouseDown == 1){
                console.log(this.startPos)
                if(this.startPos == 0) {
                    this.tempX = x;
                    this.tempY = y;
                    this.startPos = 1;
                    this.transX = this.tempTransX;
                    this.transY = this.tempTransY;

                }
                this.tempTransX = this.transX +  (x - this.tempX);
                this.tempTransY = this.transY + (y - this.tempY);
                this.image.transform({
                    translateX: this.tempTransX,
                    translateY: this.tempTransY,
                    
                    scale: 0.5 + (this.imgSize/100),
                    rotate: (this.imgRotate * 3.6) - 180
                })
            }
        },
    }
}
</script>