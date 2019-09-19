"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function switchMap(convert) {
    return function (next, error) {
        var current;
        return function (value) {
            current = value;
            convert(value).then(function (res) {
                if (value === current) {
                    next(res);
                }
            }).catch(error);
        };
    };
}
exports.switchMap = switchMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLFNBQVMsQ0FBVSxPQUFnQztJQUVqRSxPQUFPLFVBQUMsSUFBaUIsRUFBRSxLQUF5QjtRQUVsRCxJQUFJLE9BQVUsQ0FBQztRQUVmLE9BQU8sVUFBQyxLQUFRO1lBRWQsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUVoQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFFdEIsSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO29CQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1g7WUFFSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFBO0FBRUgsQ0FBQztBQXJCRCw4QkFxQkMifQ==