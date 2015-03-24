angular.module('setupVar', ['ngGrid']).controller("newUserSetupCtrl", function ($scope) {

    $scope.NewUserSetupData = newUserSetupData;
    $scope.NewUserSetupColumnDefinitions = [{ field: 'customerCode', displayName: 'Cust Code' },
                                { field: 'customerName', displayName: 'Cust Name'}, 
                                { field: 'shp', displayName: 'Shipper', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'},
                                { field: 'con', displayName: 'Consignee', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'},
                                { field: 'bill', displayName: 'Bill', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'},
                                { field: 'seeCharges', displayName: 'See Charges', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'},
                                { field: 'createShipment', displayName: 'Create Shipment', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'},
                                { field: 'statusUpdateRequired', displayName: 'Update Req', cellTemplate: '<div><input id="active"  type="checkbox" ng-checked="row.entity.active==\'on\'" ng-input="COL_FIELD" ng-model="active" /></div>'}];

    $scope.newUserSetupGrid = {
        data: 'NewUserSetupData',
        columnDefs: 'NewUserSetupColumnDefinitions',
        selectedItems: [],
        multiSelect: false
    }

});