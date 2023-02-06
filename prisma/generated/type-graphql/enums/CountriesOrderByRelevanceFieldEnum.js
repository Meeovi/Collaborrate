"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CountriesOrderByRelevanceFieldEnum;
(function (CountriesOrderByRelevanceFieldEnum) {
    CountriesOrderByRelevanceFieldEnum["name"] = "name";
    CountriesOrderByRelevanceFieldEnum["description"] = "description";
    CountriesOrderByRelevanceFieldEnum["image"] = "image";
    CountriesOrderByRelevanceFieldEnum["region"] = "region";
    CountriesOrderByRelevanceFieldEnum["trainings"] = "trainings";
})(CountriesOrderByRelevanceFieldEnum = exports.CountriesOrderByRelevanceFieldEnum || (exports.CountriesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CountriesOrderByRelevanceFieldEnum, {
    name: "CountriesOrderByRelevanceFieldEnum",
    description: undefined,
});
