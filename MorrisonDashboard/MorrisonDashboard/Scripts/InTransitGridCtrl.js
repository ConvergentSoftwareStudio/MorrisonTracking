morrisonApp.controller("InTransitGridCtrl", function ($scope) {
    $scope.InTransitGridData = inTransitGridData;
    $scope.MilestoneData = milestoneData;
    $scope.InTransitGridColumnDefinitions = [{ field: 'AWB', displayName: 'AWB' }, { field: 'shipper', displayName: 'Shipper' },
                                { field: 'consignee', displayName: 'Consignee' }];

    // Shipments is the data for the grid (in quotes, which is weird, but that's how AngularJS wants it)
    // We also provide the column definitions
    $scope.inTransitGrid = {
        data: 'InTransitGridData',
        columnDefs: 'InTransitGridColumnDefinitions',
        selectedItems: [],
        multiSelect: false,
        rowTemplate: '<div ng-style="{ \'background-color\' : getColorCoding(row.entity) }" >' +
                                    '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}">' +
                                        '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>' +
                                        '<div ng-cell></div>' +
                                    '</div>' +
                              '</div>'
    }

    $scope.getColorCoding = function (row) {
        var dateDue, dateCompleted, color = "green";

        for (var i = 0; i < $scope.MilestoneData.length; i++) {
            if ($scope.MilestoneData[i].AWB == row.AWB) {
                dateDue = new Date($scope.MilestoneData[i].DateDue);
                if ($scope.MilestoneData[i].DateCompleted == "") {
                    if (dateDue < currentDate) {
                        color = "red";
                    } else {
                        if (dateDue.getTime() === currentDate.getTime()) {
                            color = "yellow";
                        }
                    }
                    break;
                }
            }
        }
        return color;
    }
});