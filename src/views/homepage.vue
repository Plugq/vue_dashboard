<template>
  <div>
    <v-banner elevation="11" style="margin-top: -185px">
      <v-carousel hide-delimiters v-model="model" cycle>
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <div class="carousel-image-container">
            <img :src="image" class="carousel-image" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-banner>
    <div class="containerbg"></div>

    <div>
      <v-container>
        <v-row align="center">
          <transition-group name="slide-fade" tag="v-row" class="row">
            <v-col
              cols="12"
              md="4"
              v-for="(image_body, index) in displayedImages"
              :key="index"
            >
              <v-card
                class="ma-3"
                elevation="4"
                outlined
                style="max-width: 100%; background-color: #c5c5c5"
              >
                <img class="col" :src="image_body" />
                <v-divider></v-divider>
                <v-card-title class="ml-3">
                  <span>อุปกรณ์คอมพิวเตอร์</span>
                </v-card-title>
                <v-card-text class="ml-5">
                  <v-row>
                    <v-rating
                      :value="4.5"
                      color="primary"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                  </v-row>
                </v-card-text>
                <span class="ml-7"> flashdrive naja</span>
              </v-card>
            </v-col>
          </transition-group>
        </v-row>
      </v-container>
      <div class="see">
        <v-btn
          color="black"
          outlined
          elevation="4"
          @click="toggleShowAll"
          class="mt-4 mb-10"
          style="width: 200px; border: none; background-color: #c5c5cd"
        >
          {{ showAll ? "See Less" : "See All" }}</v-btn
        >
      </div>
    </div>
    <div>
      <v-footer dark>
        <v-card class="flex" flat tile>
          <v-card-title>
            <strong>@Vuetify</strong>

            <v-spacer></v-spacer>
            <strong style="font-size: 30px; margin-left: 200px"
              >GOGO SHOP</strong
            >
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    showAll: false,
    images: [
      "https://wallpaperswide.com/download/apple_products_design-wallpaper-3554x1999.jpg",
      "https://reunion.darty-dom.com/thumbnails/product/568/568523/square/900/passerelle-multimedia_568523.png",
      "https://cdsassets.apple.com/live/7WUAS350/images/applecare/applecare-products-homepod-apple-tv-4k-macbook-pro-14in-ipad-pro-11in-iphone-14-pro-iphone-14-pro-max-apple-watch.png",
      "https://sirirat2015.weebly.com/uploads/4/8/0/8/48087987/9217917_orig.jpg",
      "https://shop.thestreamingguys.com.au/cdn/shop/products/Inogeni-4K2USB3-HDMI-Connection.jpg?v=1642565336&width=1200",
    ],
    image_body: [
      "https://www.jib.co.th/img_master/product/original/2019041009021033520_1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXqJFmQTQWxacSBdNPegUrb6PlQhgfNmBOA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkg9ij11JO1iGb9kck1DtEWeor-vCBADRHg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ-mglZqErmMXY7EKyEcmOohxE_5NxMPEhg&s",
      "https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80,w_1000/v1712227309/products/PRD202404006976/skus/ycxgnc3i3rsalojaciqv.jpg",
      "https://www.autonetpc.com/wp-content/uploads/2020/10/avermedia-live-gamer-duo-1-600x600.jpg",
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/06/Blog%20Content/week%202/Ascenti%20AMD%20FAN%20DAY%20AMD%20Ryzen%205%203600%20RX%206500%20XT%20Computer%20Set%201.jpg",
      "https://nextplayshop.com/wp-content/uploads/2022/11/P3223QE-02-1.jpg",
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  computed: {
    displayedImages() {
      return this.showAll ? this.image_body : this.image_body.slice(0, 3);
    },
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style>
.containerbg {
  max-width: 100%;
  background-image: url("https://2.bp.blogspot.com/-EnZw-T3eRu0/VGrJclJqTHI/AAAAAAAANo8/o32OZ0vtTiQ/s1600/apple-computer-computer-background-apple-computer-25791.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 900px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  margin: auto;
}
.carousel-image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.see {
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.m {
  margin-left: 10px;
}
</style>
