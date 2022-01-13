<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 login-left">
        <landing-left-side></landing-left-side>
      </div>
      <div class="col-6">
        <div class="p-5 register-wrapper">
          <div>
            <h3>Create Account</h3>
            <p>Fill in the form below to get started</p>
            <b-form class="mt-3">
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="First Name"
                    label-for="firstname"
                  >
                    <b-form-input
                      id="input-1"
                      type="firstname"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Last Name"
                    label-for="lastname"
                  >
                    <b-form-input
                      id="lastname"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-email"
                    label="Email address"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-phone"
                    label="Phone"
                    label-for="phone"
                  >
                    <b-form-input
                      id="phone"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group
                id="input-group-linkedin"
                label="LinkedIn URL or other professional page"
                label-for="linkedin"
              >
                <b-form-input id="linkedin" type="text" required></b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
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
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-passconfirm"
                    label="Confirm Password"
                    label-for="passconfirm"
                  >
                    <b-form-input
                      id="input-passconfirm"
                      type="password"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
             
							<div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I am willing to be a peer reviewer</a>
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Agree to <a href="">terms & conditions</a>
                </label>
              </div>
            </b-form>
            <!-- <b-link class="btn" to="list">Forgot Password?</b-link> -->
						<b-row>
							<b-col class="text-end mt-3"> 
								<b-link class="btn btn-primary btn-full" to="list">Submit</b-link>
							</b-col>
						</b-row>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingLeftSide from "~/components/landingLeftSide.vue";

export default {
  data() {
    return {
      reviewer: false,
    };
  },
};
</script>

<style>
.register-wrapper .btn {
    width: 100%;
    max-width: 150px;
}
</style>