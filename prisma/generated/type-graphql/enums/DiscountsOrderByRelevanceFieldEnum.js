"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DiscountsOrderByRelevanceFieldEnum;
(function (DiscountsOrderByRelevanceFieldEnum) {
    DiscountsOrderByRelevanceFieldEnum["name"] = "name";
    DiscountsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    DiscountsOrderByRelevanceFieldEnum["discount"] = "discount";
    DiscountsOrderByRelevanceFieldEnum["image"] = "image";
    DiscountsOrderByRelevanceFieldEnum["special_offers"] = "special_offers";
    DiscountsOrderByRelevanceFieldEnum["rewards"] = "rewards";
    DiscountsOrderByRelevanceFieldEnum["coupons"] = "coupons";
    DiscountsOrderByRelevanceFieldEnum["expiration"] = "expiration";
    DiscountsOrderByRelevanceFieldEnum["categories"] = "categories";
    DiscountsOrderByRelevanceFieldEnum["articles"] = "articles";
    DiscountsOrderByRelevanceFieldEnum["products"] = "products";
    DiscountsOrderByRelevanceFieldEnum["customers"] = "customers";
    DiscountsOrderByRelevanceFieldEnum["users"] = "users";
    DiscountsOrderByRelevanceFieldEnum["type"] = "type";
    DiscountsOrderByRelevanceFieldEnum["creditMemo"] = "creditMemo";
    DiscountsOrderByRelevanceFieldEnum["billToName"] = "billToName";
    DiscountsOrderByRelevanceFieldEnum["orderNumber"] = "orderNumber";
    DiscountsOrderByRelevanceFieldEnum["refunded"] = "refunded";
    DiscountsOrderByRelevanceFieldEnum["status"] = "status";
})(DiscountsOrderByRelevanceFieldEnum = exports.DiscountsOrderByRelevanceFieldEnum || (exports.DiscountsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(DiscountsOrderByRelevanceFieldEnum, {
    name: "DiscountsOrderByRelevanceFieldEnum",
    description: undefined,
});
