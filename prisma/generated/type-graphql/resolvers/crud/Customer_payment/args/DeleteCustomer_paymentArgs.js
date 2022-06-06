"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let DeleteCustomer_paymentArgs = class DeleteCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], DeleteCustomer_paymentArgs.prototype, "where", void 0);
DeleteCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCustomer_paymentArgs);
exports.DeleteCustomer_paymentArgs = DeleteCustomer_paymentArgs;
