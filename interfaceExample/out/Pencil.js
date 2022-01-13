class Pencil {
    constructor(company, size, hasEraser, color) {
        this._company = company;
        this._size = size;
        this._hasEraser = hasEraser;
        this.color = color;
    }
    isWaterBased() {
        return false;
    }
    set Company(company) { this._company = company; }
    get Company() { return this._company; }
    set Size(size) { if (size === 2 || size === 1 || size === 3)
        this._size = size; }
    get Size() { return this._size; }
    set HasEraser(has) { this._hasEraser = has; }
    get HasEraser() { return this._hasEraser; }
}
//# sourceMappingURL=Pencil.js.map