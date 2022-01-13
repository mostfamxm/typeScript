class Pen {
    constructor(size, year, type, color) {
        this._size = size;
        this._year = year;
        this._type = type;
        this.color = color;
    }
    isWaterBased() {
        return true;
    }
    set Size(size) { if (size === 0.4 || size === 0.5 || size === 0.7)
        this._size = size; }
    get Size() { return this._size; }
    set Year(year) { if (year >= 2018 && year <= 2021)
        this._year = year; }
    get Year() { return this._year; }
    set Type(type) { if (type === 'gel' || type === 'ink' || type === 'brush')
        this._type = type; }
    get Type() { return this._type; }
}
//# sourceMappingURL=Pen.js.map