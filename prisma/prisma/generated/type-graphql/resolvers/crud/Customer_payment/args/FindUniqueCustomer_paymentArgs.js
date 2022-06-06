"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let FindUniqueCustomer_paymentArgs = class FindUniqueCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], FindUniqueCustomer_paymentArgs.prototype, "where", void 0);
FindUniqueCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCustomer_paymentArgs);
exports.FindUniqueCustomer_paymentArgs = FindUniqueCustomer_paymentArgs;
