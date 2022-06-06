"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let DeleteTransactionsArgs = class DeleteTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], DeleteTransactionsArgs.prototype, "where", void 0);
DeleteTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTransactionsArgs);
exports.DeleteTransactionsArgs = DeleteTransactionsArgs;
