morrisonApp.controller("ShipmentGridCtrl", function ($scope, ngDialog) {
    $scope.ShipmentGridData = shipmentGridData;
    $scope.ShipmentGridColumnData = [{ field: 'AWB', displayName: 'AWB', width: 100, cellTemplate: '<div ng-click="openShipmentDetails(row.entity[col.field])" class="link">{{row.entity[col.field]}}</div>' },
                                                                        { field: 'shipDate', displayName: 'Ship Date' },
                                                                        { field: 'dueDate', displayName: 'Due Date' },
                                                                        { field: 'origin', displayName: 'Origin' },
                                                                        { field: 'ORG', displayName: 'ORG' },
                                                                        { field: 'destination', displayName: 'Destination' },
                                                                        { field: 'DST', displayName: 'DST' },
                                                                        { field: 'pcs', displayName: 'Pcs', width: 40 },
                                                                        { field: 'wgt', displayName: 'Wgt', width: 40 },
                                                                        { field: 'status', displayName: 'Status', width: 40 }
    ];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.shipmentGrid = {
        data: 'ShipmentGridData',
        columnDefs: 'ShipmentGridColumnData',
        selectedItems: [],
        multiSelect: false
    }

    $scope.openShipmentDetails = function (awb) {
        console.log(awb);
        ngDialog.open({
            template: 'shipmentDetailTabs.html',
            width: 800
        });
    }

});