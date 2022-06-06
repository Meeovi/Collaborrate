"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutOrdersInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductsUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/ProductsUpdateOneRequiredWithoutOrdersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionsUpdateManyWithoutOrdersInput_1 = require("../inputs/TransactionsUpdateManyWithoutOrdersInput");
let OrdersUpdateWithoutQuotesInput = class OrdersUpdateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrdersUpdateWithoutQuotesInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutOrdersInput_1.CustomersUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutOrdersInput_1.CustomersUpdateOneRequiredWithoutOrdersInput)
], OrdersUpdateWithoutQuotesInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutOrdersInput_1.ProductsUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateOneRequiredWithoutOrdersInput_1.ProductsUpdateOneRequiredWithoutOrdersInput)
], OrdersUpdateWithoutQuotesInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateManyWithoutOrdersInput_1.TransactionsUpdateManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateManyWithoutOrdersInput_1.TransactionsUpdateManyWithoutOrdersInput)
], OrdersUpdateWithoutQuotesInput.prototype, "transactions", void 0);
OrdersUpdateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersUpdateWithoutQuotesInput);
exports.OrdersUpdateWithoutQuotesInput = OrdersUpdateWithoutQuotesInput;
