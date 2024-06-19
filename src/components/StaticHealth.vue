<template>
  <div>
    <v-card flat>
      <v-row>
        <v-col cols="12" style="padding: 20px 40px">
          <span style="font-size: 20px; font-weight: 700"
            >ประเมินความพึงพอใจ</span
          ><br />
          <span style="font-size: 16px; font-weight: 700">34 โรงพยาบาล</span>
        </v-col>
      </v-row>
      <v-divider class="dashed-divider"></v-divider>
      <v-row>
        <v-col class="block">
          <div class="m_div">
            <v-col>
              <span class="head">ความรวดเร็วในการจัดส่งยา</span>
            </v-col>
            <v-col class="block">
              <div>
                <img src="../assets/image 168.png" />
              </div>
              <div class="m_divindiv">
                <span class="span_num">98.65%</span><br />
                <span class="span_like">ความพึงพอใจเฉลี่ย</span>
              </div>
            </v-col>
          </div>
          <div class="m_div">
            <v-col>
              <span class="head">เจ้าหน้าที่จัดส่งยา พูดจาสุภาพ</span>
            </v-col>
            <v-col class="block">
              <div>
                <img src="../assets/image 169.png" />
              </div>
              <div class="m_divindiv">
                <span class="span_num">98.65%</span><br />
                <span class="span_like">ความพึงพอใจเฉลี่ย</span>
              </div>
            </v-col>
          </div>
          <div class="m_div">
            <v-col>
              <span class="head">กล่องยาอยู่ในสถาะสมบูรณ์ ไม่เสียหาย</span>
            </v-col>
            <v-col class="block">
              <div>
                <img src="../assets/image 170.png" />
              </div>
              <div class="m_divindiv">
                <span class="span_num">98.65%</span><br />
                <span class="span_like">ความพึงพอใจเฉลี่ย</span>
              </div>
            </v-col>
          </div>
          <div class="m_div">
            <v-col>
              <span class="head">บริการจัดส่งยาถึงบ้าน มีประโยชน์หรือไม่</span>
            </v-col>
            <v-col class="block">
              <div>
                <img src="../assets/image 171.png" />
              </div>
              <div class="m_divindiv">
                <span class="span_num">98.65%</span><br />
                <span class="span_like">ความพึงพอใจเฉลี่ย</span>
              </div>
            </v-col>
          </div>
          <div class="m_div">
            <v-col>
              <span class="head">ช่วยลดระยะเวลาในการรอคอยยา</span>
            </v-col>
            <v-col class="block">
              <div>
                <img src="../assets/image 172.png" />
              </div>
              <div class="m_divindiv">
                <span class="span_num"> 98.65% </span>
                <br />
                <span class="span_like">ความพึงพอใจเฉลี่ย</span>
              </div>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.block {
  display: flex;
  justify-content: center;
  align-content: center;
}
.m_div {
  padding: 0px 15px 0px 15px;
}
.m_divindiv {
  padding: 0px 20px 0px 10px;
  display: block;
  justify-content: end;
  align-content: end;
}
.span_num {
  margin-left: 25px;
  font-size: 28px;
  font-weight: 600;
}
.span_like {
  font-weight: 600;
  font-size: 12px;
  margin-left: 15px;
}
.dashed-divider {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 96%;
  margin-left: 25px;
  border-top: 2px dashed #bdbdbd;
}
.head {
  font-weight: 500;
  font-size: 17px;
}
</style>
