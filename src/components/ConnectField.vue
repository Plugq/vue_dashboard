<template>
  <div>
    <v-row>
      <v-col cols="12" class="col-card">
        <v-card flat class="body-card">
          <v-card-title style="font-weight: 700; margin-top: -10px">
            {{ mockdata_status[0].status_con }}
          </v-card-title>
          <v-card-text style="margin-top: -20px; color: #333232">
            (สะสม)
          </v-card-text>
          <v-row class="row2">
            <v-col class="p">
              <img
                style="position: absolute; margin-left: -10px"
                src="../assets/green.png"
              />
              <span class="num"
                >{{ mockdata_status[0].result_hospital_con }}
              </span>
              <span class="hosp">
                โรงพยาบาล <br />
                <span class="all"> (ทั่วทั้งประเทศ) </span>
              </span>
            </v-col>
          </v-row>
          <div style="padding-left: 1px">
            <v-col class="row">
              <span>โรงพยาบาลศูนย์ </span>
              <span class="col-span"
                >{{ mockdata_status[0].result_center_con }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลทั่วไป </span>
              <span class="col-span"
                >{{ mockdata_status[0].result_public_con }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลชุมชน </span>
              <span class="col-span"
                >{{ mockdata_status[0].result_local_con }}
              </span>
            </v-col>
          </div>
        </v-card>
        <v-card flat class="body-card">
          <v-card-title style="font-weight: 700; margin-top: -10px">
            {{ mockdata_status[1].status_wait }}
          </v-card-title>
          <v-card-text style="margin-top: -20px; color: #333232">
            (สะสม)
          </v-card-text>
          <v-row class="row2">
            <v-col class="p">
              <img
                style="position: absolute; margin-left: -10px"
                src="../assets/yellow.png"
              />
              <span class="num"
                >{{ mockdata_status[1].result_hospital_wait }}
              </span>
              <span class="hosp">
                โรงพยาบาล <br />
                <span class="all"> (ทั่วทั้งประเทศ) </span>
              </span>
            </v-col>
          </v-row>
          <div style="padding-left: 10px">
            <v-col class="row">
              <span>โรงพยาบาลศูนย์ </span>
              <span class="col-span"
                >{{ mockdata_status[1].result_center_wait }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลทั่วไป </span>
              <span class="col-span"
                >{{ mockdata_status[1].result_public_wait }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลชุมชน </span>
              <span class="col-span"
                >{{ mockdata_status[1].result_local_wait }}
              </span>
            </v-col>
          </div>
        </v-card>
        <v-card flat class="body-card">
          <v-card-title style="font-weight: 700; margin-top: -10px">
            {{ mockdata_status[2].status_discon }}
          </v-card-title>
          <v-card-text style="margin-top: -20px; color: #333232">
            (สะสม)
          </v-card-text>
          <v-row class="row2">
            <v-col class="p">
              <img
                style="opacity: 0.5; position: absolute; margin-left: -10px"
                src="../assets/gray.png"
              />
              <span class="num"
                >{{ mockdata_status[2].result_hospital_discon }}
              </span>
              <span class="hosp">
                โรงพยาบาล <br />
                <span class="all">(ทั่วทั้งประเทศ)</span>
              </span>
            </v-col>
          </v-row>
          <div style="padding-left: 10px">
            <v-col class="row">
              <span>โรงพยาบาลศูนย์ </span>
              <span class="col-span"
                >{{ mockdata_status[2].result_center_discon }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลทั่วไป </span>
              <span class="col-span"
                >{{ mockdata_status[2].result_public_discon }}
              </span>
            </v-col>

            <v-col class="row">
              <span>โรงพยาบาลชุมชน </span>
              <span class="col-span"
                >{{ mockdata_status[2].result_local_discon }}
              </span>
            </v-col>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mockdata_status: [
        {
          status_con: "เชื่อมต่อเเล้ว",
          result_hospital_con: "182",
          result_center_con: "32",
          result_public_con: "44",
          result_local_con: "106",
        },
        {
          status_wait: "กำลังเชื่อมต่อ",
          result_hospital_wait: "190",
          result_center_wait: "42",
          result_public_wait: "39",
          result_local_wait: "119",
        },
        {
          status_discon: "ยังไม่เชื่อมต่อ",
          result_hospital_discon: "186",
          result_center_discon: "30",
          result_public_discon: "50",
          result_local_discon: "106",
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-card {
  font-family: Kanit, sans-serif;
  color: #333232;
  display: flex;
  justify-content: center;
  gap: 9px;
  margin: 4px;
  overflow-x: auto;
}
.body-card {
  font-size: 14px;
  padding: 10px;
  height: 250px;
  width: 200px;
  border-radius: 12px;
}
.row {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  margin-top: -10px;
}
.row2 {
  font-size: 12px;
  margin-left: 5px;
  margin-top: -10px;
  margin-bottom: 20px;
}

.col-span {
  font-size: 10px;
  font-weight: 600;
}
.all {
  font-size: 10px;
  font-weight: normal;
  display: flex;
  justify-content: center;
}
.hosp {
  padding-left: 18px;
  font-size: 14px;
  font-weight: 600;
}
.num {
  position: relative;
  font-size: 30px;
  font-weight: 700;
}
.p {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
