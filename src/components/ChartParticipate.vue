<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 100%;
        "
      >
        <v-col cols="10" style="height: 350px">
          <div id="chart" style="max-width: 100%">
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </v-col>
        <v-col
          cols="2"
          style="
            margin-top: 50px;
            display: block;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            height: 350px;
          "
        >
          <p v-for="item in data_graph" :key="item.id" class="custom-margin">
            {{ item.result_hospital_num }}
          </p>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [],
      chartOptions: {},
      data_graph: [
        {
          c_name: "เขตสุขภาพ 1 เชียงใหม่",
          result_hospital_con: "30% ",
          result_hospital_num: "10000 รายการ",
        },

        {
          c_name: "เขตสุขภาพ 2 เชียงใหม่",
          result_hospital_con: "60% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 3 เชียงใหม่",
          result_hospital_con: "55% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 4 เชียงใหม่",
          result_hospital_con: "40% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 5 เชียงใหม่",
          result_hospital_con: "65% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 6 เชียงใหม่",
          result_hospital_con: "35% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 7 เชียงใหม่",
          result_hospital_con: "45% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 8 เชียงใหม่",
          result_hospital_con: "50% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 9 เชียงใหม่",
          result_hospital_con: "55% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 10 เชียงใหม่",
          result_hospital_con: "30% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 11 เชียงใหม่",
          result_hospital_con: "40% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 12 เชียงใหม่",
          result_hospital_con: "45% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 13 เชียงใหม่",
          result_hospital_con: "55% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 14 เชียงใหม่",
          result_hospital_con: "30% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 15 เชียงใหม่",
          result_hospital_con: "40% ",
          result_hospital_num: "10000 รายการ",
        },
        {
          c_name: "เขตสุขภาพ 16 เชียงใหม่",
          result_hospital_con: "45% ",
          result_hospital_num: "10000 รายการ",
        },
      ],
    };
  },
  mounted() {
    this.calldata();
  },
  methods: {
    calldata() {
      this.series = [
        {
          name: "Hospital ",
          data: this.data_graph.map((item) =>
            parseInt(item.result_hospital_con)
          ),
        },
      ];

      this.chartOptions = {
        chart: {
          type: "bar",
          width: "100%",
          height: "420px",
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },

        responsive: [
          {
            breakpoint: 300,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "100%",
            columnWidth: "20%",
            borderRadius: 10,
            borderRadiusApplication: "around", // 'around', 'end'
            borderRadiusWhenStacked: "all", // 'all', 'last'

            dataLabels: {
              total: {
                enabled: true,
                offsetX: -35,
                offsetY: 0,
                formatter: function (value) {
                  return value + "%";
                },
              },
            },
          },
        },
        stroke: {
          show: true,
          // curve: "straight",
          // lineCap: "butt",
          colors: ["#fff"],
          width: 3,
          dashArray: 0,
        },
        xaxis: {
          categories: this.data_graph.map((item) => item.c_name),

          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: true,

          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: true,
          position: "right",
          offsetY: 40,
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "horizontal",
            colorStops: [
              {
                offset: 0,
                color: "#7BC6A7",
              },
              {
                offset: 70,
                color: "#90F5D1",
              },
            ],
          },
        },
        grid: {
          show: false,
          position: "front",
        },
        dataLabels: {
          enabled: false,
        },
      };
    },
  },
};
</script>

<style>
.custom-margin {
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
}
.apexcharts-yaxis-label {
  font-size: 11px;
  font-weight: 600;
}
</style>
