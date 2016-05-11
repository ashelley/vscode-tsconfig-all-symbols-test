var MyProject;
(function (MyProject) {
    var Foo = (function () {
        function Foo() {
        }
        Foo.prototype.toString = function () {
            return "foo";
        };
        return Foo;
    }());
    MyProject.Foo = Foo;
})(MyProject || (MyProject = {}));
