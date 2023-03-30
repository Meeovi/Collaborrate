"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTransactionsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let FindUniqueTransactionsOrThrowArgs = class FindUniqueTransactionsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], FindUniqueTransactionsOrThrowArgs.prototype, "where", void 0);
FindUniqueTransactionsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTransactionsOrThrowArgs);
exports.FindUniqueTransactionsOrThrowArgs = FindUniqueTransactionsOrThrowArgs;
