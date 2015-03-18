morrisonApp.controller("IndexTabsCtrl", function ($scope) {
    $scope.hideTabsExcept = function (tabIndex, tabCount) {
        $scope.tabClasses = _.range(tabCount).map(function () { return 'verticalUnselectedTab' });
        $scope.tabs = _.range(tabCount).map(function () { return false });

        $scope.tabs[tabIndex] = true;
        $scope.tabClasses[tabIndex] = "verticalSelectedTab";
    }
    $scope.hideTabsExcept(0, 3);
});