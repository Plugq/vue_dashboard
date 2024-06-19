<template>
  <main class="main-container">
    <div>
      <router-view />
      <v-col>
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="5">
                <ConnectField></ConnectField>
              </v-col>
              <v-col cols="7">
                <Hospital></Hospital>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="7">
                <HospiPaticipate />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" style="margin-bottom: 10px">
            <v-row>
              <v-col cols="12">
                <TrendHospital />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="2">
                <RealStatus />
              </v-col>
              <v-col cols="6">
                <TableHealthID />
              </v-col>
              <v-col cols="4">
                <ChartIncome />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="3">
                <Chartcircle />
              </v-col>
              <v-col cols="3">
                <DailyReport />
              </v-col>
              <v-col cols="6">
                <ChartDaily />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <StaticHealth />
              </v-col>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col cols="12" style="margin-top: -10px; margin-bottom: -20px">
            <v-row>
              <v-col>
                <MainTableSelect />
              </v-col>
              <!-- <v-col>
                <TableSelect />
              </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </main>
</template>

<script>
import ConnectField from "./components/ConnectField.vue";
import Hospital from "./components/Hospital.vue";
import HospiPaticipate from "./components/HospiPaticipate.vue";
import TrendHospital from "./components/TrendHospital.vue";
import RealStatus from "./components/RealStatus.vue";
import TableHealthID from "./components/TableHealthID.vue";
import ChartIncome from "./components/ChartIncome.vue";
import Chartcircle from "./components/Chartcircle.vue";
import DailyReport from "./components/DailyReport.vue";
import ChartDaily from "./components/ChartDaily.vue";
import StaticHealth from "./components/StaticHealth.vue";
import MainTableSelect from "./components/MainTableSelect.vue";

// import TableSelect from "./components/MainTableSelect.vue";

export default {
  name: "App",

  components: {
    ConnectField,
    Hospital,
    HospiPaticipate,
    TrendHospital,
    RealStatus,
    TableHealthID,
    ChartIncome,
    Chartcircle,
    DailyReport,
    ChartDaily,
    StaticHealth,
    MainTableSelect,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.main-container {
  background-color: #f6f8fe;
  /* display: flex;
  flex-direction: column; */
}
</style>
