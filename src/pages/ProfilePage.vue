<template>
  <div class="profile-page">
    <Profile
      :photo="getProfileInfo.avatar"
      :first-name="getProfileInfo.first_name"
      :last-name="getProfileInfo.last_name"
      :birth-date="getProfileInfo.date_of_birth"
      :position="getPosition"
    />
    <router-link to="/beer-info" class="profile-page__btn">
      What beer I want to drink today?
    </router-link>
  </div>
</template>

<script>
import Profile from '@/components/Profile/Profile';

export default {
  name: 'ProfilePage',

  components: { Profile },

  data() {
    return {
      profileInfo: null,
      errorMessage: null
    };
  },

  computed: {
    getProfileInfo() {
      return this.profileInfo || {};
    },

    getPosition() {
      return this.profileInfo?.employment?.title || '';
    }
  },

  async mounted() {
    try {
      const response = await fetch(
        'https://random-data-api.com/api/users/random_user'
      );
      const data = await response.json();

      if (data) {
        this.profileInfo = data;
      }
    } catch (error) {
      this.errorMessage = error;
      console.error('There was an error!', error);
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  &__btn {
    padding: 10px 15px;
    max-width: 170px;
    font-weight: 800;
    text-decoration: none;
    color: #7b3424;
    border-radius: 7px;
    border: 3px #7b3424 solid;
    background-color: #de4832;
  }
}
</style>
