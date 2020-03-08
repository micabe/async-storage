"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExtension = createExtension;

/**
 * Copyright (c) React Native Community.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Methods available in storage API, to be excluded from the extension
const EXCLUDED_METHODS = ['getSingle', 'setSingle', 'getMany', 'setMany', 'removeSingle', 'removeMany', 'getKeys', 'dropStorage'];
/*
 * Extension is an object containing 'public', function-type properties of Storage instance
 * To property be include in the extension, it has to meet three conditions:
 * - has public accessor
 * - has to be a function
 * - cannot start with an underscore (convention considered private in JS)
 *
 * All methods in the extensions are called in Storage instance context
 */

function createExtension(storageInstance) {
  const propertyNames = Object.getOwnPropertyNames(storageInstance).filter(propName => {
    return EXCLUDED_METHODS.indexOf(propName) === -1 && !propName.startsWith('_') && // @ts-ignore this is a property on the instance
    typeof storageInstance[propName] === 'function';
  });
  let extension = {};
  propertyNames.forEach(propName => {
    const desc = {
      enumerable: true,
      get: function () {
        // @ts-ignore this is a property on the instance
        return storageInstance[propName].bind(storageInstance);
      }
    };
    Object.defineProperty(extension, propName, desc);
  });
  Object.seal(extension);
  return extension;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHRlbnNpb24udHMiXSwibmFtZXMiOlsiRVhDTFVERURfTUVUSE9EUyIsImNyZWF0ZUV4dGVuc2lvbiIsInN0b3JhZ2VJbnN0YW5jZSIsInByb3BlcnR5TmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZmlsdGVyIiwicHJvcE5hbWUiLCJpbmRleE9mIiwic3RhcnRzV2l0aCIsImV4dGVuc2lvbiIsImZvckVhY2giLCJkZXNjIiwiZW51bWVyYWJsZSIsImdldCIsImJpbmQiLCJkZWZpbmVQcm9wZXJ0eSIsInNlYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQVNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FDdkIsV0FEdUIsRUFFdkIsV0FGdUIsRUFHdkIsU0FIdUIsRUFJdkIsU0FKdUIsRUFLdkIsY0FMdUIsRUFNdkIsWUFOdUIsRUFPdkIsU0FQdUIsRUFRdkIsYUFSdUIsQ0FBekI7QUFXQTs7Ozs7Ozs7OztBQVNPLFNBQVNDLGVBQVQsQ0FDTEMsZUFESyxFQUVhO0FBQ2xCLFFBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQkgsZUFBM0IsRUFBNENJLE1BQTVDLENBQ3BCQyxRQUFRLElBQUk7QUFDVixXQUNFUCxnQkFBZ0IsQ0FBQ1EsT0FBakIsQ0FBeUJELFFBQXpCLE1BQXVDLENBQUMsQ0FBeEMsSUFDQSxDQUFDQSxRQUFRLENBQUNFLFVBQVQsQ0FBb0IsR0FBcEIsQ0FERCxJQUVBO0FBQ0EsV0FBT1AsZUFBZSxDQUFDSyxRQUFELENBQXRCLEtBQXFDLFVBSnZDO0FBTUQsR0FSbUIsQ0FBdEI7QUFXQSxNQUFJRyxTQUFTLEdBQUcsRUFBaEI7QUFDQVAsRUFBQUEsYUFBYSxDQUFDUSxPQUFkLENBQXNCSixRQUFRLElBQUk7QUFDaEMsVUFBTUssSUFBSSxHQUFHO0FBQ1hDLE1BQUFBLFVBQVUsRUFBRSxJQUREO0FBRVhDLE1BQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ2Q7QUFDQSxlQUFPWixlQUFlLENBQUNLLFFBQUQsQ0FBZixDQUEwQlEsSUFBMUIsQ0FBK0JiLGVBQS9CLENBQVA7QUFDRDtBQUxVLEtBQWI7QUFRQUUsSUFBQUEsTUFBTSxDQUFDWSxjQUFQLENBQXNCTixTQUF0QixFQUFpQ0gsUUFBakMsRUFBMkNLLElBQTNDO0FBQ0QsR0FWRDtBQVlBUixFQUFBQSxNQUFNLENBQUNhLElBQVAsQ0FBWVAsU0FBWjtBQUNBLFNBQU9BLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBSZWFjdCBOYXRpdmUgQ29tbXVuaXR5LlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuaW1wb3J0IHtFeHRlbnNpb25UeXBlLCBJU3RvcmFnZUJhY2tlbmR9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gTWV0aG9kcyBhdmFpbGFibGUgaW4gc3RvcmFnZSBBUEksIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGV4dGVuc2lvblxuY29uc3QgRVhDTFVERURfTUVUSE9EUyA9IFtcbiAgJ2dldFNpbmdsZScsXG4gICdzZXRTaW5nbGUnLFxuICAnZ2V0TWFueScsXG4gICdzZXRNYW55JyxcbiAgJ3JlbW92ZVNpbmdsZScsXG4gICdyZW1vdmVNYW55JyxcbiAgJ2dldEtleXMnLFxuICAnZHJvcFN0b3JhZ2UnLFxuXTtcblxuLypcbiAqIEV4dGVuc2lvbiBpcyBhbiBvYmplY3QgY29udGFpbmluZyAncHVibGljJywgZnVuY3Rpb24tdHlwZSBwcm9wZXJ0aWVzIG9mIFN0b3JhZ2UgaW5zdGFuY2VcbiAqIFRvIHByb3BlcnR5IGJlIGluY2x1ZGUgaW4gdGhlIGV4dGVuc2lvbiwgaXQgaGFzIHRvIG1lZXQgdGhyZWUgY29uZGl0aW9uczpcbiAqIC0gaGFzIHB1YmxpYyBhY2Nlc3NvclxuICogLSBoYXMgdG8gYmUgYSBmdW5jdGlvblxuICogLSBjYW5ub3Qgc3RhcnQgd2l0aCBhbiB1bmRlcnNjb3JlIChjb252ZW50aW9uIGNvbnNpZGVyZWQgcHJpdmF0ZSBpbiBKUylcbiAqXG4gKiBBbGwgbWV0aG9kcyBpbiB0aGUgZXh0ZW5zaW9ucyBhcmUgY2FsbGVkIGluIFN0b3JhZ2UgaW5zdGFuY2UgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXh0ZW5zaW9uPFQgZXh0ZW5kcyBJU3RvcmFnZUJhY2tlbmQ+KFxuICBzdG9yYWdlSW5zdGFuY2U6IFQsXG4pOiBFeHRlbnNpb25UeXBlPFQ+IHtcbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHN0b3JhZ2VJbnN0YW5jZSkuZmlsdGVyKFxuICAgIHByb3BOYW1lID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIEVYQ0xVREVEX01FVEhPRFMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xICYmXG4gICAgICAgICFwcm9wTmFtZS5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIGEgcHJvcGVydHkgb24gdGhlIGluc3RhbmNlXG4gICAgICAgIHR5cGVvZiBzdG9yYWdlSW5zdGFuY2VbcHJvcE5hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICApO1xuICAgIH0sXG4gICk7XG5cbiAgbGV0IGV4dGVuc2lvbiA9IHt9O1xuICBwcm9wZXJ0eU5hbWVzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIGEgcHJvcGVydHkgb24gdGhlIGluc3RhbmNlXG4gICAgICAgIHJldHVybiBzdG9yYWdlSW5zdGFuY2VbcHJvcE5hbWVdLmJpbmQoc3RvcmFnZUluc3RhbmNlKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHRlbnNpb24sIHByb3BOYW1lLCBkZXNjKTtcbiAgfSk7XG5cbiAgT2JqZWN0LnNlYWwoZXh0ZW5zaW9uKTtcbiAgcmV0dXJuIGV4dGVuc2lvbiBhcyBFeHRlbnNpb25UeXBlPFQ+O1xufVxuIl19