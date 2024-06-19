<template>
  <div>
    <v-card flat style="max-height: auto; color: #333232">
      <v-row>
        <v-col
          cols="12"
          style="
            display: flex;
            justify-content: space-between;
            align-content: center;
          "
        >
          <v-col cols="5">
            <span style="font-weight: 700; font-size: 20px; margin-left: 30px">
              จำนวนการส่งยาประจำวัน </span
            ><br />
            <span
              style="
                margin-top: -15px;
                font-weight: 700;
                font-size: 14px;
                margin-left: 30px;
              "
            >
              Daliy Report
            </span>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="5">
            <span style="padding: 0px 10px 0px 10px; font-size: 12px"
              >Min: xx</span
            >
            <span style="padding: 0px 10px 0px 10px; font-size: 12px"
              >Max: xxxx</span
            >
            <span style="padding: 0px 10px 0px 10px; font-size: 12px"
              >Avg.: xx</span
            >
            <span style="padding: 0px 10px 0px 10px; font-size: 12px"
              >Days: 7</span
            >
          </v-col>
        </v-col>
        <v-col style="padding-left: 50px">
          <div>
            <apexchart
              type="line"
              height="290"
              width="100%"
              :options="chartOptions"
              :series="series"
              style="margin-right: 20px"
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
          c_date: "01 พ.ค. 2567",
          result_hospital_num: "200 ",
        },
        {
          c_date: "02 พ.ค. 2567",
          result_hospital_num: "400 ",
        },
        {
          c_date: "03 พ.ค. 2567",
          result_hospital_num: "300 ",
        },
        {
          c_date: "04 พ.ค. 2567",
          result_hospital_num: "500 ",
        },
        {
          c_date: "05 พ.ค. 2567",
          result_hospital_num: "450 ",
        },
        {
          c_date: "06 พ.ค. 2567",
          result_hospital_num: "350 ",
        },
        {
          c_date: "07 พ.ค. 2567",
          result_hospital_num: "200 ",
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
          height: 170,

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
              fontSize: "10px", // Adjust font size for better fit
              fontWeight: 700,
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
                color: "#7FA5DA",
              },
              {
                offset: 70,
                color: "#7FA5DA",
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
</style>
