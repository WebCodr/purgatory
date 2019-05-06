<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="inmates"
      :loading="false"
      class="elevation-1"
    >
      <v-progress-linear
        v-slot:progress
        color="blue"
        indeterminate
      ></v-progress-linear>
      <template v-slot:items="props">
        <td class="justify-center layout px-0">
          <v-icon @click="goToInmate(props.item.id)" small>edit</v-icon>
          <v-icon @click="deleteInmate(props.item.id)" small>delete</v-icon>
        </td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.moderator }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.reason }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('getInmates')
  },
  data() {
    return {
      headers: [
        { text: '', sortable: false, width: '50' },
        {
          text: 'Date',
          value: 'date'
        },
        { text: 'Moderator', sortable: false },
        { text: 'Inmate', value: 'string' },
        { text: 'Reason', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      inmates: state => state.inmates
    })
  },
  methods: {
    goToInmate(id) {
      this.$router.push({ name: 'EditInmate', params: { id } })
    },
    deleteInmate(id) {
      this.$store.commit('deleteInmate', id)
    }
  }
}
</script>
