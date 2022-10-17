"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DigiboardScalarFieldEnum;
(function (DigiboardScalarFieldEnum) {
    DigiboardScalarFieldEnum["id"] = "id";
    DigiboardScalarFieldEnum["name"] = "name";
    DigiboardScalarFieldEnum["board"] = "board";
    DigiboardScalarFieldEnum["created_at"] = "created_at";
    DigiboardScalarFieldEnum["student"] = "student";
    DigiboardScalarFieldEnum["course"] = "course";
})(DigiboardScalarFieldEnum = exports.DigiboardScalarFieldEnum || (exports.DigiboardScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DigiboardScalarFieldEnum, {
    name: "DigiboardScalarFieldEnum",
    description: undefined,
});
