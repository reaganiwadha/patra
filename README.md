# patra
Yet another argument parser

```js
const patra = require('patra')
const input = ['the', 'name', 'Charizard', 'and', 'Bulbasaur', 'level', '30']

console.log(patra.parse(input, ['name', 'level']))
```

```js
{
    '_' : 'the',
    'name' : 'Charizard and Bulbasaur',
    'level' : '30'
}
```

## Contributing
Pull requests are very welcomed. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)