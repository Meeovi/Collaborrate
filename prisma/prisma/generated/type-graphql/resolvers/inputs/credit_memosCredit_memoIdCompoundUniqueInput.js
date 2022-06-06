"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_memosCredit_memoIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let credit_memosCredit_memoIdCompoundUniqueInput = class credit_memosCredit_memoIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], credit_memosCredit_memoIdCompoundUniqueInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], credit_memosCredit_memoIdCompoundUniqueInput.prototype, "id", void 0);
credit_memosCredit_memoIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("credit_memosCredit_memoIdCompoundUniqueInput", {
        isAbstract: true
    })
], credit_memosCredit_memoIdCompoundUniqueInput);
exports.credit_memosCredit_memoIdCompoundUniqueInput = credit_memosCredit_memoIdCompoundUniqueInput;
