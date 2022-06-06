"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShopsScalarFieldEnum;
(function (ShopsScalarFieldEnum) {
    ShopsScalarFieldEnum["id"] = "id";
    ShopsScalarFieldEnum["name"] = "name";
    ShopsScalarFieldEnum["description"] = "description";
    ShopsScalarFieldEnum["image"] = "image";
    ShopsScalarFieldEnum["website"] = "website";
    ShopsScalarFieldEnum["products"] = "products";
    ShopsScalarFieldEnum["articles"] = "articles";
    ShopsScalarFieldEnum["customers"] = "customers";
    ShopsScalarFieldEnum["comments"] = "comments";
    ShopsScalarFieldEnum["coupons"] = "coupons";
    ShopsScalarFieldEnum["categories"] = "categories";
    ShopsScalarFieldEnum["polls"] = "polls";
    ShopsScalarFieldEnum["quotes"] = "quotes";
    ShopsScalarFieldEnum["reviews"] = "reviews";
    ShopsScalarFieldEnum["gift_certificates"] = "gift_certificates";
    ShopsScalarFieldEnum["rating"] = "rating";
    ShopsScalarFieldEnum["tags"] = "tags";
    ShopsScalarFieldEnum["users"] = "users";
    ShopsScalarFieldEnum["invoices"] = "invoices";
    ShopsScalarFieldEnum["reports"] = "reports";
    ShopsScalarFieldEnum["reward_points"] = "reward_points";
    ShopsScalarFieldEnum["special_discounts"] = "special_discounts";
    ShopsScalarFieldEnum["statistics"] = "statistics";
    ShopsScalarFieldEnum["stocks"] = "stocks";
})(ShopsScalarFieldEnum = exports.ShopsScalarFieldEnum || (exports.ShopsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ShopsScalarFieldEnum, {
    name: "ShopsScalarFieldEnum",
    description: undefined,
});
