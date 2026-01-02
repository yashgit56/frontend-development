var Employee = /** @class */ (function () {
    function Employee(name) {
        var _this = this;
        this.setName = function (name) {
            console.log(_this);
            _this.name = name;
        };
        this.getName = function () {
            console.log(_this);
            return _this.name;
        };
        this.name = name;
    }
    return Employee;
}());
var employee = new Employee("Yash");
// console.log(employee, " ", employee.getName());
employee.setName("Aryan");
// console.log(employee, " ", employee.getName());
// Members: Visibility
// Class members can also be given special modifiers that affect visibility.
