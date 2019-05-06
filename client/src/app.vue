<template>
  <v-app :dark="user.isDarkModeEnabled">
    <v-navigation-drawer v-model="drawer.open" absolute temporary>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="gravatarUrl" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ user.name }}</v-list-tile-title>
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

        <v-list-tile @click="toggleDarkMode">
          <v-list-tile-action>
            <v-icon>{{ darkModeStatusIcon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Toggle Dark Mode</v-list-tile-title>
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
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState({
      user: state => state.user,
      darkModeStatusIcon: state => {
        if (state.user.isDarkModeEnabled) {
          return 'toggle_on'
        }

        return 'toggle_off'
      }
    }),
    gravatarUrl() {
      return gravatar.url(this.user.email)
    }
  },
  data() {
    return {
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
          title: 'Add Inmate',
          route: 'AddInmate',
          icon: 'add_circle_outline'
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
    },
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    }
  }
}
</script>

<style lang="scss">
.v-navigation-drawer.theme--dark a.primary--text {
  color: #fff !important;
}

.v-navigation-drawer.theme--light a.primary--text {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
