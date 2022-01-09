<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 login-left">
        <landing-left-side></landing-left-side>
      </div>
      <div class="col-6">
        <div class="p-5 login-wrapper">
			<div>
          <h3>Sign in</h3>
          <p>
            Don’t have account? <b-link to="register">Create account</b-link>
          </p>
          <b-form class="mt-3">
            <b-form-group
              id="input-group-1"
              label="Email address"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="email"
                required
              ></b-form-input>
            </b-form-group>
			<b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
		   <!-- <b-link class="btn" to="list">Forgot Password?</b-link> -->
          <b-link class="btn btn-primary btn-full" to="list">Sign In</b-link>
        </div>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingLeftSide from "~/components/landingLeftSide.vue";

export default {};
</script>

<style>
</style>