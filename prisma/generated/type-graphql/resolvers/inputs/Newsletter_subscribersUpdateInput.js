"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Newsletter_subscribersUpdateInput = class Newsletter_subscribersUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Newsletter_subscribersUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput_1.CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput_1.CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput)
], Newsletter_subscribersUpdateInput.prototype, "customers", void 0);
Newsletter_subscribersUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersUpdateInput", {
        isAbstract: true
    })
], Newsletter_subscribersUpdateInput);
exports.Newsletter_subscribersUpdateInput = Newsletter_subscribersUpdateInput;
