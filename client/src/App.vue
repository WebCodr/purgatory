<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer.open" absolute temporary>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="gravatarUrl" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>MadCat</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in navigationItems"
          :key="item.title"
          :to="{ name: item.route }"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft">
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import gravatar from 'gravatar'

export default {
  name: 'App',
  components: {},
  computed: {
    gravatarUrl() {
      return gravatar.url(this.user.email)
    }
  },
  data() {
    return {
      user: {
        email: 'madcat.me@gmail.com'
      },
      drawer: {
        open: false
      },
      toolbar: {
        fixed: false,
        clippedLeft: true
      },
      navigationItems: [
        {
          title: 'Home',
          route: 'Home',
          icon: 'home'
        },
        {
          title: 'Inmates',
          route: 'InmatesList',
          icon: 'supervised_user_circle'
        },
        {
          title: 'Users',
          route: 'UsersList',
          icon: 'people'
        },
        {
          title: 'Settings',
          route: 'Settings',
          icon: 'settings'
        }
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer.open = !this.drawer.open
    }
  }
}
</script>

<style lang="scss">
.v-navigation-drawer a.primary--text {
  color: #fff !important;
}
</style>
