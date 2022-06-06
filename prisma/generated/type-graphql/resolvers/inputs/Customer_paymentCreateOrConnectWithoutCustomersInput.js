"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateWithoutCustomersInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentCreateOrConnectWithoutCustomersInput = class Customer_paymentCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput)
], Customer_paymentCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
Customer_paymentCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_paymentCreateOrConnectWithoutCustomersInput);
exports.Customer_paymentCreateOrConnectWithoutCustomersInput = Customer_paymentCreateOrConnectWithoutCustomersInput;
