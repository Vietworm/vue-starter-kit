<template>
  <div class="profile">

    <div class="loading" v-if="loading">
      One Moment...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="profile" class="content">
      <img :src="profile.avatar_url" :alt="profile.name">
      <h2>{{ profile.name }}</h2>
      <h4>{{ profile.company }}</h4>
      <p>{{ profile.updated_at|moment }}</p>
      <a href="#">{{ profile.url }}</a>
    </div>
  </div>
</template>
<!-- Data Fetching: Fetching after navigation -->
<script>
  export default {
    name: 'profile',
    data () {
      return {
        msg: 'Welcome to Profile page',
        loading: false,
        profile: null,
        error: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        const self = this
        this.error = this.profile = null
        this.loading = true
        this.$http.get('https://api.github.com/users/' + this.$route.params.username).then(function (data) {
          setTimeout(function () {
            self.profile = data.body
            self.loading = false
          }, 1000)
        }).catch(function (error) {
          self.error = error
        })
      }
    },
    filters: {
      moment: function (date) {
        return 'Last update: ' + date
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  img {
    height: 120px;
    border-radius: 3%;
  }
</style>
