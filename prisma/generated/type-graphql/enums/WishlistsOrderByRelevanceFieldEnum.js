"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WishlistsOrderByRelevanceFieldEnum;
(function (WishlistsOrderByRelevanceFieldEnum) {
    WishlistsOrderByRelevanceFieldEnum["name"] = "name";
    WishlistsOrderByRelevanceFieldEnum["customers"] = "customers";
    WishlistsOrderByRelevanceFieldEnum["visibility"] = "visibility";
    WishlistsOrderByRelevanceFieldEnum["products"] = "products";
    WishlistsOrderByRelevanceFieldEnum["quantity"] = "quantity";
    WishlistsOrderByRelevanceFieldEnum["occassions"] = "occassions";
})(WishlistsOrderByRelevanceFieldEnum = exports.WishlistsOrderByRelevanceFieldEnum || (exports.WishlistsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(WishlistsOrderByRelevanceFieldEnum, {
    name: "WishlistsOrderByRelevanceFieldEnum",
    description: undefined,
});
