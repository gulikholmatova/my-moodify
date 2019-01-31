const selectRandom = (arr,num) => {
  const output = [];
  while(output.length < num) {
    let idx = Math.floor(Math.random() * (arr.length - 1))
    output.push(arr[idx])
  }
  return output;
}

const joyGenreSeeds = ['American%20Popular%20Song', 'Bolero', 'Boogie%20Rock', 'British%20Folk-Rock', 'British%20Invasion', 'British%20Trad%20Rock', 'Celtic%20Pop', 'Close%20Harmony', 'Cumbia', 'Dance-Pop', 'Doo%20Wop', 'Dream%20Pop', 'Girl%20Group', 'Golden%20Age', 'Harmony%20Vocal%20Group', 'Heartland%20Rock', 'Jazz-Pop', 'Jazz-Rock', 'Latin%20Pop', 'Motown', 'Pop', 'Pop-Rap', 'Pop-Soul', 'Pop/Rock', 'R&B', 'Reggaeton', 'Retro-Rock', 'Retro-Soul', 'Rock', 'Rock%20&%20Roll', 'Traditional%20Pop', 'Vocal%20Pop']

const sorrowGenreSeeds = ['Acoustic%20Blues', 'Acoustic%20Chicago%20Blues', 'Acoustic%20Louisiana%20Blues', 'Acoustic%20Memphis%20Blues', 'Acoustic%20New%20Orleans%20Blues', 'Acoustic%20Texas%20Blues', 'African%20Jazz', 'Afro-Cuban%20Jazz', 'Alternative%20Singer/Songwriter', 'Bachata', 'Ballads', 'Blue-Eyed%20Soul', 'Blues', 'Blues%20Gospel', 'Blues%20Revival', 'Blues-Rock', 'British%20Blues', 'Brown-Eyed%20Soul', 'Celtic%20Folk', 'Chamber%20Jazz', 'Chicago%20Blues', 'Classic%20Female%20Blues', 'Classic%20Jazz', 'Classical%20Guitar', 'Contemporary%20Bluegrass', 'Contemporary%20Blues', 'Contemporary%20Folk', 'Contemporary%20Instrumental', 'Contemporary%20Jazz', 'Contemporary%20Singer/Songwriter', 'Continental%20Jazz', 'Country%20Blues', 'Country-Soul', 'Deep%20Soul', 'Detroit%20Blues', 'Early%20American%20Blues', 'East%20Coast%20Blues', 'Easy%20Listening', 'Electro-Acoustic', 'Finger-Picked%20Guitar', 'Folk%20Revival', 'Folk-Blues', 'Folk-Jazz', 'Harmonica%20Blues', 'Jazz', 'Jazz%20Blues', 'Juke%20Joint%20Blues', 'Latin%20Soul', 'Louisiana%20Blues', 'Lullabies', 'Mainstream%20Jazz', 'Memphis%20Blues', 'Memphis%20Soul', 'Modern%20Acoustic%20Blues', 'Modern%20Delta%20Blues', 'Neo-Traditional%20Folk', 'New%20Acoustic', 'New%20York%20Blues', 'Orchestral%20Jazz', 'Piano%20Blues', 'Piedmont%20Blues', 'Prewar%20Country%20Blues', 'Prewar%20Gospel%20Blues', 'Singer/Songwriter', 'Slide%20Guitar%20Blues', 'Smooth%20Jazz', 'Smooth%20Reggae', 'Smooth%20Soul', 'Soft%20Rock', 'Solo%20Instrumental', 'Soul', 'Soul-Blues', 'Soul-Jazz', 'St.%20Louis%20Blues', 'Texas%20Blues', 'Township%20Jazz', 'Traditional%20Bluegrass', 'Traditional%20Celtic', 'Traditional%20European%20Folk', 'Traditional%20Folk', 'Traditional%20Irish%20Folk', 'Traditional%20Native%20American', 'Urban%20Blues', 'Vocal%20Jazz', 'Waltz', 'West%20Coast%20Blues', 'West%20Coast%20Jazz']

