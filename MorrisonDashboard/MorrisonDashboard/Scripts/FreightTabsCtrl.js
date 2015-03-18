morrisonApp.controller("FreightTabsCtrl", function ($scope) {
 
    $scope.hideTabsExcept = function (tabIndex, tabCount) {
        $scope.tabClasses = _.range(tabCount).map(function () { return 'horizontalUnselectedTab' });
        $scope.tabs = _.range(tabCount).map(function () { return false });

        $scope.tabs[tabIndex] = true;
        $scope.tabClasses[tabIndex] = "horizontalSelectedTab";
    }
    $scope.hideTabsExcept(0, 4);
});