morrisonApp.controller("InOutCtrl", function ($scope) {
    $scope.InOutData = inOutData;
    $scope.InOutColumnData = [{ field: 'whse', displayName: 'WHSE' },
                                                                                    { field: 'date', displayName: 'Date' },
                                                                                        { field: 'in', displayName: 'In' }];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.inOutGrid = {
        data: 'InOutData',
        columnDefs: 'InOutColumnDefinitions',
        selectedItems: [],
        multiSelect: false
    }

});