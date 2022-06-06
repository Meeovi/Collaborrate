"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductsUpdateOneRequiredWithoutTax_ruleInput_1 = require("../inputs/ProductsUpdateOneRequiredWithoutTax_ruleInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Tax_ruleUpdateInput = class Tax_ruleUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Tax_ruleUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Tax_ruleUpdateInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutTax_ruleInput_1.ProductsUpdateOneRequiredWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsUpdateOneRequiredWithoutTax_ruleInput_1.ProductsUpdateOneRequiredWithoutTax_ruleInput)
], Tax_ruleUpdateInput.prototype, "products", void 0);
Tax_ruleUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpdateInput", {
        isAbstract: true
    })
], Tax_ruleUpdateInput);
exports.Tax_ruleUpdateInput = Tax_ruleUpdateInput;
