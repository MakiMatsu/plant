<template>
  <aside
    class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-dark"
  >
    <p class="menu-label is-hidden-touch has-text-white">Navigation</p>
    <ul class="menu-list">
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span> Home
        </a>
      </li>
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 1 }" @click="changeActiveLink(1)">
          <span class="icon">
            <i class="fa fa-book"></i>
          </span> Chat
        </a>
      </li>
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 10 }" @click="changeActiveLink(10)">
          <span class="icon is-small">
            <i class="fa fa-link"></i>
          </span> SNS
        </a>
      </li>
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 13 }" @click="changeActiveLink(13)">
          <span class="icon">
            <i class="fa fa-info"></i>
          </span> About
        </a>
      </li>
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 15 }" @click="changeActiveLink(15)">
          <span class="icon">
            <i class="fa fa-info"></i>
          </span> How to grow
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeNum: 0
    };
  },
  methods: {
    changeActiveLink(n) {
      this.activeNum = n;
      if (n == 0) {
        this.$router.push("/");
      } else if (n == 1) {
        this.$router.push("/login");
      } else if (n == 10) {
        this.$router.push("/sns");
      } else if (n == 13) {
        this.$router.push("/about");
      } else if (n == 15) {
        this.$router.push("/howtogrow");
      }
    }
  }
};
</script>