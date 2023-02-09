"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VendorsScalarFieldEnum;
(function (VendorsScalarFieldEnum) {
    VendorsScalarFieldEnum["id"] = "id";
    VendorsScalarFieldEnum["name"] = "name";
    VendorsScalarFieldEnum["description"] = "description";
    VendorsScalarFieldEnum["image"] = "image";
    VendorsScalarFieldEnum["website"] = "website";
    VendorsScalarFieldEnum["products"] = "products";
    VendorsScalarFieldEnum["articles"] = "articles";
    VendorsScalarFieldEnum["customers"] = "customers";
    VendorsScalarFieldEnum["comments"] = "comments";
    VendorsScalarFieldEnum["coupons"] = "coupons";
    VendorsScalarFieldEnum["categories"] = "categories";
    VendorsScalarFieldEnum["polls"] = "polls";
    VendorsScalarFieldEnum["quotes"] = "quotes";
    VendorsScalarFieldEnum["reviews"] = "reviews";
    VendorsScalarFieldEnum["gift_certificates"] = "gift_certificates";
    VendorsScalarFieldEnum["rating"] = "rating";
    VendorsScalarFieldEnum["tags"] = "tags";
    VendorsScalarFieldEnum["users"] = "users";
    VendorsScalarFieldEnum["invoices"] = "invoices";
    VendorsScalarFieldEnum["reports"] = "reports";
    VendorsScalarFieldEnum["reward_points"] = "reward_points";
    VendorsScalarFieldEnum["special_discounts"] = "special_discounts";
    VendorsScalarFieldEnum["statistics"] = "statistics";
    VendorsScalarFieldEnum["stocks"] = "stocks";
    VendorsScalarFieldEnum["country"] = "country";
    VendorsScalarFieldEnum["physical_store"] = "physical_store";
    VendorsScalarFieldEnum["type"] = "type";
    VendorsScalarFieldEnum["workspaces"] = "workspaces";
})(VendorsScalarFieldEnum = exports.VendorsScalarFieldEnum || (exports.VendorsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VendorsScalarFieldEnum, {
    name: "VendorsScalarFieldEnum",
    description: undefined,
});
