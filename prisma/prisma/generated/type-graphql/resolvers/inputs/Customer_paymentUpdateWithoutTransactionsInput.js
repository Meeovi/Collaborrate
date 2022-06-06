"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpdateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutCustomer_paymentInput");
const NullableBigIntFieldUpdateOperationsInput_1 = require("../inputs/NullableBigIntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let Customer_paymentUpdateWithoutTransactionsInput = class Customer_paymentUpdateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBigIntFieldUpdateOperationsInput_1.NullableBigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBigIntFieldUpdateOperationsInput_1.NullableBigIntFieldUpdateOperationsInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1.CustomersUpdateOneRequiredWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutCustomer_paymentInput_1.CustomersUpdateOneRequiredWithoutCustomer_paymentInput)
], Customer_paymentUpdateWithoutTransactionsInput.prototype, "customers", void 0);
Customer_paymentUpdateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpdateWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentUpdateWithoutTransactionsInput);
exports.Customer_paymentUpdateWithoutTransactionsInput = Customer_paymentUpdateWithoutTransactionsInput;
