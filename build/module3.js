var MyProject;
(function (MyProject) {
    var Biz = (function () {
        function Biz() {
            var foo = new MyProject.Foo();
        }
        Biz.prototype.toString = function () {
            return "biz";
        };
        return Biz;
    }());
    MyProject.Biz = Biz;
})(MyProject || (MyProject = {}));
