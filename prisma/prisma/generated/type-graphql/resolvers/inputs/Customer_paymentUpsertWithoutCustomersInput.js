"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpsertWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateWithoutCustomersInput");
const Customer_paymentUpdateWithoutCustomersInput_1 = require("../inputs/Customer_paymentUpdateWithoutCustomersInput");
let Customer_paymentUpsertWithoutCustomersInput = class Customer_paymentUpsertWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutCustomersInput_1.Customer_paymentUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateWithoutCustomersInput_1.Customer_paymentUpdateWithoutCustomersInput)
], Customer_paymentUpsertWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput)
], Customer_paymentUpsertWithoutCustomersInput.prototype, "create", void 0);
Customer_paymentUpsertWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpsertWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_paymentUpsertWithoutCustomersInput);
exports.Customer_paymentUpsertWithoutCustomersInput = Customer_paymentUpsertWithoutCustomersInput;
