"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutCustomer_paymentInput");
const NullableBigIntFieldUpdateOperationsInput_1 = require("../inputs/NullableBigIntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TransactionsUpdateManyWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpdateManyWithoutCustomer_paymentInput");
let Customer_paymentUpdateInput = class Customer_paymentUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBigIntFieldUpdateOperationsInput_1.NullableBigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBigIntFieldUpdateOperationsInput_1.NullableBigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1.CustomersUpdateOneRequiredWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1.CustomersUpdateOneRequiredWithoutCustomer_paymentInput)
], Customer_paymentUpdateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateManyWithoutCustomer_paymentInput_1.TransactionsUpdateManyWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateManyWithoutCustomer_paymentInput_1.TransactionsUpdateManyWithoutCustomer_paymentInput)
], Customer_paymentUpdateInput.prototype, "transactions", void 0);
Customer_paymentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpdateInput", {
        isAbstract: true
    })
], Customer_paymentUpdateInput);
exports.Customer_paymentUpdateInput = Customer_paymentUpdateInput;
