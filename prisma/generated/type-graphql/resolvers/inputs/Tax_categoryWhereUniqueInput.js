"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Tax_categoryWhereUniqueInput = class Tax_categoryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_categoryWhereUniqueInput.prototype, "id", void 0);
Tax_categoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryWhereUniqueInput", {
        isAbstract: true
    })
], Tax_categoryWhereUniqueInput);
exports.Tax_categoryWhereUniqueInput = Tax_categoryWhereUniqueInput;
