<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>เลือกข้อมูล</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedItems"
          small-chips
          label="เขตพื้นที่"
          :items="area"
          multiple
          variant="underlined"
        ></v-select>

        <v-select
          v-model="selectedProvinces"
          chips
          label="เลือกจังหวัด"
          :items="provinces"
          multiple
          variant="underlined"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="saveSelections">บันทึก</v-btn>
        <v-btn color="blue darken-1" text @click="closeDialog">ยกเลิก</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean, // ใช้สำหรับ v-model เพื่อควบคุมการแสดง/ซ่อน dialog
    selectedItems: Array, // รับ props สำหรับ selectedItems จาก component หลัก
    selectedProvinces: Array, // รับ props สำหรับ selectedProvinces จาก component หลัก
    area: Array, // รับ props สำหรับ area จาก component หลัก
    provinces: Array, // รับ props สำหรับ provinces จาก component หลัก
  },
  methods: {
    saveSelections() {
      // ส่งค่ากลับไปยัง component หลักเมื่อผู้ใช้กดบันทึก
      this.$emit("save", {
        selectedItems: this.selectedItems,
        selectedProvinces: this.selectedProvinces,
      });
      this.closeDialog();
    },
    closeDialog() {
      // ปิด dialog
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
/* CSS สำหรับสไตล์ของ dialog */
</style>
