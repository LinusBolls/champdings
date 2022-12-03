import env from './env';

class Champion {

    readonly name: string
    readonly totalAd: number

    constructor(name: string, totalAd: number) {

        this.name = name
        this.totalAd = totalAd
    }
    autoAttack() {

        return this.totalAd
    }
}
class Seraphine extends Champion {

    constructor() {

        super("Seraphine", 69)
    }
}
const sera = new Seraphine()