"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ApitokenScalarFieldEnum;
(function (ApitokenScalarFieldEnum) {
    ApitokenScalarFieldEnum["id"] = "id";
    ApitokenScalarFieldEnum["created_at"] = "created_at";
    ApitokenScalarFieldEnum["name"] = "name";
    ApitokenScalarFieldEnum["token_type"] = "token_type";
    ApitokenScalarFieldEnum["description"] = "description";
    ApitokenScalarFieldEnum["token"] = "token";
})(ApitokenScalarFieldEnum = exports.ApitokenScalarFieldEnum || (exports.ApitokenScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ApitokenScalarFieldEnum, {
    name: "ApitokenScalarFieldEnum",
    description: undefined,
});
