interface Livre {
    readonly titre: string, // readonly : une fois la propriété initialisée, on ne peut plus la modifier.
    nbrePages: number,
    genre: 'action' | 'romance',
    nomAuteur?: string,

    lire?: () => void;
}

interface LivrePoche extends Livre {
    reduction: number;
}

const monlivre: LivrePoche = {
    titre: 'mon super livre',
    nbrePages: 150,
    genre: 'romance',
    reduction:15,
}

monlivre.nbrePages = 160;

interface LivrePoche extends Livre {
    reduction: number;
}
