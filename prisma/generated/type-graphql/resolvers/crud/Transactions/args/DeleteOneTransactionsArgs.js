"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let DeleteOneTransactionsArgs = class DeleteOneTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], DeleteOneTransactionsArgs.prototype, "where", void 0);
DeleteOneTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTransactionsArgs);
exports.DeleteOneTransactionsArgs = DeleteOneTransactionsArgs;
