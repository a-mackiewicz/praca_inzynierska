<template>
  <div class="container-fluid bg-light text-dark border-bottom border-top border-dark">
    <div class="row">
      <div class="col-lg-2 border-right" style="background-color: red">

      </div>
      <div class="col-lg-8 p-0" style='display:block'>
        <div class="border-right d-inline-block px-3">
          <router-link :to="{name: 'add_patient'}" >
            <figure class="figure my-2">
              <img src="../assets/icons/general.png" class="figure-img img-fluid rounded mx-auto d-block" style="width:30px; height:auto;filter: invert(0%);">
              <figcaption class="figure-caption">Dodaj Pacjenta</figcaption>
            </figure>
          </router-link>
        </div>
      </div>
      <div class="col-lg-2 position-relative bottom-0 end-0 border-left" style="background-color: #f3f3f3;">
      </div>
    </div>
  </div>
</template>
