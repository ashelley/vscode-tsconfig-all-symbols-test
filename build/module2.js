var MyProject;
(function (MyProject) {
    var Bar = (function () {
        function Bar() {
        }
        Bar.prototype.toString = function () {
            return "bar";
        };
        return Bar;
    }());
    MyProject.Bar = Bar;
})(MyProject || (MyProject = {}));
