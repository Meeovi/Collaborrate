"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StocksOrderByRelevanceFieldEnum;
(function (StocksOrderByRelevanceFieldEnum) {
    StocksOrderByRelevanceFieldEnum["name"] = "name";
    StocksOrderByRelevanceFieldEnum["description"] = "description";
    StocksOrderByRelevanceFieldEnum["website"] = "website";
    StocksOrderByRelevanceFieldEnum["sources"] = "sources";
})(StocksOrderByRelevanceFieldEnum = exports.StocksOrderByRelevanceFieldEnum || (exports.StocksOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(StocksOrderByRelevanceFieldEnum, {
    name: "StocksOrderByRelevanceFieldEnum",
    description: undefined,
});
