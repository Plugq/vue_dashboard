<template>
  <v-app>
    <v-card flat style="padding-top: 20px">
      <v-row>
        <v-col cols="12" class="d-flex" style="padding: 30px">
          <span style="margin-left: 30px; font-size: 20px"
            >จำนวนรายการ Health Rider</span
          >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            outlined
            dense
            hide-details
            clearable
            style="border-radius: 20px; width: 100px; padding-left: 550px"
          ></v-text-field>
          <v-btn
            class="ml-3"
            style="background-color: #36b48a; border-radius: 20px; color: white"
          >
            <v-icon>mdi-download</v-icon>
            <span>ดาวน์โหลดรายงาน Health ID</span>
          </v-btn>
        </v-col>

        <v-col cols="12" style="margin-top: -30px">
          <v-col style="padding-left: 50px">
            <!-- <v-btn @click="dialogarea = true"><v-icon>mdi-cart</v-icon></v-btn> -->
            <!-- เขตสุขภาพ -->
            <v-dialog v-model="dialogarea" max-width="1000">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="#36b48a"
                  dark
                  outlined
                  v-on="on"
                  style="
                    margin: 0 5px;
                    border-radius: 30px;
                    border-color: #36b48a;
                  "
                  >เขตสุขภาพ&nbsp;
                  <span v-if="selectedItemsCount > 0" class="count">
                    {{ selectedItemsCount }}</span
                  ></v-btn
                >
              </template>
              <v-card>
                <v-card-text style="padding-top: 30px">
                  <span style="font-size: 18px; font-weight: 600"
                    >เขตสุขภาพ</span
                  >
                  <v-text-field
                    v-model="searchAreaText"
                    label="ค้นหาเขตสุขภาพ"
                    append-icon="mdi-magnify"
                    single-line
                    outlined
                    dense
                    hide-details
                    style="border-radius: 20px; padding-top: 10px"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" style="margin: 20px 0 -10px 0">
                      <span>ตัวเลือก</span>
                    </v-col>
                    <v-col
                      v-for="(item, index) in filteredArea"
                      :key="index"
                      cols="4"
                    >
                      <v-checkbox
                        v-model="selectedItems"
                        :label="item"
                        :value="item"
                        @change="filterProvinces"
                        style="margin: -10px 5px"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end my-4">
                  <v-btn
                    @click="resetFilters"
                    color="#36b48a"
                    dark
                    outlined
                    style="border-radius: 30px; border-color: #36b48a"
                    >ล้างค่า</v-btn
                  >
                  <v-btn
                    color="#36b48a"
                    @click="applyFilters"
                    style="
                      border-radius: 30px;
                      border-color: #36b48a;
                      color: white;
                    "
                    >กรอง</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- จังหวัด -->
            <v-dialog
              v-model="dialogProvince"
              max-width="1000"
              v-if="selectedItems.length > 0"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="#36b48a"
                  outlined
                  dark
                  v-on="on"
                  style="
                    margin: 0 5px;
                    border-radius: 30px;
                    border-color: #36b48a;
                  "
                  >จังหวัด&nbsp;
                  <span v-if="selectedProvincesCount > 0" class="count"
                    >{{ selectedProvincesCount }}
                  </span>
                </v-btn>
              </template>
              <v-card>
                <v-card-text style="padding-top: 30px">
                  <span style="font-size: 18px; font-weight: 600">จังหวัด</span>
                  <v-text-field
                    v-model="searchProvinceText"
                    label="ค้นหาจังหวัด"
                    append-icon="mdi-magnify"
                    single-line
                    outlined
                    dense
                    hide-details
                    style="border-radius: 20px; padding-top: 10px"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" style="margin: 20px 0 -10px 0">
                      <span>ตัวเลือก</span>
                    </v-col>
                    <v-col
                      v-for="(province, index) in filteredProvinces"
                      :key="index"
                      cols="4"
                    >
                      <v-checkbox
                        v-model="selectedProvinces"
                        :label="province.name"
                        :value="province.name"
                        :disabled="
                          selectedItems.length === 0 ||
                          !selectedItems.includes(province.area)
                        "
                        @change="filterDistricts"
                        style="margin: -10px 5px"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end my-4">
                  <v-btn
                    @click="resetFiltersPro"
                    color="#36b48a"
                    dark
                    outlined
                    style="border-radius: 30px; border-color: #36b48a"
                    >ล้างค่า</v-btn
                  >
                  <v-btn
                    color="#36b48a"
                    @click="applyFiltersPro"
                    style="
                      border-radius: 30px;
                      border-color: #36b48a;
                      color: white;
                    "
                    >กรอง</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- อำเภอ -->
            <v-dialog
              v-model="dialogDistrict"
              max-width="1000"
              v-if="selectedProvinces.length > 0"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="#36b48a"
                  outlined
                  dark
                  v-on="on"
                  style="
                    margin: 0 5px;
                    border-radius: 30px;
                    border-color: #36b48a;
                  "
                  >อำเภอ&nbsp;
                  <span v-if="selectedDistrictCount > 0" class="count">
                    {{ selectedDistrictCount }}
                  </span></v-btn
                >
              </template>
              <v-card>
                <v-card-text style="padding-top: 30px">
                  <span style="font-size: 18px; font-weight: 600">อำเภอ</span>
                  <v-text-field
                    v-model="searchDistrictText"
                    label="ค้นหาอำเภอ"
                    append-icon="mdi-magnify"
                    single-line
                    outlined
                    dense
                    hide-details
                    style="border-radius: 20px; padding-top: 10px"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" style="margin: 20px 0 -10px 0">
                      <span>ตัวเลือก</span>
                    </v-col>
                    <v-col
                      v-for="(district, index) in filteredDistricts"
                      :key="index"
                      cols="4"
                    >
                      <v-checkbox
                        v-model="selectedDistrict"
                        :label="district.name"
                        :value="district.name"
                        :disabled="
                          selectedProvinces.length === 0 ||
                          !selectedProvinces.includes(district.province)
                        "
                        @change="filterSubdistricts"
                        style="margin: -10px 5px"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end my-4">
                  <v-btn
                    @click="resetFiltersDis"
                    color="#36b48a"
                    dark
                    outlined
                    style="border-radius: 30px; border-color: #36b48a"
                    >ล้างค่า</v-btn
                  >
                  <v-btn
                    color="#36b48a"
                    @click="applyFiltersDis"
                    style="
                      border-radius: 30px;
                      border-color: #36b48a;
                      color: white;
                    "
                    >กรอง</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- ตำบล -->
            <v-dialog
              v-model="dialogSubdistrict"
              max-width="1000"
              v-if="selectedDistrict.length > 0"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="#36b48a"
                  outlined
                  dark
                  v-on="on"
                  style="
                    margin: 0 5px;
                    border-radius: 30px;
                    border-color: #36b48a;
                  "
                  >ตำบล&nbsp;<span
                    v-if="selectedSubDistrictCount > 0"
                    class="count"
                  >
                    {{ selectedSubDistrictCount }}</span
                  ></v-btn
                >
              </template>
              <v-card>
                <v-card-text style="padding-top: 30px">
                  <span style="font-size: 18px; font-weight: 600">ตำบล</span>
                  <v-text-field
                    v-model="searchSubdistrictText"
                    label="ค้นหาตำบล"
                    append-icon="mdi-magnify"
                    single-line
                    outlined
                    dense
                    hide-details
                    style="border-radius: 20px; padding-top: 10px"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" style="margin: 20px 0 -10px 0">
                      <span>ตัวเลือก</span>
                    </v-col>
                    <v-col
                      v-for="(subdistrict, index) in filteredSubdistricts"
                      :key="index"
                      cols="4"
                    >
                      <v-checkbox
                        v-model="selectedSubDistrict"
                        :label="subdistrict.name"
                        :value="subdistrict.name"
                        style="margin: -10px 5px"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end my-4">
                  <v-btn
                    @click="resetFiltersSub"
                    color="#36b48a"
                    dark
                    outlined
                    style="border-radius: 30px; border-color: #36b48a"
                    >ล้างค่า</v-btn
                  >
                  <v-btn
                    color="#36b48a"
                    @click="applyFiltersSub"
                    style="
                      border-radius: 30px;
                      border-color: #36b48a;
                      color: white;
                    "
                    >กรอง</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn
              v-if="
                selectedItems.length > 0 ||
                selectedProvinces.length > 0 ||
                selectedDistrict.length > 0 ||
                selectedSubDistrict.length > 0
              "
              @click="resetFiltersAll"
              color="primary"
              text
              style="border-radius: 30px; border-color: #36b48a"
              >ล้างค่าทั้งหมด</v-btn
            >
          </v-col>

          <!-- ตารางข้อมูล -->
          <v-col style="margin-top: -30px">
            <TableSelect
              :data_push="data_filter"
              :search="search"
              :selectedArea="selectedItems"
              :selectedProvincesName="selectedProvinces"
              :selectedDistrictName="selectedDistrict"
              :selectedSubDistrictName="selectedSubDistrict"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import TableSelect from "./TableSelect.vue";

