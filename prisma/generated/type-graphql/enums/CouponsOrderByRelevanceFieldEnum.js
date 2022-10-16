"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CouponsOrderByRelevanceFieldEnum;
(function (CouponsOrderByRelevanceFieldEnum) {
    CouponsOrderByRelevanceFieldEnum["name"] = "name";
    CouponsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    CouponsOrderByRelevanceFieldEnum["discount"] = "discount";
    CouponsOrderByRelevanceFieldEnum["image"] = "image";
    CouponsOrderByRelevanceFieldEnum["expiration"] = "expiration";
    CouponsOrderByRelevanceFieldEnum["categories"] = "categories";
    CouponsOrderByRelevanceFieldEnum["articles"] = "articles";
    CouponsOrderByRelevanceFieldEnum["products"] = "products";
    CouponsOrderByRelevanceFieldEnum["customers"] = "customers";
    CouponsOrderByRelevanceFieldEnum["users"] = "users";
    CouponsOrderByRelevanceFieldEnum["products_couponsToproducts"] = "products_couponsToproducts";
})(CouponsOrderByRelevanceFieldEnum = exports.CouponsOrderByRelevanceFieldEnum || (exports.CouponsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CouponsOrderByRelevanceFieldEnum, {
    name: "CouponsOrderByRelevanceFieldEnum",
    description: undefined,
});
