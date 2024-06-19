<template>
  <div>
    <v-card flat style="color: #333232">
      <v-row>
        <v-col cols="12" class="col-head">
          <v-col cols="8" class="col-data">
            <span>โรงพยาบาลที่เข้าร่วมแบ่งตามจังหวัด</span><br />
            <span>แสดงจำนวนโรงพยาลตามสถานะการเข้าร่วมโครงการ Health Rider</span>
          </v-col>
          <v-col cols="4" class="col-num">
            <span style="font-size: 32px; font-weight: 700; margin-right: 20px"
              >234</span
            ><br />
            <span>โรงพยาบาล (สะสม)</span>
          </v-col>
        </v-col>
      </v-row>
      <v-col cols="12" class="scollbar" style="max-height: 300px">
        <div>
          <ChartParticipate />
        </div>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import ChartParticipate from "./ChartParticipate.vue";
export default {
  components: {
    ChartParticipate,
  },
};
</script>

<style>
.col-head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-weight: 600;
}
.col-data {
  display: block;
  text-align: left;
  padding-left: 40px;

  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.col-num {
  display: block;
  text-align: right;
  padding-right: 20px;
  align-items: start;
}
.scollbar {
  overflow-y: auto;
  max-height: 250px;
}
.scollbar::-webkit-scrollbar {
  width: 5px;
}

.scollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.scollbar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.scollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scollbar::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
