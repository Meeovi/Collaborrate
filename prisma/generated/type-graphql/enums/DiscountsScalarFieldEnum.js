"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DiscountsScalarFieldEnum;
(function (DiscountsScalarFieldEnum) {
    DiscountsScalarFieldEnum["id"] = "id";
    DiscountsScalarFieldEnum["name"] = "name";
    DiscountsScalarFieldEnum["excerpt"] = "excerpt";
    DiscountsScalarFieldEnum["discount"] = "discount";
    DiscountsScalarFieldEnum["image"] = "image";
    DiscountsScalarFieldEnum["published"] = "published";
    DiscountsScalarFieldEnum["special_offers"] = "special_offers";
    DiscountsScalarFieldEnum["rewards"] = "rewards";
    DiscountsScalarFieldEnum["coupons"] = "coupons";
    DiscountsScalarFieldEnum["expiration"] = "expiration";
    DiscountsScalarFieldEnum["categories"] = "categories";
    DiscountsScalarFieldEnum["articles"] = "articles";
    DiscountsScalarFieldEnum["products"] = "products";
    DiscountsScalarFieldEnum["customers"] = "customers";
    DiscountsScalarFieldEnum["users"] = "users";
    DiscountsScalarFieldEnum["type"] = "type";
    DiscountsScalarFieldEnum["creditMemo"] = "creditMemo";
    DiscountsScalarFieldEnum["billToName"] = "billToName";
    DiscountsScalarFieldEnum["orderNumber"] = "orderNumber";
    DiscountsScalarFieldEnum["refunded"] = "refunded";
    DiscountsScalarFieldEnum["status"] = "status";
})(DiscountsScalarFieldEnum = exports.DiscountsScalarFieldEnum || (exports.DiscountsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DiscountsScalarFieldEnum, {
    name: "DiscountsScalarFieldEnum",
    description: undefined,
});
