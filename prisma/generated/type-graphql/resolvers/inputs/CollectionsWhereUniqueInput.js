"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let CollectionsWhereUniqueInput = class CollectionsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CollectionsWhereUniqueInput.prototype, "id", void 0);
CollectionsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CollectionsWhereUniqueInput", {
        isAbstract: true
    })
], CollectionsWhereUniqueInput);
exports.CollectionsWhereUniqueInput = CollectionsWhereUniqueInput;
