"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput_1 = require("../inputs/Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_attribute_setUpdateInput = class Product_attribute_setUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_attribute_setUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Product_attribute_setUpdateInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput_1.Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput_1.Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput)
], Product_attribute_setUpdateInput.prototype, "product_attribute", void 0);
Product_attribute_setUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setUpdateInput", {
        isAbstract: true
    })
], Product_attribute_setUpdateInput);
exports.Product_attribute_setUpdateInput = Product_attribute_setUpdateInput;
