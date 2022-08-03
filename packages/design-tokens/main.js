const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.registerTransform({
    name: 'color/gradient',
    type: 'value',
    matcher: function(token) {
        return token.attributes.category === 'color' && token.original.value.includes('gradient');
    },
    transformer: function(token) {
        console.log(token);
        return token.original.value;
    }
  });

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['scss'].concat(['color/gradient'])
});

StyleDictionary.buildAllPlatforms();