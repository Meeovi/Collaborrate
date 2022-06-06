"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateNestedOneWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateOrConnectWithoutCustomersInput");
const Customer_paymentCreateWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateWithoutCustomersInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentCreateNestedOneWithoutCustomersInput = class Customer_paymentCreateNestedOneWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput)
], Customer_paymentCreateNestedOneWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutCustomersInput_1.Customer_paymentCreateOrConnectWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateOrConnectWithoutCustomersInput_1.Customer_paymentCreateOrConnectWithoutCustomersInput)
], Customer_paymentCreateNestedOneWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentCreateNestedOneWithoutCustomersInput.prototype, "connect", void 0);
Customer_paymentCreateNestedOneWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateNestedOneWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_paymentCreateNestedOneWithoutCustomersInput);
exports.Customer_paymentCreateNestedOneWithoutCustomersInput = Customer_paymentCreateNestedOneWithoutCustomersInput;
