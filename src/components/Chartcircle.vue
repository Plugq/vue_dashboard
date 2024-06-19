<template>
  <div>
    <v-card flat style="color: #333232; height: 300px">
      <v-row>
        <v-col cols="12" class="text_head">
          <div>
            <span style="font-size: 20px; font-weight: 700">Type Rider</span
            ><br />
            <span
              style="font-size: 12px; font-weight: 600; line-height: 19.04px"
            >
              ประเภทการจัดส่ง
            </span>
          </div>
          <div>
            <span style="font-size: 20px; font-weight: 700">100,000</span><br />
            <span style="font-size: 12px; font-weight: 600; margin-left: 20px">
              รายการ
            </span>
          </div>
        </v-col>
        <v-col>
          <div id="chart">
            <apexchart
              type="donut"
              :options="chartOptions"
              :series="series"
            ></apexchart>
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
          result_vehicle: "65",
          result_vehicle_num: "6500",
          label: "Iship",
        },
        {
          result_vehicle: "20",
          result_vehicle_num: "2500",
          label: "Flash",
        },
        {
          result_vehicle: "15",
          result_vehicle_num: "2000",
          label: "Rider",
        },
      ],
    };
  },
  mounted() {
    this.calldata();
  },
  methods: {
    calldata() {
      this.series = this.data_graph.map((item) =>
        parseInt(item.result_vehicle)
      );

      this.chartOptions = {
        chart: {
          width: 360,
          type: "donut",
        },
        labels: this.data_graph.map(
          (item) => `${item.label}:${item.result_vehicle_num} `
        ),

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        plotOptions: {
          pie: {
            startAngle: -155,
            endAngle: 205,
            donut: {
              labels: {
                show: false,
              },
            },
          },
        },

        stroke: {
          width: 7,
          colors: ["#fff"],
        },
        colors: ["#7FA5DA", "#7CC4E9", "#90E0EF"], // Custom colors for each section
        legend: {
          show: true,
        },
        dataLabels: {
          enabled: true,

          style: { fontSize: "10px", fontWeight: 700 },

          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.45,
          },
        },
        tooltip: {
          enabled: true,
        },
        yaxis: {
          tickAmount: 6,
          labels: {
            rotate: -45,
          },
        },
      };
    },
  },
};
</script>

<style>
.text_head {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 100%;
}

#chart {
  border-radius: 15px;
  overflow: hidden;
}
</style>
