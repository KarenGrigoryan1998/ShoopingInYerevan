<template>
  <v-card class="secondBaseColor service-info rounded-0">
    <v-container class="white--text">
      <v-row no-gutters>
        <v-col class="col-12 col-md-4 col-sm-12">
          <v-row>
            <v-col class="col-12 col-sm-3 service-icon" align="right">
              <v-icon class="display-2">mdi-airplane</v-icon>
            </v-col>
            <v-col class="col-12 col-sm-9 service-description">
              <h5 class="font-weight-light">Առաքում ՀՀ ~10-15 աշխ․օր</h5>
              <p class="caption font-weight-thin">
                Էքսպրես առաքում Չինաստանից, Մեծ Բրիտանիայից և ԱՄՆ-ից
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-4 col-sm-12">
          <v-row>
            <v-col class="col-12 col-sm-3 pr-4 service-icon" align="right">
              <v-icon class="display-2">mdi-cash-usd</v-icon>
            </v-col>
            <v-col class="col-12 col-sm-9 service-description">
              <h5 class="font-weight-light">Գումարի երաշխիք</h5>
              <p class="caption font-weight-thin">
                100% գումարի վերադարձ չեղարկված / չժանամանած պատվերների համար
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-4 col-sm-12">
          <v-row>
            <v-col class="col-12 col-sm-3 service-icon" align="right">
              <v-icon class="display-2">mdi-truck</v-icon>
            </v-col>
            <v-col class="col-12 col-sm-9 service-description">
              <h5 class="font-weight-light">Առաքում ՀՀ ողջ տարածքում</h5>
              <p class="caption font-weight-thin">
                Արագ առաքում Երևանում, դեպի մարզեր և Արցախ
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ServiceInfoContent"
};
</script>

<style lang="scss" scoped>
@media all and (max-width: 600px) {
  .service-info {
    text-align: center !important;
    .service-icon {
      text-align: center !important;
    }
    .service-description,
    .service-icon {
      padding: 0 !important;
    }
  }
}
</style>
