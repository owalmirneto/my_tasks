function TasksCtrl($scope, $http) {
  $http.get("/tasks.json").success(function(data) {
    $scope.tasks = data;
    console.log(data);
  });
}