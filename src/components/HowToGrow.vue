<template>
  <div class="howtogrow">
    <h1>{{ msg }}</h1>
    <h1>しょくぶつのそだてかたをかくよ</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th v-for="(value, key) in columns">{{ value }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks">
            <td v-for="(value, key) in columns">{{ task[key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToGrow",
  props: {
    msg: String
  },
  data: function() {
    var columns = {
      id: "ID",
      subject: "件名",
      category: "カテゴリ",
      date: "日付"
    };
    var sortOrders = {};
    Object.keys(columns).forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      columns: columns,
      tasks: [
        {
          id: 1,
          subject: "タスク1",
          category: "カテゴリー1",
          date: "2016-12-01"
        }
      ],
      sortKey: "",
      sortOrders: sortOrders
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