export default {
  components: {
    TableSelect,
  },
  props: {
    data_filter: {
      type: Array,
    },
  },
  data() {
    return {
      search: "",
      searchAreaText: "",
      searchProvinceText: "",
      searchDistrictText: "",
      searchSubdistrictText: "",
      dialogarea: false,
      dialogProvince: false,
      dialogDistrict: false,
      dialogSubdistrict: false,
      selectedItems: [],
      selectedProvinces: [],
      selectedDistrict: [],
      selectedSubDistrict: [],

      area: ["เขต 1", "เขต 2", "เขต 3", "เขต 4", "เขต 5", "เขต 6"],

      provinces: [
        { name: "นครราชสีมา", area: "เขต 1" },
        { name: "บุรีรัมย์", area: "เขต 1" },

        { name: "หนองบัวลำภู", area: "เขต 2" },
        { name: "อุดรธาณี", area: "เขต 2" },

        { name: "สระแก้ว", area: "เขต 3" },
        { name: "ชัยภูมิ", area: "เขต 3" },

        { name: "เชียงใหม่", area: "เขต 4" },
        { name: "แม่ฮ่องสอน", area: "เขต 4" },

        { name: "ลำปาง", area: "เขต 5" },
        { name: "ลำพูน", area: "เขต 5" },

        { name: "น่าน", area: "เขต 6" },
        { name: "แพร่", area: "เขต 6" },
      ],
      districts: [
        { name: "เมืองหนองบัวลำภู", province: "หนองบัวลำภู" },
        { name: "นาหนองหลวง", province: "หนองบัวลำภู" },

        { name: "เมืองอุดรธาณี", province: "อุดรธาณี" },
        { name: "กุดจอก", province: "อุดรธาณี" },

        { name: "เมืองบุรีรัมย์", province: "บุรีรัมย์" },
        { name: "นางรอง", province: "บุรีรัมย์" },

        { name: "เมืองนครราชสีมา", province: "นครราชสีมา" },
        { name: "หนองบัวลำภู", province: "นครราชสีมา" },

        { name: "เมืองสระแก้ว", province: "สระแก้ว" },
        { name: "มวกเหล็ก", province: "สระแก้ว" },

        { name: "เมืองชัยภูมิ", province: "ชัยภูมิ" },
        { name: "หนองบัวแดง", province: "ชัยภูมิ" },

        { name: "เมืองเชียงใหม่", province: "เชียงใหม่" },
        { name: "สันป่าตอง", province: "เชียงใหม่" },

        { name: "เมืองแม่ฮ่องสอน", province: "แม่ฮ่องสอน" },
        { name: "ปาย", province: "แม่ฮ่องสอน" },

        { name: "เมืองลำปาง", province: "ลำปาง" },
        { name: "แม่เมาะ", province: "ลำปาง" },

        { name: "เมืองลำพูน", province: "ลำพูน" },
        { name: "ป่าซาง", province: "ลำพูน" },

        { name: "ภูเพียง", province: "น่าน" },
        { name: "แม่จริม", province: "น่าน" },

        { name: "เมืองแพร่", province: "แพร่" },
        { name: "ร้องกวาง", province: "แพร่" },
      ],

      subdistricts: [
        { name: "ในเมือง", district: "เมืองหนองบัวลำภู" },
        { name: "นาหนองหลวง", district: "นาหนองหลวง" },
        { name: "หมากแข้ง", district: "เมืองอุดรธาณี" },
        { name: "กุดจอก", district: "กุดจอก" },

        { name: "ท่าหลวง", district: "เมืองหนองบัวลำภู" },
        { name: "โนนทอง", district: "นาหนองหลวง" },
        { name: "ดงดวน", district: "เมืองอุดรธาณี" },
        { name: "บ้านแปร", district: "กุดจอก" },

        { name: "ด่านขุนทด", district: "เมืองนครราชสีมา" },
        { name: "ชุมเมือง", district: "เมืองบุรีรัมย์" },
        { name: "หนองบัวลำภู", district: "หนองบัวลำภู" },
        { name: "นางรอง", district: "นางรอง" },

        { name: "บ้านใหม่", district: "เมืองนครราชสีมา" },
        { name: "เมืองทอง", district: "เมืองบุรีรัมย์" },
        { name: "โคกสูง", district: "หนองบัวลำภู" },
        { name: "โนนดินแดง", district: "นางรอง" },

        { name: "ช้างเผือก", district: "เมืองเชียงใหม่" },
        { name: "จองคำ", district: "เมืองแม่ฮ่องสอน" },
        { name: "สันป่าตอง", district: "สันป่าตอง" },
        { name: "ปาย", district: "ปาย" },

        { name: "สุเทพ", district: "เมืองเชียงใหม่" },
        { name: "ทุ่งช้าง", district: "เมืองแม่ฮ่องสอน" },
        { name: "หางดง", district: "สันป่าตอง" },
        { name: "แม่อาย", district: "ปาย" },

        { name: "โพธิ์ชัย", district: "เมืองสระแก้ว" },
        { name: "บ้านเล่า", district: "เมืองชัยภูมิ" },
        { name: "มวกเหล็ก", district: "มวกเหล็ก" },
        { name: "หนองบัวแดง", district: "หนองบัวแดง" },

        { name: "บ้านค้อ", district: "เมืองสระแก้ว" },
        { name: "โนนสมบูรณ์", district: "เมืองชัยภูมิ" },
        { name: "บ้านโสก", district: "มวกเหล็ก" },
        { name: "หนองนาคำ", district: "หนองบัวแดง" },

        { name: "หัวเวียง", district: "เมืองลำปาง" },
        { name: "เวียงยอง", district: "เมืองลำพูน" },
        { name: "แม่เมาะ", district: "แม่เมาะ" },
        { name: "ป่าซาง", district: "ป่าซาง" },

        { name: "ป่าซาง", district: "เมืองลำปาง" },
        { name: "นาแก", district: "เมืองลำพูน" },
        { name: "ทุ่งหลวง", district: "แม่เมาะ" },
        { name: "ป่าโป่ง", district: "ป่าซาง" },

        { name: "น้ำแก่น", district: "ภูเพียง" },
        { name: "เวียงชัย", district: "เมืองแพร่" },
        { name: "แม่จริม", district: "แม่จริม" },
        { name: "ร้องกวาง", district: "ร้องกวาง" },

        { name: "จอมจันทร์", district: "ภูเพียง" },
        { name: "สว่างอารมณ์", district: "เมืองแพร่" },
        { name: "หนองแดง", district: "แม่จริม" },
        { name: "นาทราย", district: "ร้องกวาง" },
      ],

      selectedItemsCount: 0,
      selectedProvincesCount: 0,
      selectedDistrictCount: 0,
      selectedSubDistrictCount: 0,
    };
  },

  //////filter//////
  methods: {
    applyFiltersPro() {
      this.$emit("filter", {
        selectedProvinces: this.selectedProvinces,
      });
      this.dialogProvince = false;
    },
    applyFiltersDis() {
      this.$emit("filter", {
        selectedDistrict: this.selectedDistrict,
      });
      this.dialogDistrict = false;
    },
    applyFiltersSub() {
      this.selectedSubDistrictCount = this.selectedSubDistrict.length;
      this.dialogSubdistrict = false;
    },
    applyFilters() {
      this.$emit("filter", {
        selectedItems: this.selectedItems,
      });
      this.dialogarea = false;
    },

    resetFilters() {
      this.selectedItems = [];
    },
    resetFiltersPro() {
      this.selectedProvinces = [];
    },
    resetFiltersDis() {
      this.selectedDistrict = [];
    },
    resetFiltersSub() {
      this.selectedSubDistrict = [];
      this.selectedSubDistrictCount = 0;
    },
    resetFiltersAll() {
      this.selectedItems = [];
      this.selectedProvinces = [];
      this.selectedDistrict = [];
      this.selectedSubDistrict = [];

      this.selectedItemsCount = 0;
      this.selectedProvincesCount = 0;
      this.selectedDistrictCount = 0;
      this.selectedSubDistrictCount = 0;

      this.updateCounts();
    },

    updateCounts() {
      this.selectedItemsCount = this.selectedItems.length;
      this.selectedProvincesCount = this.selectedProvinces.length;
      this.selectedDistrictCount = this.selectedDistrict.length;
      this.selectedSubDistrictCount = this.selectedSubDistrict.length;
    },

    filterProvinces() {
      this.updateCounts();
    },

    filterDistricts() {
      this.updateCounts();
    },

    filterSubdistricts() {
      this.updateCounts();
    },
  },

  ////search///
  computed: {
    filteredArea() {
      const searchText = this.searchAreaText.toLowerCase();
      return this.area.filter((item) =>
        item.toLowerCase().includes(searchText)
      );
    },
    filteredProvinces() {
      const searchText = this.searchProvinceText.toLowerCase();
      return this.provinces
        .filter((province) => this.selectedItems.includes(province.area))
        .filter((item) => item.name.toLowerCase().includes(searchText));
    },
    filteredDistricts() {
      const searchText = this.searchDistrictText.toLowerCase();
      return this.districts
        .filter((district) =>
          this.selectedProvinces.includes(district.province)
        )
        .filter((item) => item.name.toLowerCase().includes(searchText));
    },
    filteredSubdistricts() {
      const searchText = this.searchSubdistrictText.toLowerCase();
      return this.subdistricts
        .filter((subdistrict) =>
          this.selectedDistrict.includes(subdistrict.district)
        )
        .filter((item) => item.name.toLowerCase().includes(searchText));
    },
  },
};
</script>

<style>
.v-data-footer__select {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  padding-top: 10px;
}

.count {
  background: #d7f0e8;
  border: none;
  color: #2b906e;
  text-align: center;
  text-decoration: none;
  cursor: col-resize;
  padding: 10px;
  border-radius: 50%;
  width: 1px;
  height: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
