<template>
  <div>
    <div class="row">
      <div class="col">
        <h4>Dr Jason James (jjames@gmail.com) - 10 Nov 2021</h4>
        <b-form-group label="Reviewer comments">
          <div class="form-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviewTab",
  props: {
    bias: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      statusOptions: ["Pending Review", "Submitted", "Confirmed", "Rejected"],
    };
  },
};
</script>

<style lang="scss" scoped >
</style>