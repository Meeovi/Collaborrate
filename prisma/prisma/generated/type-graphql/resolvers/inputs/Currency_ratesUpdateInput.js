"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDecimalFieldUpdateOperationsInput_1 = require("../inputs/NullableDecimalFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Currency_ratesUpdateInput = class Currency_ratesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Currency_ratesUpdateInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput)
], Currency_ratesUpdateInput.prototype, "usd", void 0);
Currency_ratesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesUpdateInput", {
        isAbstract: true
    })
], Currency_ratesUpdateInput);
exports.Currency_ratesUpdateInput = Currency_ratesUpdateInput;
