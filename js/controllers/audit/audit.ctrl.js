jboss

    .controller("AuditCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout,BaseService) {


        //表单数据
        $scope.fm = {
            provice : "",
            area  : "",
            city : "",
            schoolId : ""
        }


        //是否显示新信息
        $scope.isMsgShow = false;

        //省数据
        $scope.provices =[];
        $scope.citys = [];


        BaseService.getArea().then(function(res){

            $scope.provices = res;
        }).then(function(err){
            console.log(err);
        });


        //修改学校
        this.updateSchool = function(){
            $scope.isMsgShow = false;
        }


        //显示学校
        this.showSchool = function(){
            $scope.isMsgShow = true;
        }

        this.selectProvice = function($item, $model, $label){
            console.log($item);
        }

    });