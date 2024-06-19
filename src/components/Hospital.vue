<template>
  <div>
    <v-row>
      <v-col>
        <v-card
          flat
          style="
            color: #333232;
            display: flex;
            flex-direction: column;
            justify-content: start;
            padding: 15px;
            max-width: 100%;
            border-radius: 12px;
          "
        >
          <v-row>
            <v-col cols="6">
              <span style="font-size: 18px; font-weight: 600">
                โรงพยาบาลที่เข้าร่วมแบ่งตามเขตบริการ
              </span>
              <br />
              <span style="font-size: 12px">
                แสดงจำนวนโรงพยาบาลแบ่งตามสถานะการเข้าร่วมโครงการ Health Rider
              </span>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="4" class="simbol">
              <span>
                <img class="img" src="../assets/dotgreen.png" />
                เข้าร่วม
              </span>
              <span>
                <img class="img" src="../assets/dotyellow.png" />
                รอดำเนินการ
              </span>
              <span>
                <img class="img" src="../assets/dotgray.png" />
                ยังไม่ได้เข้าร่วม
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ChartHospital />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChartHospital from "./ChartHospital.vue";
export default {
  components: {
    ChartHospital,
  },
};
</script>

<style scoped>
.simbol {
  font-size: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 15px;
  margin-left: -20px;
  font-weight: 600;
}

.img {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
