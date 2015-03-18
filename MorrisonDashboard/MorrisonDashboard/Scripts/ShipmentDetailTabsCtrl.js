morrisonApp.controller("ShipmentDetailTabsCtrl", function ($scope) {

    // this is for a tab control accessible from home screen... but what to do about the other screen 
    $scope.hideTabsExcept = function (tabIndex, tabCount) {
        $scope.tabClasses = _.range(tabCount).map(function () { return 'horizontalUnselectedTab' });
        $scope.tabs = _.range(tabCount).map(function () { return false });

        $scope.tabs[tabIndex] = true;
        $scope.tabClasses[tabIndex] = "horizontalSelectedTab";
    }
    $scope.hideTabsExcept(0, 4);
});