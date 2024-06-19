<template>
  <div>
    <v-card flat style="color: #333232; max-height: 550px">
      <v-row>
        <v-col
          cols="12"
          style="
            padding-top: 25px;
            padding-left: 30px;
            padding-right: 30px;
            font-weight: 700;
            font-size: 18px;
          "
        >
          <span>จำนวน Health ID (5,090,475)</span>
        </v-col>
        <v-col style="height: 360px">
          <v-data-table
            :headers="headers"
            :items="data_area"
            class="custom-scrollbar"
            fixed-header
            hide-default-footer
            height="290px"
            :items-per-page="10"
            style="margin-left: 25px; margin-right: 10px; text-align: center"
          >
            <template v-slot:[`item.activeTotal`]="{ item }">
              <span style="color: #429f71; font-weight: 700">{{
                item.active
              }}</span>
              /
              <span>{{ item.total }}</span>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "เขตสุขภาพ",
          sortable: true,
          value: "area",
          align: "center",
        },
        { text: "จังหวัด", value: "province", align: "center" },
        { text: "เขต/อำเภอ", value: "district" },
        { text: "แขวง/ตำบล", value: "sub_district", align: "center" },
        { text: "active/total", value: "activeTotal", align: "center" },
        { text: "รายได้", value: "income" },
      ],
      data_area: [
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
        {
          area: "เขตสุขภาพ 1",
          province: "นครราชสีมา",
          district: "เมืองนครราชสีมา",
          sub_district: "ในเมือง",
          active: "5,121 ",
          total: "12,345",
          income: 500,
        },
      ],
    };
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
  font-size: 14px;
}
</style>
