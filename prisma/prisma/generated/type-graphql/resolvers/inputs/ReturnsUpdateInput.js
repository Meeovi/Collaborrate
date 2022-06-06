"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CustomersUpdateOneRequiredWithoutReturnsInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutReturnsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductsUpdateOneRequiredWithoutReturnsInput_1 = require("../inputs/ProductsUpdateOneRequiredWithoutReturnsInput");
let ReturnsUpdateInput = class ReturnsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], ReturnsUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ReturnsUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ReturnsUpdateInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutReturnsInput_1.CustomersUpdateOneRequiredWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutReturnsInput_1.CustomersUpdateOneRequiredWithoutReturnsInput)
], ReturnsUpdateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutReturnsInput_1.ProductsUpdateOneRequiredWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateOneRequiredWithoutReturnsInput_1.ProductsUpdateOneRequiredWithoutReturnsInput)
], ReturnsUpdateInput.prototype, "products", void 0);
ReturnsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateInput", {
        isAbstract: true
    })
], ReturnsUpdateInput);
exports.ReturnsUpdateInput = ReturnsUpdateInput;
