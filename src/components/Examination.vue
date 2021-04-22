<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <form @submit.prevent="handleSubmitUpdateForm">
    <div class="row">
        <div class="col-6 px-1 pt-1 pb-1">
            <div class="row">
            <div class="col-12">
            <div class="card text-dark" style="width: 400px;height:160px;">
                <div class="card-header bg-warning py-1" ><b>Stan uzębienia</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white px-3 py-2"  onselectstart="return false;">
                        <div class="border-left border-top p-1" style="display:inline-block;border-style: solid;border-width:3px">
                        <div class="tooth-t" id="divTooth0" @click="handleTeeth(0)">8</div>
                        <div class="tooth-t" id="divTooth1" @click="handleTeeth(1)">7</div>
                        <div class="tooth-t" id="divTooth2" @click="handleTeeth(2)">6</div>
                        <div class="tooth-t" id="divTooth3" @click="handleTeeth(3)">5</div>
                        <div class="tooth-t" id="divTooth4" @click="handleTeeth(4)">4</div>
                        <div class="tooth-t" id="divTooth5" @click="handleTeeth(5)">3</div>
                        <div class="tooth-t" id="divTooth6" @click="handleTeeth(6)">2</div>
                        <div class="tooth-t" id="divTooth7" @click="handleTeeth(7)">1</div>
                        </div>
                        <div class="border-right border-top p-1" style="display: inline-block;border-style: solid;border-width:3px">
                        <div class="tooth-t" id="divTooth8" @click="handleTeeth(8)">1</div>
                        <div class="tooth-t" id="divTooth9" @click="handleTeeth(9)">2</div>
                        <div class="tooth-t" id="divTooth10" @click="handleTeeth(10)">3</div>
                        <div class="tooth-t" id="divTooth11" @click="handleTeeth(11)">4</div>
                        <div class="tooth-t" id="divTooth12" @click="handleTeeth(12)">5</div>
                        <div class="tooth-t" id="divTooth13" @click="handleTeeth(13)">6</div>
                        <div class="tooth-t" id="divTooth14" @click="handleTeeth(14)">7</div>
                        <div class="tooth-t" id="divTooth15" @click="handleTeeth(15)">8</div>
                        </div>
                        <div class="border-left border-bottom p-1" style="display:inline-block;border-style: solid;border-width:3px">
                        <div class="tooth-b" id="divTooth16" @click="handleTeeth(16)">8</div>
                        <div class="tooth-b" id="divTooth17" @click="handleTeeth(17)">7</div>
                        <div class="tooth-b" id="divTooth18" @click="handleTeeth(18)">6</div>
                        <div class="tooth-b" id="divTooth19" @click="handleTeeth(19)">5</div>
                        <div class="tooth-b" id="divTooth20" @click="handleTeeth(20)">4</div>
                        <div class="tooth-b" id="divTooth21" @click="handleTeeth(21)">3</div>
                        <div class="tooth-b" id="divTooth22" @click="handleTeeth(22)">2</div>
                        <div class="tooth-b" id="divTooth23" @click="handleTeeth(23)">1</div>
                        </div>
                        <div class="border-right border-bottom p-1" style="display: inline-block;border-style: solid;border-width:3px">
                        <div class="tooth-b" id="divTooth24" @click="handleTeeth(24)">1</div>
                        <div class="tooth-b" id="divTooth25" @click="handleTeeth(25)">2</div>
                        <div class="tooth-b" id="divTooth26" @click="handleTeeth(26)">3</div>
                        <div class="tooth-b" id="divTooth27" @click="handleTeeth(27)">4</div>
                        <div class="tooth-b" id="divTooth28" @click="handleTeeth(28)">5</div>
                        <div class="tooth-b" id="divTooth29" @click="handleTeeth(29)">6</div>
                        <div class="tooth-b" id="divTooth30" @click="handleTeeth(30)">7</div>
                        <div class="tooth-b" id="divTooth31" @click="handleTeeth(31)">8</div>
                        </div>
                    </div>
                    <div class="card-body pt-1">
                        <div style="background-color: #8a0000;width:10px;height:10px;display:inline-block;border-style: solid;border-width:1px"></div><p style="display:inline-block;"> - Usunięty</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-12 pt-1">
            <div class="card text-dark" style="width: 400px;height:180px;">
                <div class="card-header bg-warning py-1" ><b>Inne</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2">
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">Oddychanie</div>
                                    </div>
                                <select class="form-control form-control-sm p-0" v-model="examination.breath" style="height:25px;font-size:11px">
                                    <option hidden></option>
                                    <option value="Nos">przez Nos</option>
                                    <option value="usta">przez Usta</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">Bóle stawów</div>
                                    </div>
                                <select class="form-control form-control-sm p-0" v-model="examination.joints" style="height:25px;font-size:11px">
                                    <option hidden></option>
                                    <option>Nie</option>
                                    <option>Lewy</option>
                                    <option>Prawy</option>
                                    <option>Oba</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">Wędzidełko</div>
                                    </div>
                                <select class="form-control form-control-sm p-0" v-model="examination.bridle" style="height:25px;font-size:11px">
                                    <option hidden></option>
                                    <option>Prawidłowe</option>
                                    <option>Nieprawidłowe</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Nawyki:</label>
                            <div class="col-sm-9 pt-1">
                                <div class="form-check form-check-inline mr-5">
                                    <input class="custom-control-input" v-model="examination.suction" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="custom-control-label pt-1" for="inlineCheckbox1">Ssanie</label>
                                </div>
                                <div class="form-check form-check-inline mr-5">
                                    <input class="custom-control-input" v-model="examination.clenching" type="checkbox" id="inlineCheckbox2" value="option2">
                                    <label class="custom-control-label pt-1" for="inlineCheckbox2">Zaciskanie zębów</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="custom-control-input" v-model="examination.grinding" type="checkbox" id="inlineCheckbox3" value="option3">
                                    <label class="custom-control-label pt-1" for="inlineCheckbox3">Zgrzytanie</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
        </div>
        <div class="col-6 px-1 pt-1 pb-0">
            <div class="card text-dark" style="width: 400px;height:300px;">
                <div class="card-header bg-warning py-1" ><b>Wady zgryzu</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2">
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Szparowatość</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.spariness" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="height:25px;font-size:11px">Stłoczenie</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.crowding" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="height:25px;font-size:11px">Diastema</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.diastema" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Zgryz Otwarty</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.open" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Zgryz Głęboki</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.deep" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Klasa Zębowa</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.class" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Klasa 1</option>
                                        <option>Klasa 2</option>
                                        <option>Klasa 3</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="height:25px;font-size:11px">Zgryz Krzyżowy Przedni</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.crossFront" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Zgryz Krzyżowy Boczny</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" v-model="examination.crossLateral" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option>Nie</option>
                                        <option>Tak</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-dark btn-block mt-1">Zapisz</button>
        </div>
    </div>
    </form>
