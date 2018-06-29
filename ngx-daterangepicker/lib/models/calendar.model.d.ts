export declare class Matrix {
    today: boolean;
    off: boolean;
    available: boolean;
    active: boolean;
    inRange: boolean;
    startDate: boolean;
    endDate: boolean;
    weekend: boolean;
    disabled: boolean;
    constructor();
}
export declare class Calendar {
    month: any;
    dateHtml: string;
    calendar: Calendar;
    calendarForView: any[][];
    matrix: Matrix[][];
    constructor();
}
