"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateOneRequiredWithoutEmailsInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutEmailsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let EmailsUpdateInput = class EmailsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], EmailsUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], EmailsUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EmailsUpdateInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EmailsUpdateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EmailsUpdateInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutEmailsInput_1.CustomersUpdateOneRequiredWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutEmailsInput_1.CustomersUpdateOneRequiredWithoutEmailsInput)
], EmailsUpdateInput.prototype, "customers", void 0);
EmailsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsUpdateInput", {
        isAbstract: true
    })
], EmailsUpdateInput);
exports.EmailsUpdateInput = EmailsUpdateInput;
