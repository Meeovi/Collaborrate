"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const NullableDecimalFieldUpdateOperationsInput_1 = require("../inputs/NullableDecimalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Currency_ratesUpdateManyMutationInput = class Currency_ratesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Currency_ratesUpdateManyMutationInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput)
], Currency_ratesUpdateManyMutationInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Currency_ratesUpdateManyMutationInput.prototype, "id", void 0);
Currency_ratesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesUpdateManyMutationInput", {
        isAbstract: true
    })
], Currency_ratesUpdateManyMutationInput);
exports.Currency_ratesUpdateManyMutationInput = Currency_ratesUpdateManyMutationInput;
