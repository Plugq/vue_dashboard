<template>
  <div>
    <v-card flat style="color: #333232; height: 420px">
      <v-row>
        <v-col cols="12" style="margin-top: 10px">
          <span style="font-size: 18px; font-weight: 600; padding-left: 20px">
            Health Rider
          </span>
          <br />
          <span style="font-size: 12px; font-weight: 600; padding-left: 20px">
            แบ่งตามประเภทอ้างอิง Provider ID
          </span>
          <div class="img_all">
            <img style="width: 40px; height: 50px" src="../assets/asm.png" />
          </div>
          <div>
            <span class="img_all_text">อสม.</span><br />
            <span class="img_all_num">
              <span style="color: #36b48a">145</span>/1555 </span
            ><br />
            <span class="img_all_span">Active (สะสม) / ทั้งหมด (สะสม)</span>
          </div>
          <div class="img_all">
            <img style="width: 40px; height: 50px" src="../assets/doctor.png" />
          </div>
          <div>
            <span class="img_all_text">บุคลากรทางการแพทย์</span><br />
            <span class="img_all_num">
              <span style="color: #36b48a">166</span>/1555 </span
            ><br />
            <span class="img_all_span">Active (สะสม) / ทั้งหมด (สะสม)</span>
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
.img_all {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
}
.img_all_text {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5px;
  font-size: 18px;
  font-weight: 700;
}
.img_all_num {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 700;
}
.img_all_span {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: -15px;
  font-size: 12px;
  font-weight: 600;
}
</style>
