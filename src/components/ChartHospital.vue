<template>
  <div>
    <div id="chart">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      chartOptions: {}, // เพิ่ม chartOptions ที่นี่
      data_graph: [
        {
          c_name: "เขต1",
          result_hospital_con: "2",
          result_hospital_wait: "4",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต2",
          result_hospital_con: "5",
          result_hospital_wait: "4",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต3",
          result_hospital_con: "2",
          result_hospital_wait: "4",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต4",
          result_hospital_con: "5",
          result_hospital_wait: "2",
          result_hospital_discon: "1",
        },
        {
          c_name: "เขต5",
          result_hospital_con: "2",
          result_hospital_wait: "5",
          result_hospital_discon: "1",
        },
        {
          c_name: "เขต6",
          result_hospital_con: "5",
          result_hospital_wait: "1",
          result_hospital_discon: "1",
        },
        {
          c_name: "เขต7",
          result_hospital_con: "2",
          result_hospital_wait: "4",
          result_hospital_discon: "1",
        },
        {
          c_name: "เขต8",
          result_hospital_con: "1",
          result_hospital_wait: "2",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต9",
          result_hospital_con: "2",
          result_hospital_wait: "3",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต10",
          result_hospital_con: "2",
          result_hospital_wait: "2",
          result_hospital_discon: "5",
        },
        {
          c_name: "เขต11",
          result_hospital_con: "2",
          result_hospital_wait: "1",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต12",
          result_hospital_con: "4",
          result_hospital_wait: "1",
          result_hospital_discon: "3",
        },
        {
          c_name: "เขต13",
          result_hospital_con: "5",
          result_hospital_wait: "2",
          result_hospital_discon: "3",
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
          name: "PRODUCT A",
          data: this.data_graph.map((item) => item.result_hospital_con),
        },
        {
          name: "PRODUCT B",
          data: this.data_graph.map((item) => item.result_hospital_wait),
        },
        {
          name: "PRODUCT C",
          data: this.data_graph.map((item) => item.result_hospital_discon),
        },
      ];

      this.chartOptions = {
        colors: ["#B6AFAA", "#FDE184", "#8DD182"],
        chart: {
          type: "bar",
          height: 350,
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
            breakpoint: 480,
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
            horizontal: false,
            borderRadius: 15,
            borderRadiusApplication: "end", // 'around', 'end'
            borderRadiusWhenStacked: "last", // 'all', 'last'
            dataLabels: {
              total: {
                enabled: false,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          label: {
            show: false,
          },
          show: false,
          categories: [
            [this.data_graph[0].c_name, "13/38", "40%"],
            [this.data_graph[1].c_name, "13/38", "40%"],
            [this.data_graph[2].c_name, "13/38", "40%"],
            [this.data_graph[3].c_name, "13/38", "40%"],
            [this.data_graph[4].c_name, "13/38", "40%"],
            [this.data_graph[5].c_name, "13/38", "40%"],
            [this.data_graph[6].c_name, "13/38", "40%"],
            [this.data_graph[7].c_name, "13/38", "40%"],
            [this.data_graph[8].c_name, "13/38", "40%"],
            [this.data_graph[9].c_name, "13/38", "40%"],
            [this.data_graph[10].c_name, "13/38", "40%"],
            [this.data_graph[11].c_name, "13/38", "40%"],
            [this.data_graph[12].c_name, "13/38", "40%"],
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          label: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: false,
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
        grid: {
          show: false,
          position: "front",
        },
        dataLabels: {
          enabled: false,
        },
        label: {
          show: false,
        },
      };
    },
  },
};
</script>

<style></style>
