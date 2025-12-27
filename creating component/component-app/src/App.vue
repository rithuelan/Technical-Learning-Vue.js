<template>
  <div>
    <h1>Employee List</h1>
    <EmployeeTable />
  </div>
</template>

<script>
import EmployeeTable from "./components/EmployeeTable.vue"

export default {
  name: "EmployeeList",
  components: {
    EmployeeTable
  }
}
</script>

<style>
  
</style>
