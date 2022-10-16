"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FullfillmentsOrderByRelevanceFieldEnum;
(function (FullfillmentsOrderByRelevanceFieldEnum) {
    FullfillmentsOrderByRelevanceFieldEnum["name"] = "name";
    FullfillmentsOrderByRelevanceFieldEnum["shipping_zones"] = "shipping_zones";
    FullfillmentsOrderByRelevanceFieldEnum["company"] = "company";
    FullfillmentsOrderByRelevanceFieldEnum["address"] = "address";
    FullfillmentsOrderByRelevanceFieldEnum["address_two"] = "address_two";
    FullfillmentsOrderByRelevanceFieldEnum["city"] = "city";
    FullfillmentsOrderByRelevanceFieldEnum["state"] = "state";
    FullfillmentsOrderByRelevanceFieldEnum["zipcode"] = "zipcode";
    FullfillmentsOrderByRelevanceFieldEnum["country"] = "country";
    FullfillmentsOrderByRelevanceFieldEnum["country_area"] = "country_area";
    FullfillmentsOrderByRelevanceFieldEnum["phone"] = "phone";
    FullfillmentsOrderByRelevanceFieldEnum["pickup"] = "pickup";
    FullfillmentsOrderByRelevanceFieldEnum["stock"] = "stock";
})(FullfillmentsOrderByRelevanceFieldEnum = exports.FullfillmentsOrderByRelevanceFieldEnum || (exports.FullfillmentsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(FullfillmentsOrderByRelevanceFieldEnum, {
    name: "FullfillmentsOrderByRelevanceFieldEnum",
    description: undefined,
});
