"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StatesScalarFieldEnum;
(function (StatesScalarFieldEnum) {
    StatesScalarFieldEnum["id"] = "id";
    StatesScalarFieldEnum["name"] = "name";
    StatesScalarFieldEnum["description"] = "description";
    StatesScalarFieldEnum["country"] = "country";
    StatesScalarFieldEnum["image"] = "image";
    StatesScalarFieldEnum["trainings"] = "trainings";
})(StatesScalarFieldEnum = exports.StatesScalarFieldEnum || (exports.StatesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StatesScalarFieldEnum, {
    name: "StatesScalarFieldEnum",
    description: undefined,
});
