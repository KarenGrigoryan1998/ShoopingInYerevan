<template>
  <v-container class="cart">
    <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
    <p class="font-weight-light pt-2 page-titles">Զամբյուղ</p>
    <v-row>
      <v-col :cols="12" md="9" sm="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th>Պատվիրվող ապրանքը</th>
                <th>Հատի արժեքը <span class="caption">(դրամ)</span></th>
                <th>Քանակ</th>
                <th>Արժեքը <span class="caption">(դրամ)</span></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in userCart" :key="product.id">
                <td>
                  <v-list-item-avatar width="70" height="70">
                    <v-img
                      :src="
                        require('../../assets/images/homeSlides/' +
                          product.imgSrc)
                      "
                    ></v-img>
                  </v-list-item-avatar>
                </td>
                <td>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>{{ product.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        product.description
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </td>
                <td>{{ product.price }}</td>
                <td>
                  <v-text-field
                    class="pt-5"
                    outlined
                    style="width:60px"
                    :value="product.quantity"
                    :min="1"
                    dense
                    color="secondBaseColor"
                    type="number"
                  ></v-text-field>
                </td>
                <td>{{ product.quantity * product.price }}</td>
                <td
                  class="red--text delete-product"
                  @click="deleteCartItem(product.id)"
                >
                  X
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
        <p class="text-h6 text-center thirdBaseColor--text">
          Պատվերի ամփոփում
        </p>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Ընդամենը</td>
                <td class="text-right" style="width: 50px;">
                  <b>{{ shoppingCartPayForTotal }}AMD</b>
                </td>
              </tr>
              <tr>
                <td>Վճարման ենթակա գումարը</td>
                <td class="text-right" style="width: 50px;">
                  <b>{{ shoppingCartPayForTotal }}AMD</b>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center">
          <v-btn class="white--text mt-5" color="secondBaseColor">
            Պատվիրել
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      breadcrums: [
        {
          text: "Գլխավոր",
          disabled: false,
          href: "/"
        },
        {
          text: "Տեսականի",
          disabled: false,
          href: "/products"
        },
        {
          text: "Զամբյուղ",
          disabled: true
        }
      ]
    };
  },
  computed: {
    ...mapState("cart", ["userCart"]),
    ...mapGetters("cart", ["shoppingCartPayForTotal", "productRowTotalPrice"])
  },
  methods: {
    ...mapActions("cart", ["deleteCartItemById"]),
    deleteCartItem(id) {
      this.$fire({
        text: "Վստահ եք որ ուզում եք ջնջել ապրանքը?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Այո",
        cancelButtonText: "Ոչ"
      }).then(res => {
        if (res.value) {
          this.deleteCartItemById(id)
            .then(() => {
              this.$alert(
                "Ապրանքը հաջողությամբ ջնջվեց զամբյուղից",
                " ",
                "success"
              );
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  table {
    tr {
      th,
      td {
        text-align: center !important;
      }
      .delete-product {
        font-size: 22px !important;
        cursor: pointer;
        &:hover {
          text-shadow: 1px 1px 3px red;
        }
      }
      .v-input--is-label-active {
        fieldset {
          border: 1px solid #2d3753 !important;
        }
      }
    }
  }
}
</style>
