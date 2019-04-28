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
          <v-icon small>edit</v-icon>
        </td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.moderator }}</td>
        <td>{{ props.item.inmate }}</td>
        <td>{{ props.item.reason }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
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
      ],
      inmates: [
        {
          date: '2019-04-28',
          inmate: 'Troll',
          moderator: 'MadCat',
          reason: 'Trolling',
          url: 'https://google.de'
        },
        {
          date: '2019-04-27',
          inmate: 'Troll 2',
          moderator: 'DarkFantasy[me]',
          reason: 'Trolling',
          url: 'https://google.de'
        }
      ]
    }
  }
}
</script>
