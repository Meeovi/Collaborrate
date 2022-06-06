"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let General_settingsWhereUniqueInput = class General_settingsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], General_settingsWhereUniqueInput.prototype, "id", void 0);
General_settingsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsWhereUniqueInput", {
        isAbstract: true
    })
], General_settingsWhereUniqueInput);
exports.General_settingsWhereUniqueInput = General_settingsWhereUniqueInput;
