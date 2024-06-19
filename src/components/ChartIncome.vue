<template>
  <div>
    <v-card flat style="max-height: 420px; max-width: 100%; color: #333232">
      <v-row>
        <v-col cols="12">
          <v-card-title
            style="font-weight: 700; font-size: 20px; padding-left: 50px"
          >
            รายได้สะสม : 2,000,000
          </v-card-title>
          <v-card-text
            style="
              margin-top: -15px;
              font-weight: 700;
              font-size: 14px;
              padding-left: 50px;
            "
          >
            (บาท)
          </v-card-text>
          <v-col cols="12">
            <div id="chart">
              <apexchart
                type="line"
                height="300"
                :options="chartOptions"
                :series="series"
              >
              </apexchart>
            </div>
          </v-col>
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
          c_date: "มกราคม 67",
          result_income: "1000000",
        },
        {
          c_date: "กุมภาพันธ์ 67",
          result_income: "1300000 ",
        },
        {
          c_date: "มีนาคม 67",
          result_income: "1500000 ",
        },
        {
          c_date: "เมษายน 67",
          result_income: "1700000 ",
        },

        {
          c_date: "พฤษภาคม 67",
          result_income: "2000000 ",
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
          data: this.data_graph.map((item) => parseInt(item.result_income)),
        },
      ];

      this.chartOptions = {
        chart: {
          type: "line",
          width: "95%",
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
            columnWidth: "20%",
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
                color: "#36B48A",
              },
              {
                offset: 70,
                color: "#36B48A",
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
            cssClass: "apexcharts-xaxis-label",
            colors: ["#000000"],
          },

          background: {
            enabled: false,
          },
          formatter: function (value) {
            return value.toLocaleString() + "$";
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
</style>
