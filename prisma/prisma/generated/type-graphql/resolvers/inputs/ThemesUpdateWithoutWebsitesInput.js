"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpdateWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let ThemesUpdateWithoutWebsitesInput = class ThemesUpdateWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateWithoutWebsitesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateWithoutWebsitesInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateWithoutWebsitesInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateWithoutWebsitesInput.prototype, "action", void 0);
ThemesUpdateWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpdateWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesUpdateWithoutWebsitesInput);
exports.ThemesUpdateWithoutWebsitesInput = ThemesUpdateWithoutWebsitesInput;
