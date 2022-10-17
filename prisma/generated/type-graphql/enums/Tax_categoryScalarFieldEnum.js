"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tax_categoryScalarFieldEnum;
(function (Tax_categoryScalarFieldEnum) {
    Tax_categoryScalarFieldEnum["id"] = "id";
    Tax_categoryScalarFieldEnum["created_at"] = "created_at";
    Tax_categoryScalarFieldEnum["name"] = "name";
    Tax_categoryScalarFieldEnum["default"] = "default";
})(Tax_categoryScalarFieldEnum = exports.Tax_categoryScalarFieldEnum || (exports.Tax_categoryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Tax_categoryScalarFieldEnum, {
    name: "Tax_categoryScalarFieldEnum",
    description: undefined,
});
