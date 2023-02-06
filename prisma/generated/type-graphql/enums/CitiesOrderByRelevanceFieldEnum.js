"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CitiesOrderByRelevanceFieldEnum;
(function (CitiesOrderByRelevanceFieldEnum) {
    CitiesOrderByRelevanceFieldEnum["name"] = "name";
    CitiesOrderByRelevanceFieldEnum["description"] = "description";
    CitiesOrderByRelevanceFieldEnum["state"] = "state";
    CitiesOrderByRelevanceFieldEnum["country"] = "country";
    CitiesOrderByRelevanceFieldEnum["postalCode"] = "postalCode";
    CitiesOrderByRelevanceFieldEnum["image"] = "image";
})(CitiesOrderByRelevanceFieldEnum = exports.CitiesOrderByRelevanceFieldEnum || (exports.CitiesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CitiesOrderByRelevanceFieldEnum, {
    name: "CitiesOrderByRelevanceFieldEnum",
    description: undefined,
});
