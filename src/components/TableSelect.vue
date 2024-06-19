<template>
  <div>
    <v-col>
      <v-data-table
        fixed-header
        hide-default-footer
        height="400px"
        :headers="headers"
        :items="filteredData"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
        class="custom-scrollbar"
        style="text-align: center; font-size: 20px; margin: 10px"
      >
        <template v-slot:[`item.listall`]="{ item }">
          <span style="color: #429f71; font-weight: 700">
            {{ item.list_all }}
          </span>
        </template>

        <template v-slot:footer>
          <div class="v-data-footer__select">
            จำนวนแถวต่อหน้า:
            <v-select
              :items="rowsPerPageItems"
              v-model="itemsPerPage"
              hide-details
              dense
              outlined
              style="border-radius: 20px"
            ></v-select>
          </div>
        </template>
      </v-data-table>
      <div style="display: flex; justify-content: end; margin-top: -60px">
        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="5"
          show-previous
          show-next
          class="vuetify-theme-stylesheet"
        ></v-pagination>
      </div>
    </v-col>
  </div>
</template>
<script>
export default {
  props: {
    data_push: {
      type: Array,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
    selectedArea: Array,
    selectedProvincesName: Array,
    selectedDistrictName: Array,
    selectedSubDistrictName: Array,
  },

  data() {
    return {
      page: 1,
      pageCount: 0,
      rowsPerPageItems: [5, 10, 15, 20],
      itemsPerPage: 10,
      headers: [
        { text: "รหัส", sortable: true, value: "idrole", align: "center" },
        { text: "ชื่อหน่วยบริการ", value: "namerole", align: "center" },
        { text: "เขตสุขภาพ", value: "area", align: "center" },
        { text: "จังหวัด", value: "province", align: "center" },
        { text: "เขต/อำเภอ", value: "district" },
        { text: "แขวง/ตำบล", value: "sub_district", align: "center" },
        { text: "ประเภท", value: "type_hospital", align: "center" },
        { text: "รายการ", value: "listall", align: "center" },
        { text: "รายการสำเร็จ", value: "list_com", align: "center" },
        { text: "รายการอจัดส่ง", value: "list_wait", align: "center" },
        { text: "สิทธิ์บริการ", value: "right_hospital", align: "center" },
        { text: "ประเภท", value: "type_logis", align: "center" },
      ],
    };
  },
  computed: {
    filteredData() {
      return this.data_push.filter((item) => {
        const matchItems =
          this.selectedArea.length === 0 ||
          this.selectedArea.includes(item.area);
        const matchProvinces =
          this.selectedProvincesName.length === 0 ||
          this.selectedProvincesName.includes(item.province);
        const matchDistrict =
          this.selectedDistrictName.length === 0 ||
          this.selectedDistrictName.includes(item.district);
        const matchSubDistrict =
          this.selectedSubDistrictName.length === 0 ||
          this.selectedSubDistrictName.includes(item.sub_district);
        return (
          matchItems && matchProvinces && matchDistrict && matchSubDistrict
        );
      });
    },
  },
};
</script>

<style>
.custom-scrollbar .v-data-table__wrapper {
  max-height: 350px;
  overflow-y: auto;
}

.custom-scrollbar .v-data-table__wrapper::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar .v-data-table__wrapper::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.custom-scrollbar .v-data-table__wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.custom-scrollbar .v-data-table__wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar .v-data-table__wrapper::-webkit-scrollbar-corner {
  background: transparent;
}

.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  margin-left: 10px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 12px;
  height: 48px;
}

.custom-scrollbar .v-data-footer__pagination {
  display: none;
}

.custom-scrollbar .v-data-footer__icons-before {
  display: none;
}

.custom-scrollbar .v-data-ootfer__icons-after {
  display: none;
}

.v-data-footer__select {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  padding-top: 10px;
  box-shadow: none;
}

.v-application--wrap {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  position: relative;
}

.v-pagination__item {
  background: transparent;
  border-radius: 4px;
  font-size: 1rem;
  height: 34px;
  margin: 0.3rem;
  min-width: 34px;
  padding: 0 5px;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
  width: auto;
  box-shadow: none !important;
}
.v-pagination__navigation {
  box-shadow: none !important;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin: 0.3rem 10px;
}
.theme--light.v-pagination .v-pagination__item {
  background: none;
  color: #36b48a;
}

.v-application
  .vuetify-theme-stylesheet
  .v-pagination
  .v-pagination__item--active {
  background-color: #36b48a !important;
  color: #ffffff !important;
  border-color: #36b48a !important;
}
</style>
