"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PartnersOrderByRelevanceFieldEnum;
(function (PartnersOrderByRelevanceFieldEnum) {
    PartnersOrderByRelevanceFieldEnum["name"] = "name";
    PartnersOrderByRelevanceFieldEnum["address"] = "address";
    PartnersOrderByRelevanceFieldEnum["city"] = "city";
    PartnersOrderByRelevanceFieldEnum["state"] = "state";
    PartnersOrderByRelevanceFieldEnum["country"] = "country";
    PartnersOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
    PartnersOrderByRelevanceFieldEnum["business_type"] = "business_type";
})(PartnersOrderByRelevanceFieldEnum = exports.PartnersOrderByRelevanceFieldEnum || (exports.PartnersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PartnersOrderByRelevanceFieldEnum, {
    name: "PartnersOrderByRelevanceFieldEnum",
    description: undefined,
});
