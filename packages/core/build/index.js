"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AsyncStorage = _interopRequireDefault(require("./AsyncStorage"));

var _defaults = require("./defaults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) React Native Community.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
class AsyncStorageFactory {
  constructor() {
    throw new Error("[AsyncStorage] AsyncStorageFactory must not be instantiated.\nInstead, use its 'create' method to create AsyncStorage instance.");
  }

  static create(storage, opts = null) {
    return new _AsyncStorage.default(storage, opts || _defaults.factoryOptions);
  }

}

var _default = AsyncStorageFactory;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBc3luY1N0b3JhZ2VGYWN0b3J5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsImNyZWF0ZSIsInN0b3JhZ2UiLCJvcHRzIiwiQXN5bmNTdG9yYWdlIiwiZmFjdG9yeU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQTs7QUFDQTs7OztBQVRBOzs7Ozs7O0FBWUEsTUFBTUEsbUJBQU4sQ0FBMEI7QUFDeEJDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFVBQU0sSUFBSUMsS0FBSixDQUNKLGlJQURJLENBQU47QUFHRDs7QUFFRCxTQUFPQyxNQUFQLENBQ0VDLE9BREYsRUFFRUMsSUFBMkIsR0FBRyxJQUZoQyxFQUdFO0FBQ0EsV0FBTyxJQUFJQyxxQkFBSixDQUNMRixPQURLLEVBRUxDLElBQUksSUFBSUUsd0JBRkgsQ0FBUDtBQUlEOztBQWZ1Qjs7ZUFrQlhQLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFJlYWN0IE5hdGl2ZSBDb21tdW5pdHkuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbmltcG9ydCBBc3luY1N0b3JhZ2UgZnJvbSAnLi9Bc3luY1N0b3JhZ2UnO1xuaW1wb3J0IHtmYWN0b3J5T3B0aW9uc30gZnJvbSAnLi9kZWZhdWx0cyc7XG5pbXBvcnQge0lTdG9yYWdlQmFja2VuZCwgRmFjdG9yeU9wdGlvbnMsIEVtcHR5U3RvcmFnZU1vZGVsfSBmcm9tICcuLi90eXBlcyc7XG5cbmNsYXNzIEFzeW5jU3RvcmFnZUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltBc3luY1N0b3JhZ2VdIEFzeW5jU3RvcmFnZUZhY3RvcnkgbXVzdCBub3QgYmUgaW5zdGFudGlhdGVkLlxcbkluc3RlYWQsIHVzZSBpdHMgJ2NyZWF0ZScgbWV0aG9kIHRvIGNyZWF0ZSBBc3luY1N0b3JhZ2UgaW5zdGFuY2UuXCIsXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGU8TSA9IEVtcHR5U3RvcmFnZU1vZGVsPihcbiAgICBzdG9yYWdlOiBJU3RvcmFnZUJhY2tlbmQsXG4gICAgb3B0czogRmFjdG9yeU9wdGlvbnMgfCBudWxsID0gbnVsbCxcbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY1N0b3JhZ2U8TSwgSVN0b3JhZ2VCYWNrZW5kPE0+PihcbiAgICAgIHN0b3JhZ2UsXG4gICAgICBvcHRzIHx8IGZhY3RvcnlPcHRpb25zLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXN5bmNTdG9yYWdlRmFjdG9yeTtcbiJdfQ==