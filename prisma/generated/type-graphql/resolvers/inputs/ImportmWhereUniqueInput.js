"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ImportmWhereUniqueInput = class ImportmWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ImportmWhereUniqueInput.prototype, "id", void 0);
ImportmWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ImportmWhereUniqueInput", {
        isAbstract: true
    })
], ImportmWhereUniqueInput);
exports.ImportmWhereUniqueInput = ImportmWhereUniqueInput;
