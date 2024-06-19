<template>
  <div>
    <v-app-bar app color="#ccc">
      <div id="app">
        <button @click="toggleSidebar">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </button>
        <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
          <v-btn text class="text-left" href="/"> Home</v-btn> <br />
          <v-btn text class="text-left" href="./order">Order</v-btn> <br />
          <v-btn text class="text-left" href="./shop">Shopping</v-btn><br />
          <v-btn text class="text-left" href="./about">Aboutme</v-btn><br />
          <v-btn
            @click="toggleSidebar"
            text
            class="text-left"
            style="margin-top: 390px"
            >close</v-btn
          >
        </div>
      </div>
      <v-btn text height="50px" href="/">
        <img src="../assets/restaurant.png" style="width: 50px" />
        <v-text class="b">&nbsp; gogo </v-text>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="a">
          <v-tab>
            <v-badge color="green" content="6"
              ><v-icon color="black">mdi-cart</v-icon>
            </v-badge>
          </v-tab></span
        >
      </v-btn>
      <v-btn text>
        <span class="a"><v-icon color="black">mdi-shopping</v-icon></span>
      </v-btn>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="#48783B" size="40">
              <span class="white--text text-h8">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="#48cd3B">
                <span class="white--text text-h8">{{ user.initials }}</span>
              </v-avatar>
              <h5 class="mt-2">{{ user.fullName }}</h5>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Loguot </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isSidebarOpen: false,
      user: {
        initials: "TT",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
.a {
  font-family: Oswald;
  font-size: large;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
}
.b {
  font-family: Oswald;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  color: #141414;
}
.text-left {
  width: 300px;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 15px;
  border-bottom: 1px solid #696969;
}

.sidebar {
  font-family: Oswald;
  width: 300px;
  height: 800px;
  background-color: #f1f1f1;
  padding-top: 20px;
  position: fixed;
  left: -500px;
  transition: left 0.5s ease;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.sidebar-open {
  left: 0;
}
</style>
