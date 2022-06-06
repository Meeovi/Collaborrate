"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Tax_ruleUpdateWithoutProductsInput = class Tax_ruleUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Tax_ruleUpdateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Tax_ruleUpdateWithoutProductsInput.prototype, "tax_rate", void 0);
Tax_ruleUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpdateWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleUpdateWithoutProductsInput);
exports.Tax_ruleUpdateWithoutProductsInput = Tax_ruleUpdateWithoutProductsInput;
