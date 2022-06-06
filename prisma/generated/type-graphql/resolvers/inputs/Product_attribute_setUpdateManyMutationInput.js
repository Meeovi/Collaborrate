"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_attribute_setUpdateManyMutationInput = class Product_attribute_setUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_attribute_setUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Product_attribute_setUpdateManyMutationInput.prototype, "based_on", void 0);
Product_attribute_setUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setUpdateManyMutationInput", {
        isAbstract: true
    })
], Product_attribute_setUpdateManyMutationInput);
exports.Product_attribute_setUpdateManyMutationInput = Product_attribute_setUpdateManyMutationInput;
