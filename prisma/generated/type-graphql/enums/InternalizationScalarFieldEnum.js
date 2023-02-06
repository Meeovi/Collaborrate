"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InternalizationScalarFieldEnum;
(function (InternalizationScalarFieldEnum) {
    InternalizationScalarFieldEnum["id"] = "id";
    InternalizationScalarFieldEnum["created_at"] = "created_at";
    InternalizationScalarFieldEnum["name"] = "name";
    InternalizationScalarFieldEnum["region"] = "region";
    InternalizationScalarFieldEnum["description"] = "description";
    InternalizationScalarFieldEnum["default"] = "default";
    InternalizationScalarFieldEnum["website"] = "website";
})(InternalizationScalarFieldEnum = exports.InternalizationScalarFieldEnum || (exports.InternalizationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InternalizationScalarFieldEnum, {
    name: "InternalizationScalarFieldEnum",
    description: undefined,
});
