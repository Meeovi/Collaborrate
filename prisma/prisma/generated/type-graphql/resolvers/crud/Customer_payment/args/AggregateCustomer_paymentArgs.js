"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByWithRelationInput_1 = require("../../../inputs/Customer_paymentOrderByWithRelationInput");
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let AggregateCustomer_paymentArgs = class AggregateCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], AggregateCustomer_paymentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCustomer_paymentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], AggregateCustomer_paymentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomer_paymentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomer_paymentArgs.prototype, "skip", void 0);
AggregateCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCustomer_paymentArgs);
exports.AggregateCustomer_paymentArgs = AggregateCustomer_paymentArgs;
