<template>
  <div class="profile">
    <div class="profile__photo-wrapper">
      <img :src="photo" alt="userPhoto" class="profile__photo" />
    </div>
    <div class="profile__name">Name: {{ getFullName }}</div>
    <div class="profile__age">Age: {{ getCurrentAge }} y.o.</div>
    <div class="profile__position">Position: {{ position }}</div>
  </div>
</template>

<script>
export default {
  name: 'Profile',

  props: {
    photo: {
      type: String,
      default: ''
    },

    firstName: {
      type: String,
      default: ''
    },

    lastName: {
      type: String,
      default: ''
    },

    birthDate: {
      type: String,
      default: ''
    },

    position: {
      type: String,
      default: ''
    }
  },

  computed: {
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    getCurrentAge() {
      return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__photo-wrapper {
    max-width: 200px;
  }

  &__photo {
    width: 100%;
  }
}
</style>
