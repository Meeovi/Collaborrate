"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput");
const CustomersCreateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateWithoutCustomer_paymentInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutCustomer_paymentInput = class CustomersCreateNestedOneWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput)
], CustomersCreateNestedOneWithoutCustomer_paymentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_paymentInput_1.CustomersCreateOrConnectWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCustomer_paymentInput_1.CustomersCreateOrConnectWithoutCustomer_paymentInput)
], CustomersCreateNestedOneWithoutCustomer_paymentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutCustomer_paymentInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutCustomer_paymentInput);
exports.CustomersCreateNestedOneWithoutCustomer_paymentInput = CustomersCreateNestedOneWithoutCustomer_paymentInput;
