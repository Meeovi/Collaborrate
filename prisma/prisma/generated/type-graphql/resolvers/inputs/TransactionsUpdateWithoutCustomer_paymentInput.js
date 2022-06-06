"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrdersUpdateOneRequiredWithoutTransactionsInput_1 = require("../inputs/OrdersUpdateOneRequiredWithoutTransactionsInput");
let TransactionsUpdateWithoutCustomer_paymentInput = class TransactionsUpdateWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionsUpdateWithoutCustomer_paymentInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionsUpdateWithoutCustomer_paymentInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TransactionsUpdateWithoutCustomer_paymentInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionsUpdateWithoutCustomer_paymentInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateOneRequiredWithoutTransactionsInput_1.OrdersUpdateOneRequiredWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateOneRequiredWithoutTransactionsInput_1.OrdersUpdateOneRequiredWithoutTransactionsInput)
], TransactionsUpdateWithoutCustomer_paymentInput.prototype, "orders", void 0);
TransactionsUpdateWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsUpdateWithoutCustomer_paymentInput);
exports.TransactionsUpdateWithoutCustomer_paymentInput = TransactionsUpdateWithoutCustomer_paymentInput;
