"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateWithoutCustomer_paymentInput");
const CustomersUpdateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersUpdateWithoutCustomer_paymentInput");
let CustomersUpsertWithoutCustomer_paymentInput = class CustomersUpsertWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_paymentInput_1.CustomersUpdateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCustomer_paymentInput_1.CustomersUpdateWithoutCustomer_paymentInput)
], CustomersUpsertWithoutCustomer_paymentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput)
], CustomersUpsertWithoutCustomer_paymentInput.prototype, "create", void 0);
CustomersUpsertWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutCustomer_paymentInput);
exports.CustomersUpsertWithoutCustomer_paymentInput = CustomersUpsertWithoutCustomer_paymentInput;
