"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsOrderByWithRelationInput_1 = require("../../../inputs/TransactionsOrderByWithRelationInput");
const TransactionsWhereInput_1 = require("../../../inputs/TransactionsWhereInput");
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
const TransactionsScalarFieldEnum_1 = require("../../../../enums/TransactionsScalarFieldEnum");
let Customer_paymentTransactionsArgs = class Customer_paymentTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], Customer_paymentTransactionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsOrderByWithRelationInput_1.TransactionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentTransactionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], Customer_paymentTransactionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentTransactionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentTransactionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsScalarFieldEnum_1.TransactionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentTransactionsArgs.prototype, "distinct", void 0);
Customer_paymentTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], Customer_paymentTransactionsArgs);
exports.Customer_paymentTransactionsArgs = Customer_paymentTransactionsArgs;
