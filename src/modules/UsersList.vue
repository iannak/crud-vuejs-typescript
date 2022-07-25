<template>
  <div class="text-left m-50 m-auto row">
    <div class="input-group-append">
      <Input
        v-model="name"
        class="col-md-4 h-100"
        placeholder="Search"
        @search="searchName"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="searchName"
      >
        Buscar
      </button>
    </div>
    <div class="col-md-6 mt-4">
      <h4>Listagem de Usuarios</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(users, index) in users"
          :key="index"
          @click="setActiveUsers(users, index)"
        >
          {{ users.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentUsers">
        <h4>Dados Details</h4>
        <div>
          <label><strong>ID:</strong></label> {{ currentUsers.id }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentUsers.name }}
        </div>
        <div>
          <label><strong>message:</strong></label>
          {{ currentUsers.message }}
        </div>
        <div>
          <label><strong>email:</strong></label>
          {{ currentUsers.email }}
        </div>
        <div>
          <label><strong>gender:</strong></label>
          {{ currentUsers.gender }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentUsers.published ? "Published" : "Pending" }}
        </div>
        <a :href="'users/' + currentUsers.id" class="color-primary">
          Edit
        </a>
      </div>
      <div v-else class="mt-4">
        <br />
        <p>Please click on a Users...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersDataService from "../services/UsersDataService";

@Component
export default class UsersList extends Vue {
  private users: any[] = [];
  private currentUsers: any = null;
  private currentIndex = -1;
  private name = "";

  retrieveUsers() {
    UsersDataService.getAll()
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.currentUsers = null;
    this.currentIndex = -1;
  }

  setActiveUsers(users: any, index: number) {
    this.currentUsers = users;
    this.currentIndex = index;
  }

  removeAllUsers() {
    UsersDataService.delete(this.users[this.currentIndex].id)
      .then((response) => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchName() {
    UsersDataService.findByTitle(this.name)
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.retrieveUsers();
  }
}
</script>

<style scoped></style>
