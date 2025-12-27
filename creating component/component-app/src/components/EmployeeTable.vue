<template>
  <div>
    <h1>Employee Table</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>Software Engineer</td>
          <td>Development</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>Project Manager</td>
          <td>Management</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable"
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
