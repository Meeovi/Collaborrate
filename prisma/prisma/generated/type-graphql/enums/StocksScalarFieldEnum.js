"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StocksScalarFieldEnum;
(function (StocksScalarFieldEnum) {
    StocksScalarFieldEnum["id"] = "id";
    StocksScalarFieldEnum["name"] = "name";
    StocksScalarFieldEnum["enabled"] = "enabled";
    StocksScalarFieldEnum["description"] = "description";
    StocksScalarFieldEnum["website"] = "website";
    StocksScalarFieldEnum["sources"] = "sources";
})(StocksScalarFieldEnum = exports.StocksScalarFieldEnum || (exports.StocksScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StocksScalarFieldEnum, {
    name: "StocksScalarFieldEnum",
    description: undefined,
});
