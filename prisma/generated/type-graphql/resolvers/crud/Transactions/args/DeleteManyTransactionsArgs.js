"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereInput_1 = require("../../../inputs/TransactionsWhereInput");
let DeleteManyTransactionsArgs = class DeleteManyTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], DeleteManyTransactionsArgs.prototype, "where", void 0);
DeleteManyTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTransactionsArgs);
exports.DeleteManyTransactionsArgs = DeleteManyTransactionsArgs;
