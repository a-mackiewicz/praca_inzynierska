<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
    <form @submit.prevent="handleUpdateForm">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 800px;height:300px;">
                <div class="card-header bg-warning py-1" ><b>Wiadomość w panelu pacjenta</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:273px;overflow: auto;">
                        <div style="width:775px;">
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-0">
                                    <textarea id="ContentRef" v-model="patient.message" class="form-control form-control-sm" style="font-size:11px;resize: none;" rows="15"></textarea>
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
            patient: [],
            check_db: 0,

        }
    },
    created() {
            let apiURL = `http://localhost:4000/api/patient/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                this.patient = res.data;
            })
    },
    mounted(){
        this.$parent.setMessage(1)
    },
    methods: {
        handleUpdateForm(){
        let apiURL = `http://localhost:4000/api/update-patient/${this.patient._id}`;

        axios.post(apiURL, this.patient).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
        }
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