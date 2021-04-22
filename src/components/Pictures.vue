<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
        <div class="col px-1 pt-1 pb-1">
            <div class="border row" style="width: 803px;height:300px;overflow: auto;">
                    <div class="card text-dark mx-1 mt-1 mb-0" v-for="tempPictures in activePatients" :key="tempPictures._id" style="width: 188px;">
                        <img class="card-img-top" :src="tempPictures.files[0]" alt="Card image cap">
                        <div class="card-body py-1">
                            <h5 class="card-title mb-1">{{ tempPictures.head }}</h5>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <router-link :to="{name: 'picture', params: { id: tempPictures._id }}" class="btn btn-sm btn-dark">Pokaż</router-link>
                                <button v-if="tempPictures.files[0] != patient.picture" @click.prevent="defaultPicture(tempPictures.files[0])" class="btn btn-sm btn-warning">Główne</button>
                                <button @click.prevent="deletePicture(tempPictures)" class="btn btn-sm btn-danger"><b>X</b></button>
                            </div>
                        </div>
                    </div>
            </div>
        <form @submit.prevent="handleSubmit">
            
            <button class="btn btn-dark" >Dodaj</button>
            <div class="btn-group" role="group" aria-label="Basic example">
                <input type="text" v-model="head" class="form-control mx-2  mt-1" style="width:370px;">
                <input type="file" class="btn" @change="uploadFile" multiple>
            </div>
        </form>
        </div>
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
            pictures: [],
            files: null,
            head: ''
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/pictures/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.pictures = res.data;

            apiURL = `http://localhost:4000/api/patient/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                this.patient = res.data;
            })
        })
    },
    computed: {
        activePatients: function() {
        return this.pictures.filter(i => i.state !== '')
        }
    },
    mounted(){
        this.$parent.setMessage(1)
    },
    methods: {
        uploadFile (event) {
        this.files = event.target.files
        },
        handleSubmit() {
          const formData = new FormData();
          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }
          console.log(formData);
          formData.append('patientId', this.$route.params.id);
          formData.append('head_text', this.head);
          axios.post('http://localhost:4000/api/file-upload', formData, {
          }).then((res) => {
                window.location.reload();
                console.log(res)
          })
        },
        deletePicture(temp){
            let apiURL = `http://localhost:4000/api/delete-picture/${temp._id}`;

            if (window.confirm("Chcesz usunąć zdjęcie?")) {
                axios.delete(apiURL).then(() => {
                    console.log(temp.files[0])
                    console.log(this.patient.picture)
                    if(temp.files[0] == this.patient.picture) {
                        this.patient.picture = ""
                        
                        let apiURL = `http://localhost:4000/api/update-patient/${this.patient._id}`;

                        axios.post(apiURL, this.patient).then((res) => {
                            console.log(res)
                        }).catch(error => {
                            console.log(error)
                        });
                    }
                window.location.reload();
                }).catch(error => {
                    console.log(error)
                });
            }
            
        },
        defaultPicture(tempId) {
            this.patient.picture = tempId;
            let apiURL = `http://localhost:4000/api/update-patient/${this.$route.params.id}`;

            axios.post(apiURL, this.patient).then((res) => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
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