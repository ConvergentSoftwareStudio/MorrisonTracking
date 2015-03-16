morrisonApp.controller("RecentDeliveriesCtrl", function ($scope) {
    $scope.RecentDeliveriesData = recentDeliveriesData;
    $scope.RecentDeliveriesColumnData = [{ field: 'AWB', displayName: 'AWB' },
                                                                                    { field: 'shipDate', displayName: 'Ship Date' },
                                                                                        { field: 'commitDate', displayName: 'Commit Date' },
                                                                                            { field: 'origin', displayName: 'Origin' },
                                                                                                { field: 'destination', displayName: 'Destination' },
                                                                                    { field: 'signature', displayName: 'Signature' },
                                                                                        { field: 'date', displayName: 'Date' }];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.recentDeliveriesGrid = {
        data: 'RecentDeliveriesData',
        columnDefs: 'RecentDeliveriesColumnDefinitions',
        selectedItems: [],
        multiSelect: false
    }

});