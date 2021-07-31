<template>
  <v-container>
    <v-row>
      <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
    </v-row>
    <v-row class="faq-content">
      <p class="display-1 font-weight-light text-center pt-2 page-titles">
        Հաճախ տրվող հարցեր
      </p>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, index) in faqData" :key="index">
          <v-expansion-panel-header>{{
            item.question
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      breadcrums: [
        {
          text: "Գլխավոր",
          disabled: false,
          href: "/"
        },
        {
          text: "Հաճախ տրվող հարցեր",
          disabled: true
        }
      ],
      faqData: [
        {
          question: "Ինչպես պատվիրել",
          answer:
            "Գրանցվեք կայքում, կայքից ընտրեք ապրանքի գույնը, չափսը և ավելացրեք զաբյուղում, այնուհետ ընտրեք ՀՀ-ում առաքման տարբերակը և սեղմեք պատվիրել: Մուտք գործեք Ձեր հաշիվ, կամ գրանցվեք կայքում, ստուգեք մուտքագրված տվյալները և  ևս մեկ անգամ և սեղմեք պատվիրել: Կատարեք վճարումը և ուղարկեք անդորագիրր մեզ պատվերի ընթացքը սկսելու համար:\n" +
            "Սոց կայքերի միջոցով՝ գրեք մեր ֆեյսբուքյան, կամ ինստագրամյան էջին և մենք գրանցումը կկատարենք Ձեր փոխարեն:"
        },
        {
          question: "Հնարավո”ր է արդյոք պատվիրված ապրանքը վերադարձնել/փոխել",
          answer:
            "Քանի որ մենք աշխատում ենք միայն օնլայն և չունենք խանութ սրահ, հետեւաբար վերադարձնելու կամ այլ ապրանքով փոխանակելու տարբերակ չունենք։"
        },
        {
          question: "Ինչպես վճարել",
          answer:
            "Պատվերի վճարումը կատարվում է ցանկացած վճարային տերմինալով (Telcell, Easypay, Idram) հետևյալ իդրամ հաշվին՝\n" +
            "529157387: Պատվերը հաստատվում է  միայն Ձեր փոխանցումը հաստատելուց հետո:"
        },
        {
          question: "Օգնություն Shopping In Yerevan-ի կողմից",
          answer:
            "Չկարողանալով պատվեր գրանցել մեր էջում, գրեք մեզ անձնական նամակով և մենք դա կանենք Ձեր փոխարեն։"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.faq-content {
  .v-expansion-panels {
    .v-expansion-panel-header--active {
      background-color: #e65540 !important;
      color: white !important;
    }
    .v-expansion-panel-content {
      padding-top: 15px;
      color: rgba(0, 0, 0, 0.87) !important;
    }
  }
}
</style>
