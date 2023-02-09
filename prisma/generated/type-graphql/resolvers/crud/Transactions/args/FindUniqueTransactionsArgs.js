"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let FindUniqueTransactionsArgs = class FindUniqueTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], FindUniqueTransactionsArgs.prototype, "where", void 0);
FindUniqueTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTransactionsArgs);
exports.FindUniqueTransactionsArgs = FindUniqueTransactionsArgs;
