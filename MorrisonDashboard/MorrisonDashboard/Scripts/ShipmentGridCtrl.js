morrisonApp.controller("ShipmentGridCtrl", function ($scope) {
    $scope.ShipmentGridData = shipmentGridData;
    $scope.ShipmentGridColumnData = [      { field: 'AWB', displayName: 'AWB' },
                                                                        { field: 'shipDate', displayName: 'Ship Date' },
                                                                        { field: 'dueDate', displayName: 'Due Date' },
                                                                        { field: 'origin', displayName: 'Origin' },
                                                                        { field: 'ORG', displayName: 'ORG' },
                                                                        { field: 'destination', displayName: 'Destination' },
                                                                        { field: 'DST', displayName: 'DST' },
                                                                        { field: 'pcs', displayName: 'Pcs' },
                                                                        { field: 'wgt', displayName: 'Wgt' },
                                                                        { field: 'status', displayName: 'Status' }
    ];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.shipmentGrid = {
        data: 'ShipmentGridData',
        columnDefs: 'ShipmentGridColumnData',
        selectedItems: [],
        multiSelect: false
    }

});