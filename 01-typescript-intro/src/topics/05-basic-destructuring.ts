interface AudioPLayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPLayer: AudioPLayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const newSong = 'New Song';

const {
    song: anotherSong,
    songDuration: duration,
    details: {
        author,
        year
    }
} = audioPLayer;

// const { author: detailsAuthor, year: detailsYear } = audioPLayer.details;

console.log({ newSong, anotherSong, duration, author, year });
// console.log('Song: ', audioPLayer.song);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[3] || 'No hay personaje';

console.error('Personaje 3: ', trunks);

const [, , p3 = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', p3);

export { };