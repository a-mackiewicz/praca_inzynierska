<template>
  <div class="container-fluid bg-light text-dark border-bottom border-top border-dark">
    <div class="row">
      <div class="col-lg-2 border-right" style="background-color: #8b0000;">

      </div>
      <div class="col-lg-8 p-0 d-flex align-items-center" style='display:block'>
        <router-link :to="{name: 'patient'}" >
          <div class="d-flex align-items-center px-4 py-2 border-right">
            <div class="d-inline-block px-2">
              <img src="../assets/icons/general.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
            </div>
            <div class="d-inline-block">
              <a href="#" class="text-dark"><small>Inf. Ogólne</small></a>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'pictures'}">
          <div class="d-flex align-items-center px-4 py-2 border-right">
            <div class="d-inline-block px-2">
              <img src="../assets/icons/image.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
            </div>
            <div class="d-inline-block">
              <a href="#" class="text-dark"><small>Zdjęcia</small></a>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'visits'}">
          <div class="d-flex align-items-center px-4 py-2 border-right">
            <div class="d-inline-block px-2">
              <img src="../assets/icons/calendar.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
            </div>
            <div class="d-inline-block">
              <a href="#" class="text-dark"><small>Wizyty</small></a>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'exam'}">
          <div class="d-flex align-items-center px-4 py-2 border-right">
            <div class="d-inline-block px-2">
              <img src="../assets/icons/stethoscope.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
            </div>
            <div class="d-inline-block">
              <a href="#" class="text-dark"><small>Badanie</small></a>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'interview'}">
          <div class="d-flex align-items-center px-4 py-2 border-right">
            <div class="d-inline-block px-2">
              <img src="../assets/icons/loupe.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
            </div>
            <div class="d-inline-block">
              <a href="#" class="text-dark"><small>Wywiad</small></a>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'referral'}">
            <div class="d-flex align-items-center px-4 py-2 border-right">
              <div class="d-inline-block px-2">
                <img src="../assets/icons/document.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
              </div>
              <div class="d-inline-block">
                <a href="#" class="text-dark"><small>Skierowania</small></a>
              </div>
        </div>
        </router-link>
        <router-link :to="{name: 'message'}">
            <div class="d-flex align-items-center px-4 py-2 border-right">
              <div class="d-inline-block px-2">
                <img src="../assets/icons/message.png" class="img-fluid rounded d-block" style="width:20px; height:auto;filter: invert(0%);">
              </div>
              <div class="d-inline-block">
                <a href="#" class="text-dark"><small>Wiadomość</small></a>
              </div>
        </div>
        </router-link>
        <router-link :to="{name: 'list_patients'}">		
        <button v-on:click="$parent.setMessage(0)" type="button" id="btn_result" class="btn btn-dark line btn-sm m-0" style="padding-bottom: 2px;padding-top: 0px;position: absolute;right: 10px;top:5px"><b>x</b></button>
				</router-link>
      </div>
      <div class="col-lg-2 position-relative bottom-0 end-0 border-left" style="background-color: #8b0000;">
      </div>
    </div>
  </div>
</template>