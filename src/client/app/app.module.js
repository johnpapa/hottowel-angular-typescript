'use strict';
angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout'
]);
/**
 * TODO: Exports is here because we are exporting typescript
 *  components. Why? Because the tsc likes to know where the
 *  types I am referencing are coming from. We compile to
 *  commonjs, which means exports. We can use browserify
 *  later, but for a hack job we can just declare exports, as
 *  these are not actually used in the code.
 * Definately want to clean this.
 */
var exports = {};
//# sourceMappingURL=app.module.js.map