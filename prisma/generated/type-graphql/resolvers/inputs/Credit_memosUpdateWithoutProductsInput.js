"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CustomersUpdateOneRequiredWithoutCredit_memosInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutCredit_memosInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Credit_memosUpdateWithoutProductsInput = class Credit_memosUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCredit_memosInput_1.CustomersUpdateOneRequiredWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutCredit_memosInput_1.CustomersUpdateOneRequiredWithoutCredit_memosInput)
], Credit_memosUpdateWithoutProductsInput.prototype, "customers", void 0);
Credit_memosUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosUpdateWithoutProductsInput);
exports.Credit_memosUpdateWithoutProductsInput = Credit_memosUpdateWithoutProductsInput;
