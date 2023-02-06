"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateInput_1 = require("../../../inputs/TransactionsCreateInput");
const TransactionsUpdateInput_1 = require("../../../inputs/TransactionsUpdateInput");
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let UpsertOneTransactionsArgs = class UpsertOneTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], UpsertOneTransactionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateInput_1.TransactionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateInput_1.TransactionsCreateInput)
], UpsertOneTransactionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateInput_1.TransactionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateInput_1.TransactionsUpdateInput)
], UpsertOneTransactionsArgs.prototype, "update", void 0);
UpsertOneTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTransactionsArgs);
exports.UpsertOneTransactionsArgs = UpsertOneTransactionsArgs;
