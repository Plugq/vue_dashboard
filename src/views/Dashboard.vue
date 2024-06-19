<template>
  <div style="background: #f6f8fe">
    <v-col cols="12">
      <div class="container">
        <div class="text-head">
          <span
            style="
              line-height: 101.57px;
              font-size: 64px;
              font-weight: 700;
              text-shadow: -5px -1px 6.1px rgba(0, 0, 0, 0.25);
              letter-spacing: 3px;
              background: linear-gradient(to right, #52a889, #008489);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >HEALTH &nbsp;RIDER</span
          >
          <span
            style="
              font-size: 24px;
              font-weight: 700;
              line-height: 38.09px;
              background: linear-gradient(to right, #51a88a, #0b898a);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >"DASHBOARD ส่งยาและเวชภัณฑ์"</span
          >

          <span class="text-low">
            <img
              style="padding-right: 5px; margin-top: -2px"
              src="../assets/Check Circle.png"
            />
            ข้อมูลอัพเดตวันที่ 06/11/2566 เวลา 08:00 น.
          </span>
        </div>

        <div class="image-container">
          <img src="../assets/6301 1.png" />
        </div>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  font-family: Roboto, sans-serif;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  background: linear-gradient(to left, #eaf7fa 100%, #a4ead2 20%);
  height: 225px;
  width: 100%;
  margin-top: 15px;
  border-radius: 12px;
  justify-content: center;
}
.text-head {
  padding-top: 28px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-low {
  display: flex;
  background: #9a9a9a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.8px;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 545px;
  height: 100%;
  opacity: 0.7;
  margin-left: 300px;
  flex: 1;
}
</style>
