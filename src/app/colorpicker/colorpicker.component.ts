import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {
  @Output() onButtonClick: EventEmitter<object> = new EventEmitter();
  r: number = 0;
  g: number = 0;
  b: number = 0;
  rSent: number = 0;
  gSent: number = 0;
  bSent: number = 0;
  hex: string = '#000000';
  textBlack: boolean = false;
  colorMap: object = {
    '#000000': 'black',
    '#0c090a': 'night',
    '#2c3539': 'gunmetal',
    '#2b1b17': 'midnight',
    '#34282c': 'charcoal',
    '#25383c': 'dark slate grey',
    '#3b3131': 'oil',
    '#413839': 'black cat',
    '#3d3c3a': 'iridium',
    '#463e3f': 'black eel',
    '#4c4646': 'black cow',
    '#504a4b': 'gray wolf',
    '#565051': 'vampire gray',
    '#5c5858': 'gray dolphin',
    '#625d5d': 'carbon gray',
    '#666362': 'ash gray',
    '#6d6968': 'cloudy gray',
    '#726e6d': 'smokey gray',
    '#736f6e': 'gray',
    '#837e7c': 'granite',
    '#848482': 'battleship gray',
    '#b6b6b4': 'gray cloud',
    '#d1d0ce': 'gray goose',
    '#e5e4e2': 'platinum',
    '#bcc6cc': 'metallic silver',
    '#98afc7': 'blue gray',
    '#6d7b8d': 'light slate gray',
    '#657383': 'slate gray',
    '#616d7e': 'jet gray',
    '#646d7e': 'mist blue',
    '#566d7e': 'marble blue',
    '#737ca1': 'slate blue',
    '#4863a0': 'steel blue',
    '#2b547e': 'blue jay',
    '#2b3856': 'dark slate blue',
    '#151b54': 'midnight blue',
    '#000080': 'navy blue',
    '#342d7e': 'blue whale',
    '#15317e': 'lapis blue',
    '#151b8d': 'denim dark blue',
    '#0000a0': 'earth blue',
    '#0020c2': 'cobalt blue',
    '#0041c2': 'blueberry blue',
    '#2554c7': 'sapphire blue',
    '#1569c7': 'blue eyes',
    '#2b60de': 'royal blue',
    '#1f45fc': 'blue orchid',
    '#6960ec': 'blue lotus',
    '#736aff': 'light slate blue',
    '#357ec7': 'windows blue',
    '#368bc1': 'glacial blue ice',
    '#488ac7': 'silk blue',
    '#3090c7': 'blue ivy',
    '#659ec7': 'blue koi',
    '#87afc7': 'columbia blue',
    '#95b9c7': 'baby blue',
    '#728fce': 'light steel blue',
    '#2b65ec': 'ocean blue',
    '#306eff': 'blue ribbon',
    '#157dec': 'blue dress',
    '#1589ff': 'dodger blue',
    '#6495ed': 'cornflower blue',
    '#6698ff': 'sky blue',
    '#38acec': 'butterfly blue',
    '#56a5ec': 'iceberg',
    '#5cb3ff': 'crystal blue',
    '#3bb9ff': 'deep sky blue',
    '#79baec': 'denim blue',
    '#82cafa': 'light sky blue',
    '#82caff': 'day sky blue',
    '#a0cfec': 'jeans blue',
    '#b7ceec': 'blue angel',
    '#b4cfec': 'pastel blue',
    '#c2dfff': 'sea blue',
    '#c6deff': 'powder blue',
    '#afdcec': 'coral blue',
    '#addfff': 'light blue',
    '#bdedff': 'robin egg blue',
    '#cfecec': 'pale blue lily',
    '#e0ffff': 'light cyan',
    '#ebf4fa': 'water',
    '#f0f8ff': 'aliceblue',
    '#f0ffff': 'azure',
    '#ccffff': 'light slate',
    '#93ffe8': 'light aquamarine',
    '#9afeff': 'electric blue',
    '#7fffd4': 'aquamarine',
    '#00ffff': 'cyan or aqua',
    '#7dfdfe': 'tron blue',
    '#57feff': 'blue zircon',
    '#8eebec': 'blue lagoon',
    '#50ebec': 'celeste',
    '#4ee2ec': 'blue diamond',
    '#81d8d0': 'tiffany blue',
    '#92c7c7': 'cyan opaque',
    '#77bfc7': 'blue hosta',
    '#78c7c7': 'northern lights blue',
    '#48cccd': 'medium turquoise',
    '#43c6db': 'turquoise',
    '#46c7c7': 'jellyfish',
    '#7bccb5': 'blue green',
    '#43bfc7': 'macaw blue green',
    '#3ea99f': 'light sea green',
    '#3b9c9c': 'dark turquoise',
    '#438d80': 'sea turtle green',
    '#348781': 'medium aquamarine',
    '#307d7e': 'greenish blue',
    '#5e7d7e': 'grayish turquoise',
    '#4c787e': 'beetle green',
    '#008080': 'teal',
    '#4e8975': 'sea green',
    '#78866b': 'camouflage green',
    '#848b79': 'sage green',
    '#617c58': 'hazel green',
    '#728c00': 'venom green',
    '#667c26': 'fern green',
    '#254117': 'dark forest green',
    '#306754': 'medium sea green',
    '#347235': 'medium forest green',
    '#437c17': 'seaweed green',
    '#387c44': 'pine green',
    '#347c2c': 'jungle green',
    '#347c17': 'shamrock green',
    '#348017': 'medium spring green',
    '#4e9258': 'forest green',
    '#6aa121': 'green onion',
    '#4aa02c': 'spring green',
    '#41a317': 'lime green',
    '#3ea055': 'clover green',
    '#6cbb3c': 'green snake',
    '#6cc417': 'alien green',
    '#4cc417': 'green apple',
    '#52d017': 'yellow green',
    '#4cc552': 'kelly green',
    '#54c571': 'zombie green',
    '#99c68e': 'frog green',
    '#89c35c': 'green peas',
    '#85bb65': 'dollar bill green',
    '#8bb381': 'dark sea green',
    '#9cb071': 'iguana green',
    '#b2c248': 'avocado green',
    '#9dc209': 'pistachio green',
    '#a1c935': 'salad green',
    '#7fe817': 'hummingbird green',
    '#59e817': 'nebula green',
    '#57e964': 'stoplight go green',
    '#64e986': 'algae green',
    '#5efb6e': 'jade green',
    '#00ff00': 'green',
    '#5ffb17': 'emerald green',
    '#87f717': 'lawn green',
    '#8afb17': 'chartreuse',
    '#6afb92': 'dragon green',
    '#98ff98': 'mint green',
    '#b5eaaa': 'green thumb',
    '#c3fdb8': 'light jade',
    '#ccfb5d': 'tea green',
    '#b1fb17': 'green yellow',
    '#bce954': 'slime green',
    '#edda74': 'goldenrod',
    '#ede275': 'harvest gold',
    '#ffe87c': 'sun yellow',
    '#ffff00': 'yellow',
    '#fff380': 'corn yellow',
    '#ffffc2': 'parchment',
    '#ffffcc': 'cream',
    '#fff8c6': 'lemon chiffon',
    '#fff8dc': 'cornsilk',
    '#f5f5dc': 'beige',
    '#fbf6d9': 'blonde',
    '#faebd7': 'antiquewhite',
    '#f7e7ce': 'champagne',
    '#ffebcd': 'blanchedalmond',
    '#f3e5ab': 'vanilla',
    '#ece5b6': 'tan brown',
    '#ffe5b4': 'peach',
    '#ffdb58': 'mustard',
    '#ffd801': 'rubber ducky yellow',
    '#fdd017': 'bright gold',
    '#eac117': 'golden brown',
    '#f2bb66': 'macaroni and cheese',
    '#fbb917': 'saffron',
    '#fbb117': 'beer',
    '#ffa62f': 'cantaloupe',
    '#e9ab17': 'bee yellow',
    '#e2a76f': 'brown sugar',
    '#deb887': 'burlywood',
    '#ffcba4': 'deep peach',
    '#c9be62': 'ginger brown',
    '#e8a317': 'school bus yellow',
    '#ee9a4d': 'sandy brown',
    '#c8b560': 'fall leaf brown',
    '#d4a017': 'orange gold',
    '#c2b280': 'sand',
    '#c7a317': 'cookie brown',
    '#c68e17': 'caramel',
    '#b5a642': 'brass',
    '#ada96e': 'khaki',
    '#c19a6b': 'camel brown',
    '#cd7f32': 'bronze',
    '#c88141': 'tiger orange',
    '#c58917': 'cinnamon',
    '#af9b60': 'bullet shell',
    '#af7817': 'dark goldenrod',
    '#b87333': 'copper',
    '#966f33': 'wood',
    '#806517': 'oak brown',
    '#827839': 'moccasin',
    '#827b60': 'army brown',
    '#786d5f': 'sandstone',
    '#493d26': 'mocha',
    '#483c32': 'taupe',
    '#6f4e37': 'coffee',
    '#835c3b': 'brown bear',
    '#7f5217': 'red dirt',
    '#7f462c': 'sepia',
    '#c47451': 'orange salmon',
    '#c36241': 'rust',
    '#c35817': 'red fox',
    '#c85a17': 'chocolate',
    '#cc6600': 'sedona',
    '#e56717': 'papaya orange',
    '#e66c2c': 'halloween orange',
    '#f87217': 'pumpkin orange',
    '#f87431': 'construction cone orange',
    '#e67451': 'sunrise orange',
    '#ff8040': 'mango orange',
    '#f88017': 'dark orange',
    '#ff7f50': 'coral',
    '#f88158': 'basket ball orange',
    '#f9966b': 'light salmon',
    '#e78a61': 'tangerine',
    '#e18b6b': 'dark salmon',
    '#e77471': 'light coral',
    '#f75d59': 'bean red',
    '#e55451': 'valentine red',
    '#e55b3c': 'shocking orange',
    '#ff0000': 'red',
    '#ff2400': 'scarlet',
    '#f62217': 'ruby red',
    '#f70d1a': 'ferrari red',
    '#f62817': 'fire engine red',
    '#e42217': 'lava red',
    '#e41b17': 'love red',
    '#dc381f': 'grapefruit',
    '#c34a2c': 'chestnut red',
    '#c24641': 'cherry red',
    '#c04000': 'mahogany',
    '#c11b17': 'chilli pepper',
    '#9f000f': 'cranberry',
    '#990012': 'red wine',
    '#8c001a': 'burgundy',
    '#954535': 'chestnut',
    '#7e3517': 'blood red',
    '#8a4117': 'sienna',
    '#7e3817': 'sangria',
    '#800517': 'firebrick',
    '#810541': 'maroon',
    '#7d0541': 'plum pie',
    '#7e354d': 'velvet maroon',
    '#7d0552': 'plum velvet',
    '#7f4e52': 'rosy finch',
    '#7f5a58': 'puce',
    '#7f525d': 'dull purple',
    '#b38481': 'rosy brown',
    '#c5908e': 'khaki rose',
    '#c48189': 'pink bow',
    '#c48793': 'lipstick pink',
    '#e8adaa': 'rose',
    '#ecc5c0': 'rose gold',
    '#edc9af': 'desert sand',
    '#fdd7e4': 'pig pink',
    '#fcdfff': 'cotton candy',
    '#ffdfdd': 'pink bubble gum',
    '#fbbbb9': 'misty rose',
    '#faafbe': 'pink',
    '#faafba': 'light pink',
    '#f9a7b0': 'flamingo pink',
    '#e7a1b0': 'pink rose',
    '#e799a3': 'pink daisy',
    '#e38aae': 'cadillac pink',
    '#f778a1': 'carnation pink',
    '#e56e94': 'blush red',
    '#f660ab': 'hot pink',
    '#fc6c85': 'watermelon pink',
    '#f6358a': 'violet red',
    '#f52887': 'deep pink',
    '#e45e9d': 'pink cupcake',
    '#e4287c': 'pink lemonade',
    '#f535aa': 'neon pink',
    '#ff00ff': 'magenta',
    '#e3319d': 'dimorphotheca magenta',
    '#f433ff': 'bright neon pink',
    '#d16587': 'pale violet red',
    '#c25a7c': 'tulip pink',
    '#ca226b': 'medium violet red',
    '#c12869': 'rogue pink',
    '#c12267': 'burnt pink',
    '#c25283': 'bashful pink',
    '#c12283': 'dark carnation pink',
    '#b93b8f': 'plum',
    '#7e587e': 'viola purple',
    '#571b7e': 'purple iris',
    '#583759': 'plum purple',
    '#4b0082': 'indigo',
    '#461b7e': 'purple monster',
    '#4e387e': 'purple haze',
    '#614051': 'eggplant',
    '#5e5a80': 'grape',
    '#6a287e': 'purple jam',
    '#7d1b7e': 'dark orchid',
    '#a74ac7': 'purple flower',
    '#b048b5': 'medium orchid',
    '#6c2dc7': 'purple amethyst',
    '#842dce': 'dark violet',
    '#8d38c9': 'violet',
    '#7a5dc7': 'purple sage bush',
    '#7f38ec': 'lovely purple',
    '#8e35ef': 'purple',
    '#893bff': 'aztech purple',
    '#8467d7': 'medium purple',
    '#a23bec': 'jasmine purple',
    '#b041ff': 'purple daffodil',
    '#c45aec': 'tyrian purple',
    '#9172ec': 'crocus purple',
    '#9e7bff': 'purple mimosa',
    '#d462ff': 'heliotrope purple',
    '#e238ec': 'crimson',
    '#c38ec7': 'purple dragon',
    '#c8a2c8': 'lilac',
    '#e6a9ec': 'blush pink',
    '#e0b0ff': 'mauve',
    '#c6aec7': 'wisteria purple',
    '#f9b7ff': 'blossom pink',
    '#d2b9d3': 'thistle',
    '#e9cfec': 'periwinkle',
    '#ebdde2': 'lavender pinocchio',
    '#e3e4fa': 'lavender blue',
    '#fdeef4': 'pearl',
    '#fff5ee': 'seashell',
    '#fefcff': 'milk white',
    '#ffffff': 'white'
  };

  constructor() {
  }
  ngOnInit() {
  }

  handleValueChange(prop: string, value: number) {
    this[prop] = value;
    const formattedHex = this.formatHex();

    const key = this.getColorKey(formattedHex);
    this.hex =  key === undefined ? formattedHex : this.colorMap[key];
    this.textBlack = 0.2126 * this.r + 0.7152 * this.g + 0.0722 * this.b > 128;
  }

  save() {
    this.onButtonClick.emit([this.r, this.g, this.b]);
    this.changeSentValues();
  }

  changeSentValues() {
    this.rSent = this.r;
    this.gSent = this.g;
    this.bSent = this.b;
  }

  checkChanges(): boolean {
    return this.rSent === this.r && this.gSent === this.g && this.bSent === this.b;
  }

  getColorKey(hex: string): string | undefined {
    let pos;
    for (const color in this.colorMap) {
      if (color === hex) {
        pos = color;
        return pos;
      }
    }
    return undefined;
  }

  formatHex(): string {
    return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
  }

}
