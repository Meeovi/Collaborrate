"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentUpdateOneRequiredWithoutTransactionsInput_1 = require("../inputs/Customer_paymentUpdateOneRequiredWithoutTransactionsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TransactionsUpdateWithoutOrdersInput = class TransactionsUpdateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionsUpdateWithoutOrdersInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionsUpdateWithoutOrdersInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TransactionsUpdateWithoutOrdersInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionsUpdateWithoutOrdersInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateOneRequiredWithoutTransactionsInput_1.Customer_paymentUpdateOneRequiredWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateOneRequiredWithoutTransactionsInput_1.Customer_paymentUpdateOneRequiredWithoutTransactionsInput)
], TransactionsUpdateWithoutOrdersInput.prototype, "customer_payment", void 0);
TransactionsUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsUpdateWithoutOrdersInput);
exports.TransactionsUpdateWithoutOrdersInput = TransactionsUpdateWithoutOrdersInput;
