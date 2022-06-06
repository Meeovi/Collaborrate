"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByWithRelationInput_1 = require("../../../inputs/Customer_paymentOrderByWithRelationInput");
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
const Customer_paymentScalarFieldEnum_1 = require("../../../../enums/Customer_paymentScalarFieldEnum");
let FindFirstCustomer_paymentArgs = class FindFirstCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], FindFirstCustomer_paymentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomer_paymentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], FindFirstCustomer_paymentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomer_paymentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomer_paymentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentScalarFieldEnum_1.Customer_paymentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomer_paymentArgs.prototype, "distinct", void 0);
FindFirstCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCustomer_paymentArgs);
exports.FindFirstCustomer_paymentArgs = FindFirstCustomer_paymentArgs;
