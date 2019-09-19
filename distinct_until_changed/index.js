"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function distinctUntilChanged(fn) {
    var preValue, isFirstTime = true;
    return function (value) {
        if (preValue !== value || isFirstTime) {
            isFirstTime = false;
            preValue = value;
            fn(value);
        }
    };
}
exports.distinctUntilChanged = distinctUntilChanged;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLG9CQUFvQixDQUFJLEVBQWtCO0lBRXhELElBQUksUUFBYSxFQUFFLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFFL0MsT0FBTyxVQUFDLEtBQVM7UUFFZixJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksV0FBVyxFQUFFO1lBRXJDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUVqQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFWDtJQUVILENBQUMsQ0FBQTtBQUNILENBQUM7QUFoQkQsb0RBZ0JDO0FBQUEsQ0FBQyJ9