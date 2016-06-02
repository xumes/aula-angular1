angular
  .module('usuarios', [])

  .controller('usuariosCtrl', function($scope){
    $scope.usuarios = [
      {nome: "Reginaldo", cidade: "Mauá"},
      {nome: "Vinicius", cidade: "Sao Paulo"},
      {nome: "Sandra", cidade: "São Paulo"},
      {nome: "Marcos", cidade: "Rio de Janeiro"},
      {nome: "Enzo", cidade: "Niterói"},
      {nome: "Maria", cidade: "Niterói"}
    ];
  });
