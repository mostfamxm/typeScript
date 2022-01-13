class OilPaints {
    constructor(price, quality, color) {
        this._price = price;
        this._quality = quality;
        this.color = color;
    }
    isWaterBased() {
        return false;
        ;
    }
    set Price(price) { this._price = price; }
    get Price() { return this._price; }
    set Quality(quality) { if (quality === 'low' || quality === 'medium' || quality === 'high')
        this._quality = quality; }
    get Quality() { return this._quality; }
}
//# sourceMappingURL=OilPaints.js.map