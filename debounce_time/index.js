"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounceTime(dueTime) {
    return function (fn) {
        var timer;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(void 0, args);
            }, dueTime);
        };
    };
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLFlBQVksQ0FBQyxPQUFlO0lBRTFDLE9BQU8sVUFBQyxFQUFZO1FBRWxCLElBQUksS0FBYSxDQUFDO1FBRWxCLE9BQU87WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBRXBCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwQixLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUNqQixFQUFFLGVBQUksSUFBSSxFQUFFO1lBQ2QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWQsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQWhCRCxvQ0FnQkMifQ==