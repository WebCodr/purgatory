<template>
  <div>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field
              v-model="inmate.name"
              label="Inmate name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field
              v-model="inmate.reason"
              label="Reason"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field
              v-model="inmate.url"
              label="URL"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-btn color="success" @click="save">Save</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  created() {
    const inmate = this.$store.getters.getInmateById(this.$route.params.id)

    if (inmate) {
      this.inmate = inmate
    }
  },
  data() {
    return {
      inmate: {
        name: undefined,
        reason: undefined,
        url: undefined
      }
    }
  },
  methods: {
    save() {
      this.$store.commit('updateInmate', this.inmate)
      this.$router.push({ name: 'InmatesList' })
    }
  }
}
</script>
