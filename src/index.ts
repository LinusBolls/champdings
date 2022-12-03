import env from './env';

import { Seraphine } from './champions/Seraphine';
import { Champion } from './champions/Champion';

const sera = new Seraphine()

function doSomethingToChampion(champ: Champion) {

    console.log(champ.autoAttack())
}
doSomethingToChampion(sera)