<template>
  <div v-if="currentUsers" class="w-full m-auto">
    <h4>Editar Usuarios</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentUsers.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          v-model="currentUsers.email"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          v-model="currentUsers.gender"
        />
      </div>
      <div class="form-group">
        <label for="message">message</label>
        <input
          type="text"
          class="form-control"
          id="message"
          v-model="currentUsers.message"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentUsers.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="btn btn-danger mr-2" @click="deleteUsers">
      Delete
    </button>

    <button type="submit" class="btn btn-warning" @click="updateUsers">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Users...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersDataService from "../services/UsersDataService";

@Component
export default class Edit extends Vue {
  private currentUsers: any = null;
  private message = "";

  getUsers(id: string) {
    UsersDataService.get(id)
      .then((response) => {
        this.currentUsers = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data = {
      id: this.currentUsers.id,
      name: this.currentUsers.name,
      email: this.currentUsers.email,
      message: this.currentUsers.message,
      published: status,
    };

    UsersDataService.put(this.currentUsers.id, data)
      .then((response) => {
        this.currentUsers.published = status;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateUsers() {
    UsersDataService.put(this.currentUsers.id, this.currentUsers)
      .then((response) => {
        console.log(response.data);
        this.message = "The users was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteUsers() {
    UsersDataService.delete(this.currentUsers.id)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ name: "users" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    this.getUsers(this.$route.params.id);
  }
}
</script>

<style scoped></style>