</div>
<div class="col-sm border-left" style="margin-left: 15px; background-color: #f3f3f3;">

</div>
</div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
    data() {
        return {
            examination: { 
                _id: this.$route.params.id
            },
            check_db: 0,

        }
    },
    mounted(){
        this.$parent.setMessage(1)
    },
    created() {
        let apiURL = `http://localhost:4000/api/examination/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.examination = res.data;
            if(this.examination != null){
                this.check_db = 1;
                for(var i=0;i<this.examination.teeth.length;i++){
                    if(this.examination.teeth[i] == true){
                        if(document.getElementById('divTooth' + i).classList.contains('tooth-b')){
                            document.getElementById('divTooth' + i).classList.remove('tooth-b');
                            document.getElementById('divTooth' + i).classList.add('tooth-br');
                        }
                        if(document.getElementById('divTooth' + i).classList.contains('tooth-t')){
                            document.getElementById('divTooth' + i).classList.remove('tooth-t');
                            document.getElementById('divTooth' + i).classList.add('tooth-tr');
                        }
                    }
                }
            } else {
                this.check_db = 0;
                this.examination = {
                _id: this.$route.params.id,
                teeth: [
                    false, false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false, false,
                    ],
                breath: '',
                joints: '',
                bridle: '',
                suction: false,
                clenching: false,
                grinding: false,
                spariness: '',
                crowding: '',
                diastema: '',
                open: '',
                deep: '',
                class: '',
                crossFront: '',
                crossLateral: '',
                }
            }
        })
    },
    methods: {
        handleSubmitUpdateForm() {
            if(this.check_db == 0){
                let apiURL = 'http://localhost:4000/api/create-examination';
                
                axios.post(apiURL, this.examination).then(() => {
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-examination/${this.$route.params.id}`;

                axios.post(apiURL, this.examination).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        handleTeeth: function(temp){
            if(document.getElementById('divTooth' + temp).classList.contains('tooth-b')) {
                this.examination.teeth[temp] = true;
                document.getElementById('divTooth' + temp).classList.remove('tooth-b');
                document.getElementById('divTooth' + temp).classList.add('tooth-br');
            } else if(document.getElementById('divTooth' + temp).classList.contains('tooth-br')) {
                this.examination.teeth[temp] = false;
                document.getElementById('divTooth' + temp).classList.remove('tooth-br');
                document.getElementById('divTooth' + temp).classList.add('tooth-b');
            } else if(document.getElementById('divTooth' + temp).classList.contains('tooth-t')) {
                this.examination.teeth[temp] = true;
                document.getElementById('divTooth' + temp).classList.remove('tooth-t');
                document.getElementById('divTooth' + temp).classList.add('tooth-tr');
            } else {
                this.examination.teeth[temp] = false;
                document.getElementById('divTooth' + temp).classList.remove('tooth-tr');
                document.getElementById('divTooth' + temp).classList.add('tooth-t');
            }
        },
    }
}
</script>

<style>
.tooth-b {
  background-image: url("../assets/icons/tooth.png");
  width: 21px;
  height: 30px;
  padding-top: 0px;
  padding-left: 5px;
  font-size: 14px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  cursor: context-menu;
}
.tooth-br {
  background-image: url("../assets/icons/tooth-r.png");
  width: 21px;
  height: 30px;
  padding-top: 0px;
  padding-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  cursor: context-menu;
}
.tooth-t {
  background-image: url("../assets/icons/tooth2.png");
  width: 21px;
  height: 30px;
  padding-top: 9px;
  padding-left: 5px;
  font-size: 14px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  cursor: context-menu;
}
.tooth-tr {
  background-image: url("../assets/icons/tooth2-r.png");
  width: 21px;
  height: 30px;
  padding-top: 9px;
  padding-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  cursor: context-menu;
}
</style>