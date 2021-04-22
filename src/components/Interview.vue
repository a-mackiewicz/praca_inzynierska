<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
    <form @submit.prevent="handleSubmitUpdateForm">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 800px;height:300px;">
                <div class="card-header bg-warning py-1" ><b>Wywiad ortodontyczny</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:273px;overflow: auto;">
                        <div style="width:755px;">
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">1. Czy pacjent ma alergie?</div>
                                    </div>
                                <input type="text" v-model="interview.allergy" class="form-control form-control-sm" style="height:25px;width:520px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">2. Czy pacjent ma problemy laryngologiczne?</div>
                                    </div>
                                <input type="text" v-model="interview.laryngology" class="form-control form-control-sm" style="height:25px;width:430px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">3. Czy pacjent ma trudności z oddychaniem przez nos?</div>
                                    </div>
                                <input type="text" v-model="interview.breath" class="form-control form-control-sm" style="height:25px;width:380px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">4. Czy pacjent chrapie?</div>
                                    </div>
                                <input type="text" v-model="interview.snore" class="form-control form-control-sm" style="height:25px;width:540px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">5. Czy pacjent choruje na padaczke?</div>
                                    </div>
                                <input type="text" v-model="interview.epilepsy" class="form-control form-control-sm" style="height:25px;width:470px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">6. Czy pacjent choruje na nadciśnienie?</div>
                                    </div>
                                <input type="text" v-model="interview.hypertension" class="form-control form-control-sm" style="height:25px;width:450px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">7. Czy pacjent choruje na cukrzyce?</div>
                                    </div>
                                <input type="text" v-model="interview.diabetes" class="form-control form-control-sm" style="height:25px;width:470px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">8. Czy pacjent ma zaburzenia krzepnięcia krwi?</div>
                                    </div>
                                <input type="text" v-model="interview.blood" class="form-control form-control-sm" style="height:25px;width:420px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">9. Czy pacjent był leczony ortodontycznie?</div>
                                    </div>
                                <input type="text" v-model="interview.ort_after" class="form-control form-control-sm" style="height:25px;width:440px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">10. Czy pacjent miał urazy zębów?</div>
                                    </div>
                                <input type="text" v-model="interview.damage" class="form-control form-control-sm" style="height:25px;width:480px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">11. Czy ktoś z rodziny miał podobną wadę zgryzu?</div>
                                    </div>
                                <input type="text" v-model="interview.malocclusion" class="form-control form-control-sm" style="height:25px;width:400px;font-size:11px">
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-dark btn-block mt-1" >Zapisz</button>
        </div>
    </form>
    </div>
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
            interview: { 
                _id: this.$route.params.id
            },
            check_db: 0,

        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/interview/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.interview = res.data;
            if(this.interview != null){
                this.check_db = 1;
            } else {
                this.check_db = 0;
                    this.interview = {
                    _id: this.$route.params.id,
                    allergy: '',
                    laryngology: '',
                    breath: '',
                    snore: '',
                    epilepsy: '',
                    hypertension: '',
                    diabetes: '',
                    blood: '',
                    ort_after: '',
                    damage: '',
                    malocclusion: ''
                  }
            }
        })
    },
    mounted(){
        this.$parent.setMessage(1)
    },
    methods: {
        handleSubmitUpdateForm() {
            if(this.check_db == 0){
                let apiURL = 'http://localhost:4000/api/create-interview';
                
                axios.post(apiURL, this.interview).then(() => {
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-interview/${this.$route.params.id}`;

                axios.post(apiURL, this.interview).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
            }
        },
    }
}
</script>

<style>
.tooth-b {
  background-image: url("../assets/icons/tooth-r.png");
  filter: saturate(50%);
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
}
</style>