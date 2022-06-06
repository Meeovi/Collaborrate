"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableDecimalFieldUpdateOperationsInput_1 = require("../inputs/NullableDecimalFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let RatingUpdateManyMutationInput = class RatingUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RatingUpdateManyMutationInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RatingUpdateManyMutationInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RatingUpdateManyMutationInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RatingUpdateManyMutationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDecimalFieldUpdateOperationsInput_1.NullableDecimalFieldUpdateOperationsInput)
], RatingUpdateManyMutationInput.prototype, "sort_order", void 0);
RatingUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateManyMutationInput", {
        isAbstract: true
    })
], RatingUpdateManyMutationInput);
exports.RatingUpdateManyMutationInput = RatingUpdateManyMutationInput;
