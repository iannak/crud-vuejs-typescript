<template>
  <div class="w-50 m-auto">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="users.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="users.email"
          email="email"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          required
          v-model="users.gender"
          gender="gender"
        />
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <input
          type="text"
          class="form-control"
          id="status"
          required
          v-model="users.status"
          status="status"
        />
      </div>

      <div class="form-group">
        <label for="message">message</label>
        <input
          class="form-control"
          id="message"
          required
          v-model="users.message"
          name="message"
        />
      </div>

      <button @click="saveUsers" class="btn btn-success mt-2">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUsers">Adicionar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersDataService from "../services/UsersDataService";
@Component
export default class AddUsers extends Vue {
  private users: any = {
    id: null,
    name: "",
    email: "",
    gender: "",
    status: "",
    message: "",
  };
  private submitted = false;

  saveUsers() {
    const data = {
      name: this.users.name,
      email: this.users.email,
      gender: this.users.gender,
      status: this.users.status,
      message: this.users.message,
    };
    UsersDataService.create(data)
      .then((response) => {
        this.users.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newUsers() {
    this.submitted = false;
    this.users = {};
  }
}
</script>

<style scoped></style>
