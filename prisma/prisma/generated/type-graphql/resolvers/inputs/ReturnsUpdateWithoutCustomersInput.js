"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductsUpdateOneRequiredWithoutReturnsInput_1 = require("../inputs/ProductsUpdateOneRequiredWithoutReturnsInput");
let ReturnsUpdateWithoutCustomersInput = class ReturnsUpdateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutReturnsInput_1.ProductsUpdateOneRequiredWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateOneRequiredWithoutReturnsInput_1.ProductsUpdateOneRequiredWithoutReturnsInput)
], ReturnsUpdateWithoutCustomersInput.prototype, "products", void 0);
ReturnsUpdateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsUpdateWithoutCustomersInput);
exports.ReturnsUpdateWithoutCustomersInput = ReturnsUpdateWithoutCustomersInput;
