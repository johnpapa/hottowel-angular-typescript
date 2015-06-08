'use strict';

angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout'
]);
/**
 * Exports WAS here because we are exporting typescript
 * components. Why? Because the tsc likes to know where the
 * types I am referencing are coming from. We compile to
 * commonjs, which means exports. We can use browserify
 * later, but for a hack job we can just declare exports, as
 * these are not actually used in the code.
 * Definately want to clean this.
 * But wait ... exports is commented out ... this is because 
 * for now we have only exported interfaces. This satisfies 
 * the tooling and since we are not using module loading, 
 * we're OK.
 */
// var exports = {};