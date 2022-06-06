"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsOrderByWithRelationInput_1 = require("../../../inputs/TransactionsOrderByWithRelationInput");
const TransactionsWhereInput_1 = require("../../../inputs/TransactionsWhereInput");
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let AggregateTransactionsArgs = class AggregateTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], AggregateTransactionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsOrderByWithRelationInput_1.TransactionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTransactionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], AggregateTransactionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTransactionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTransactionsArgs.prototype, "skip", void 0);
AggregateTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTransactionsArgs);
exports.AggregateTransactionsArgs = AggregateTransactionsArgs;
