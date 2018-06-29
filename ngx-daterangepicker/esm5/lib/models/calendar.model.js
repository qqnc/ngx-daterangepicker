/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as momentNs from 'moment';
var /** @type {?} */ moment = momentNs;
var Matrix = /** @class */ (function () {
    function Matrix() {
        this.today = false;
        this.off = false;
        this.available = false;
        this.active = false;
        this.inRange = false;
        this.startDate = false;
        this.endDate = false;
        this.weekend = false;
        this.disabled = false;
    }
    return Matrix;
}());
export { Matrix };
function Matrix_tsickle_Closure_declarations() {
    /** @type {?} */
    Matrix.prototype.today;
    /** @type {?} */
    Matrix.prototype.off;
    /** @type {?} */
    Matrix.prototype.available;
    /** @type {?} */
    Matrix.prototype.active;
    /** @type {?} */
    Matrix.prototype.inRange;
    /** @type {?} */
    Matrix.prototype.startDate;
    /** @type {?} */
    Matrix.prototype.endDate;
    /** @type {?} */
    Matrix.prototype.weekend;
    /** @type {?} */
    Matrix.prototype.disabled;
}
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.calendarForView = [];
        this.matrix = [];
        for (var /** @type {?} */ row = 0; row < 6; row++) {
            this.calendarForView[row] = [];
            this.matrix[row] = [];
            for (var /** @type {?} */ col = 0; col < 7; col++) {
                this.calendarForView[row][col] = moment();
                this.matrix[row][col] = new Matrix();
            }
        }
    }
    return Calendar;
}());
export { Calendar };
function Calendar_tsickle_Closure_declarations() {
    /** @type {?} */
    Calendar.prototype.month;
    /** @type {?} */
    Calendar.prototype.dateHtml;
    /** @type {?} */
    Calendar.prototype.calendar;
    /** @type {?} */
    Calendar.prototype.calendarForView;
    /** @type {?} */
    Calendar.prototype.matrix;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcXFuYy9uZ3gtZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jYWxlbmRhci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMscUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUV4QixJQUFBO0lBVUU7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2QjtpQkF2Qkg7SUF3QkMsQ0FBQTtBQXJCRCxrQkFxQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNELElBQUE7SUFPRTtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7YUFDdEM7U0FDRjtLQUNGO21CQTNDSDtJQTRDQyxDQUFBO0FBbkJELG9CQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnROcztcblxuZXhwb3J0IGNsYXNzIE1hdHJpeCB7XG4gIHRvZGF5OiBib29sZWFuO1xuICBvZmY6IGJvb2xlYW47XG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBpblJhbmdlOiBib29sZWFuO1xuICBzdGFydERhdGU6IGJvb2xlYW47XG4gIGVuZERhdGU6IGJvb2xlYW47XG4gIHdlZWtlbmQ6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZGF5ID0gZmFsc2U7XG4gICAgdGhpcy5vZmYgPSBmYWxzZTtcbiAgICB0aGlzLmF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pblJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydERhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmVuZERhdGUgPSBmYWxzZTtcbiAgICB0aGlzLndlZWtlbmQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDYWxlbmRhciB7XG4gIG1vbnRoOiBhbnk7XG4gIGRhdGVIdG1sOiBzdHJpbmc7XG4gIGNhbGVuZGFyOiBDYWxlbmRhcjtcbiAgY2FsZW5kYXJGb3JWaWV3OiBhbnkgW11bXTtcbiAgbWF0cml4OiBNYXRyaXggW11bXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbGVuZGFyRm9yVmlldyA9IFtdO1xuICAgIHRoaXMubWF0cml4ID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNjsgcm93KyspIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJGb3JWaWV3W3Jvd10gPSBbXTtcbiAgICAgIHRoaXMubWF0cml4W3Jvd10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDc7IGNvbCsrKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJGb3JWaWV3W3Jvd11bY29sXSA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLm1hdHJpeFtyb3ddW2NvbF0gPSBuZXcgTWF0cml4KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=