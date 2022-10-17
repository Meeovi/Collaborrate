"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Currency_symbolsUpdateManyMutationInput = class Currency_symbolsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Currency_symbolsUpdateManyMutationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], Currency_symbolsUpdateManyMutationInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Currency_symbolsUpdateManyMutationInput.prototype, "id", void 0);
Currency_symbolsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsUpdateManyMutationInput", {
        isAbstract: true
    })
], Currency_symbolsUpdateManyMutationInput);
exports.Currency_symbolsUpdateManyMutationInput = Currency_symbolsUpdateManyMutationInput;
