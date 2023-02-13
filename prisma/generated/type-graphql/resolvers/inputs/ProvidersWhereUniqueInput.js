"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ProvidersWhereUniqueInput = class ProvidersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProvidersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersWhereUniqueInput.prototype, "name", void 0);
ProvidersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersWhereUniqueInput", {
        isAbstract: true
    })
], ProvidersWhereUniqueInput);
exports.ProvidersWhereUniqueInput = ProvidersWhereUniqueInput;
