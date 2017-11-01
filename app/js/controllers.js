angular.module('ecommerce.controllers', [])
    .controller('BemVindoController', function($scope, $http) {
        $scope.init = function() {
            
            $scope.listaCategorias = {}
            
           /* $http({
                method: 'GET',
                url: '/api/categoria/consultar.php?retornar_imagem=sim'
            }).then(function(response) {
                $scope.listaCategorias = response.data;
            });*/
            
             $http.get('/api/categoria/consultar.php', {
                 params: { retornar_imagem : 'sim'}
             }).then(function(response) {
                    $scope.listaCategorias = response.data;
                });
        }
    })
    
    .controller('CategoriaController', function($scope, $http) {
        
        $scope.listaCategorias = {};
        $scope.listaProdutos = {};
        
        $scope.init = function() {
            $http.get('/api/categoria/consultar.php')
                .then(function(response) {
                    $scope.listaCategorias = response.data;
                });
                
            $http.get('/api/produto/consultar.php',{
                    params: {categoria : 2, retornar_imagem : true}
                }).then(function(response) {
                   $scope.listaProdutos = response.data; 
                });
        }
        
    });
