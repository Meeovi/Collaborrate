"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Customer_groupOrderByRelevanceFieldEnum;
(function (Customer_groupOrderByRelevanceFieldEnum) {
    Customer_groupOrderByRelevanceFieldEnum["name"] = "name";
    Customer_groupOrderByRelevanceFieldEnum["tax_class"] = "tax_class";
    Customer_groupOrderByRelevanceFieldEnum["customers"] = "customers";
    Customer_groupOrderByRelevanceFieldEnum["content"] = "content";
    Customer_groupOrderByRelevanceFieldEnum["image"] = "image";
    Customer_groupOrderByRelevanceFieldEnum["coverPhoto"] = "coverPhoto";
})(Customer_groupOrderByRelevanceFieldEnum = exports.Customer_groupOrderByRelevanceFieldEnum || (exports.Customer_groupOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Customer_groupOrderByRelevanceFieldEnum, {
    name: "Customer_groupOrderByRelevanceFieldEnum",
    description: undefined,
});
