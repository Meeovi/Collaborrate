"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateWithoutCustomer_paymentInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutCustomer_paymentInput = class CustomersCreateOrConnectWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutCustomer_paymentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput)
], CustomersCreateOrConnectWithoutCustomer_paymentInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutCustomer_paymentInput);
exports.CustomersCreateOrConnectWithoutCustomer_paymentInput = CustomersCreateOrConnectWithoutCustomer_paymentInput;
