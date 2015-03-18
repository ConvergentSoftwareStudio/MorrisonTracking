morrisonApp.controller("UsageGridCtrl", function ($scope) {
    $scope.UsageGridData = usageGridData;
    $scope.UsageGridColumnData = [{ field: 'whse', displayName: 'WHSE' },
                                                                                    { field: 'type', displayName: 'Type' },
                                                                                        { field: 'avail', displayName: 'Avail' },
                                                                                            { field: 'used', displayName: 'Used' }];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.usageGrid = {
        data: 'UsageGridData',
        columnDefs: 'UsageGridColumnData',
        selectedItems: [],
        multiSelect: false
    }

});