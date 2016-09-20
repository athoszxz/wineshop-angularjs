/*jslint white:true*/
/*global angular, bootbox*/
angular.module("wineshop").controller('finalizarPedidoCtrl', function ($scope, $cookies, $state, KEYS, pedidoService) {

    "use strict";

    var verificaPedidoAtual = function () {
        $scope.pedido = $cookies.getObject(KEYS.pedidoAtual);
        if (!$scope.pedido) {
            $state.go("main.novoPedido");
        }else {
            pedidoService.calcularTotais($scope.pedido).then(function (response) {
                $scope.pedido = response.data;
            }, function (response) {
                console.log("Erro: "+response.statusText);
            });
        }
    };

    verificaPedidoAtual();

});