const surpriseGenreSeeds = ['Ambient%20Techno', 'Americana', 'Aussie%20Rock', 'Barbershop%20Quartet', 'Baroque%20Pop', 'Belly%20Dancing', 'Bhangra', 'Big%20Band', 'Bossa%20Nova', 'Calypso', 'Cartoon%20Music', 'Deep%20Funk', 'Deep%20Funk%20Revival', 'Ethiopian%20Pop', 'Ethnic%20Fusion', 'Free%20Funk', 'Free%20Jazz', 'Glam%20Rock', 'Hardcore%20Rap', 'Japanese%20Pop', 'Jazz-Funk', 'Jazz-Rap', 'Korean%20Pop', 'Latin%20Jazz', 'Lo-Fi', 'Mambo', 'Mariachi', 'Middle%20Eastern%20Pop', 'Movie%20Themes', 'Musical%20Comedy', 'Musical%20Theater', 'Musicals', 'Nostalgia', 'Novelty', 'Old-School%20Rap', 'Rap-Rock', 'Reggae', 'Retro%20Swing', 'Rockabilly', 'Rockabilly%20Revival', 'Romantic', 'Sea%20Shanties', 'Show%20Tunes', 'Soundtrack', 'Soundtracks', 'Sports%20Anthems', 'Underground%20Rap', 'Video%20Game%20Music', 'Western%20Swing%20Revival', 'Zydeco']

const angerGenreSeeds = ['Alternative%20Metal', 'Alternative%20Pop/Rock', 'Alternative%20Rap', 'Ambient%20Breakbeat', 'American%20Punk', 'American%20Trad%20Rock', 'American%20Underground', 'Anarchist%20Punk', 'British%20Metal', 'British%20Punk', 'Christian%20Metal', 'Dark%20Ambient', 'Death%20Metal/Black%20Metal', 'Doom%20Metal', 'Experimental%20Rock', 'Experimental%20Techno', 'Funk%20Metal', 'G-Funk', 'Gangsta%20Rap', 'Garage%20Punk', 'Garage%20Rap/Grime', 'Garage%20Rock', 'Garage%20Rock%20Revival', 'Garage/House', 'Goth%20Metal', 'Goth%20Rock', 'Grindcore', 'Grunge', 'Hair%20Metal', 'Hardcore%20Punk', 'Hardcore%20Techno', 'Heavy%20Metal', 'Industrial%20Metal', 'L.A.%20Punk', 'Neo-Classical%20Metal', 'Neo-Prog', 'New%20Wave%20of%20British%20Heavy%20Metal', 'New%20Wave/Post-Punk%20Revival', 'New%20York%20Punk', 'Noise', 'Noise%20Pop', 'Noise-Rock', 'Pop-Metal', 'Post-Grunge', 'Post-Hardcore', 'Post-Punk', 'Post-Rock/Experimental', 'Power%20Metal', 'Prog-Rock/Art%20Rock', 'Progressive%20Alternative', 'Progressive%20House', 'Progressive%20Metal', 'Progressive%20Trance', 'Proto-Punk', 'Pub%20Rock', 'Punk', 'Punk%20Metal', 'Punk%20Revival', 'Punk-Pop', 'Rap-Metal', 'Scandinavian%20Metal', 'Screamo', 'Ska', 'Ska-Punk', 'Slowcore', 'Stoner%20Metal', 'Symphonic%20Black%20Metal', 'Third%20Wave%20Ska%20Revival']


console.log(selectRandom(joyGenreSeeds))
console.log('*****************************')
console.log(selectRandom(sorrowGenreSeeds))
console.log('*****************************')
console.log(selectRandom(surpriseGenreSeeds))
console.log('*****************************')
console.log(selectRandom(angerGenreSeeds))
