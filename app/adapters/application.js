import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://localhost:5000"
  namespace: 'api',
});

// App.Adapter.map('App.FeatureCollection', {
//   features: { embedded: 'always' }
// });

// App.Adapter.map('App.Feature', {
//   geometry: { embedded: 'always' },
//   properties: { embedded: 'always' }
// });

// a point
// DS.RESTAdapter.registerTransform('point', {
//   serialize: function(value) {
//     return [value.get('x'), value.get('y')];
//   },
//   deserialize: function(value) {
//     return Ember.create({ x: value[1], y: value[0] });
//   }
// });
