"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Core_storeScalarFieldEnum;
(function (Core_storeScalarFieldEnum) {
    Core_storeScalarFieldEnum["id"] = "id";
    Core_storeScalarFieldEnum["key"] = "key";
    Core_storeScalarFieldEnum["value"] = "value";
    Core_storeScalarFieldEnum["type"] = "type";
    Core_storeScalarFieldEnum["environment"] = "environment";
    Core_storeScalarFieldEnum["tag"] = "tag";
})(Core_storeScalarFieldEnum = exports.Core_storeScalarFieldEnum || (exports.Core_storeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Core_storeScalarFieldEnum, {
    name: "Core_storeScalarFieldEnum",
    description: undefined,
});
