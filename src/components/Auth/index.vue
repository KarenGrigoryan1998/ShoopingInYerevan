<template>
  <v-dialog
    v-model="isModalOpen"
    max-width="550px"
    min-width="360px"
    class="auth-form"
    @sign-in-button-clicked="isModalOpen = true"
  >
    <div>
      <v-tabs
        v-model="tab"
        show-arrows
        background-color="secondBaseColor accent-4"
        icons-and-text
        dark
        grow
      >
        <v-tabs-slider color="thirdBaseColor"></v-tabs-slider>
        <v-tab v-for="(i, index) in tabs" :key="index">
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form ref="loginForm" v-model="loginValid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginData.loginEmail"
                      :rules="emailRules"
                      label="Էլ․հասցե"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginData.loginPassword"
                      :rules="[rules.required, rules.min]"
                      type="password"
                      label="Գաղտնաբառ"
                      hint="Առնվազն 8 նիշ*"
                      counter
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex mx-auto" cols="12" sm="3" xsm="12">
                    <v-btn
                      block
                      :disabled="!loginValid"
                      color="thirdBaseColor white--text"
                      @click="onLogin"
                    >
                      ՄՈՒՏՔ
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form
                ref="registerForm"
                v-model="registerValid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="registerData.firstName"
                      :rules="[rules.required]"
                      label="Անուն"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="registerData.lastName"
                      :rules="[rules.required]"
                      label="Ազգանուն"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="registerData.email"
                      :rules="emailRules"
                      label="Էլ.հասցե"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <VuePhoneNumberInput
                      ref="phoneNumber"
                      error-color="#e65540"
                      :error="phoneHasError"
                      v-model="registerData.phone"
                      default-country-code="AM"
                      @input="phoneValidateChange"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="registerData.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      label="Գաղտնաբառ"
                      hint="Առնվազն 8 նիշ*"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      block
                      v-model="registerData.verify"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, passwordMatch]"
                      :type="show1 ? 'text' : 'password'"
                      label="Կրկնել գաղտնաբառը"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex mx-auto" cols="12" sm="3" xsm="12">
                    <v-btn
                      block
                      :disabled="!registerValid"
                      color="thirdBaseColor white--text"
                      @click="onRegister"
                      >Գրանցվել
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { router } from "../../router/routes";
import EventBus from "@/eventBus";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
  name: "Login",
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      isModalOpen: false,
      tabs: [
        { name: "ՄՈՒՏՔ", icon: "mdi-account" },
        { name: "ԳՐԱՆՑՎԵԼ", icon: "mdi-account-outline" }
      ],
      tab: 0,
      loginValid: true,
      registerValid: true,
      loginData: {
        loginPassword: "",
        loginEmail: ""
      },
      registerData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        verify: ""
      },
      phoneHasError: false,
      emailRules: [
        v => !!v || "Պարտադիր դաշտ*",
        v => /.+@.+\..+/.test(v) || "Սխալ էլ.հասցեի ձևաչափ"
      ],
      show1: false,
      rules: {
        required: value => !!value || "Պարտադիր դաշտ*",
        min: v => (v && v.length >= 8) || "Առնվազն 8 նիշ*"
      }
    };
  },
  created() {
    EventBus.$on("sign-in-button-clicked", () => {
      this.isModalOpen = true;
    });
  },
  computed: {
    ...mapGetters("auth", ["authLoginStatus"]),
    passwordMatch() {
      return () =>
        this.registerData.password === this.registerData.verify ||
        "Սխալ գաղտնաբառի կրկնություն";
    }
  },
  methods: {
    ...mapActions("auth", ["userLogin", "userRegister"]),
    onLogin() {
      if (this.$refs["loginForm"].validate()) {
        this.userLogin(this.loginData);
      }
    },
    onRegister() {
      // eslint-disable-next-line prettier/prettier
      if (!this.$refs["registerForm"].validate() &&  (this.registerData.phone === "" || !this.$refs["phoneNumber"].isValid)) {
        this.phoneHasError = true;
      } else {
        this.userRegister(this.registerData);
      }
    },
    phoneValidateChange() {
      // eslint-disable-next-line prettier/prettier
      this.phoneHasError = this.registerData.phone === "" || !this.$refs["phoneNumber"].isValid ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
