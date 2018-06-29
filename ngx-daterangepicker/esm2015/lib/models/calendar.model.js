/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as momentNs from 'moment';
const /** @type {?} */ moment = momentNs;
export class Matrix {
    constructor() {
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
}
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
export class Calendar {
    constructor() {
        this.calendarForView = [];
        this.matrix = [];
        for (let /** @type {?} */ row = 0; row < 6; row++) {
            this.calendarForView[row] = [];
            this.matrix[row] = [];
            for (let /** @type {?} */ col = 0; col < 7; col++) {
                this.calendarForView[row][col] = moment();
                this.matrix[row][col] = new Matrix();
            }
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcXFuYy9uZ3gtZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9jYWxlbmRhci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMsdUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUV4QixNQUFNO0lBVUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2QjtDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxNQUFNO0lBT0o7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixHQUFHLENBQUMsQ0FBQyxxQkFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcbiAgdG9kYXk6IGJvb2xlYW47XG4gIG9mZjogYm9vbGVhbjtcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGluUmFuZ2U6IGJvb2xlYW47XG4gIHN0YXJ0RGF0ZTogYm9vbGVhbjtcbiAgZW5kRGF0ZTogYm9vbGVhbjtcbiAgd2Vla2VuZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kYXkgPSBmYWxzZTtcbiAgICB0aGlzLm9mZiA9IGZhbHNlO1xuICAgIHRoaXMuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMud2Vla2VuZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIHtcbiAgbW9udGg6IGFueTtcbiAgZGF0ZUh0bWw6IHN0cmluZztcbiAgY2FsZW5kYXI6IENhbGVuZGFyO1xuICBjYWxlbmRhckZvclZpZXc6IGFueSBbXVtdO1xuICBtYXRyaXg6IE1hdHJpeCBbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsZW5kYXJGb3JWaWV3ID0gW107XG4gICAgdGhpcy5tYXRyaXggPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA2OyByb3crKykge1xuICAgICAgdGhpcy5jYWxlbmRhckZvclZpZXdbcm93XSA9IFtdO1xuICAgICAgdGhpcy5tYXRyaXhbcm93XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNzsgY29sKyspIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhckZvclZpZXdbcm93XVtjb2xdID0gbW9tZW50KCk7XG4gICAgICAgIHRoaXMubWF0cml4W3Jvd11bY29sXSA9IG5ldyBNYXRyaXgoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==