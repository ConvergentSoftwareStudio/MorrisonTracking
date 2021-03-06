﻿morrisonApp.controller("InTransitCtrl", function ($scope) {
    $scope.InTransitData = inTransitData;
    $scope.InTransitColumnDefinitions = [{ field: 'AWB', displayName: 'AWB' }, { field: 'shipper', displayName: 'Shipper' },
                                { field: 'consignee', displayName: 'Consignee' }];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.inTransitGrid = {
        data: 'InTransitData',
        columnDefs: 'InTransitColumnDefinitions',
        selectedItems: [],
        multiSelect: false // ,
        //rowTemplate: '<div ng-style="{ \'background-color\' : getColorCoding(row.entity) }" >' +
        //                            '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}">' +
        //                                '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>' +
        //                                '<div ng-cell></div>' +
        //                            '</div>' +
        //                      '</div>'
    }
});