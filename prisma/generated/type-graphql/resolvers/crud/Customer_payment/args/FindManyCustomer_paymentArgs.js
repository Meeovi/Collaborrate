"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByWithRelationInput_1 = require("../../../inputs/Customer_paymentOrderByWithRelationInput");
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
const Customer_paymentScalarFieldEnum_1 = require("../../../../enums/Customer_paymentScalarFieldEnum");
let FindManyCustomer_paymentArgs = class FindManyCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], FindManyCustomer_paymentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCustomer_paymentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], FindManyCustomer_paymentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCustomer_paymentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCustomer_paymentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentScalarFieldEnum_1.Customer_paymentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCustomer_paymentArgs.prototype, "distinct", void 0);
FindManyCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCustomer_paymentArgs);
exports.FindManyCustomer_paymentArgs = FindManyCustomer_paymentArgs;
