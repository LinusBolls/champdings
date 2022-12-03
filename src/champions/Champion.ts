export abstract class Champion {

    readonly name: string;
    readonly totalAd: number;

    constructor(name: string, totalAd: number) {

        this.name = name;
        this.totalAd = totalAd;
    }
    autoAttack() {

        return this.totalAd;
    }
}
