<template>
  <div>
    <v-card flat style="max-height: auto; color: #333232; width: 100%">
      <v-row>
        <v-card-title style="font-weight: 700; font-size: 20px">
          Health Rider แนวโน้มการส่งยา
        </v-card-title>
        <v-card-text
          style="margin-top: -15px; font-weight: 700; font-size: 14px"
        >
          (รายการ)
        </v-card-text>
        <v-col style="padding-left: 50px">
          <div>
            <apexchart
              type="line"
              height="300"
              width="3000"
              :options="chartOptions"
              :series="series"
              style="margin-right: 20px"
              class="scollbary"
            >
            </apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card>
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
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.03.2567",
          result_hospital_num: "55000 รายการ",
        },
        {
          c_date: "01.04.2567",
          result_hospital_num: "70000 รายการ",
        },
        {
          c_date: "01.05.2567",
          result_hospital_num: "75000 รายการ",
        },
        {
          c_date: "01.06.2567",
          result_hospital_num: "80000 รายการ",
        },
        {
          c_date: "01.07.2567",
          result_hospital_num: "90000 รายการ",
        },
        {
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.03.2567",
          result_hospital_num: "55000 รายการ",
        },
        {
          c_date: "01.04.2567",
          result_hospital_num: "70000 รายการ",
        },
        {
          c_date: "01.05.2567",
          result_hospital_num: "75000 รายการ",
        },
        {
          c_date: "01.06.2567",
          result_hospital_num: "80000 รายการ",
        },
        {
          c_date: "01.07.2567",
          result_hospital_num: "90000 รายการ",
        },
        {
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.03.2567",
          result_hospital_num: "55000 รายการ",
        },
        {
          c_date: "01.04.2567",
          result_hospital_num: "70000 รายการ",
        },
        {
          c_date: "01.05.2567",
          result_hospital_num: "75000 รายการ",
        },
        {
          c_date: "01.06.2567",
          result_hospital_num: "80000 รายการ",
        },
        {
          c_date: "01.07.2567",
          result_hospital_num: "90000 รายการ",
        },
        {
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.03.2567",
          result_hospital_num: "55000 รายการ",
        },
        {
          c_date: "01.04.2567",
          result_hospital_num: "70000 รายการ",
        },
        {
          c_date: "01.05.2567",
          result_hospital_num: "75000 รายการ",
        },
        {
          c_date: "01.06.2567",
          result_hospital_num: "80000 รายการ",
        },
        {
          c_date: "01.07.2567",
          result_hospital_num: "90000 รายการ",
        },
        {
          c_date: "01.02.2567",
          result_hospital_num: "50000 รายการ",
        },
        {
          c_date: "01.03.2567",
          result_hospital_num: "55000 รายการ",
        },
        {
          c_date: "01.04.2567",
          result_hospital_num: "70000 รายการ",
        },
        {
          c_date: "01.05.2567",
          result_hospital_num: "75000 รายการ",
        },
        {
          c_date: "01.06.2567",
          result_hospital_num: "80000 รายการ",
        },
        {
          c_date: "01.07.2567",
          result_hospital_num: "90000 รายการ",
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
          name: "Hospital",
          data: this.data_graph.map((item) =>
            parseInt(item.result_hospital_num)
          ),
        },
      ];

      this.chartOptions = {
        chart: {
          type: "line",

          stacked: false,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 300,
            options: {
              legend: {
                position: "top",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            barHeight: "100%",
            columnWidth: "100%",
            dataLabels: {
              total: {
                enabled: false,
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          width: 4,
        },
        tooltip: {
          enabled: true,
        },
        markers: {
          size: 5,
          colors: "white",
          strokeColors: "#7CC4E9",
          strokeWidth: 2,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
        xaxis: {
          cssClass: "scollbary",
          offsetX: 10,
          offsetY: 0,
          categories: this.data_graph.map((item) => item.c_date),
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },

          labels: {
            show: true,
            style: {
              fontSize: "11px", // Adjust font size for better fit
              fontWeight: 700,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: "transParent",
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "horizontal",
            colorStops: [
              {
                offset: 0,
                color: "#7CC4E9",
              },
              {
                offset: 70,
                color: "#7CC4E9",
              },
            ],
          },
        },
        grid: {
          show: false,
          position: "center",
        },
        dataLabels: {
          enabled: true,
          offsetX: 2,
          offsetY: -10,
          style: {
            fontSize: "11px",
            fontWeight: 700,
            cssClass: "apexcharts-datalabel",
            colors: ["#000000"],
          },

          background: {
            enabled: false,
          },
          formatter: function (value) {
            return "TRS:" + value.toLocaleString();
          },
        },
      };
    },
  },
};
</script>

<style>
.apexcharts-xaxis-label,
.apexcharts-yaxis-label {
  font-family: Arial, sans-serif;
  color: rgb(0, 0, 0);
}
.apexcharts-datalabel {
  transform: rotate(0deg);
  transform-origin: center center;
}
.color {
  color: #ffffff;
}
.scollbary {
  overflow-y: hidden;
}
.scollbary::-webkit-scrollbar {
  height: 5px;
}

.scollbary::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.scollbary::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.scollbary::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scollbary::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
