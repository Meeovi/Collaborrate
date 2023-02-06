"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableBoolFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NullableBoolFieldUpdateOperationsInput = class NullableBoolFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NullableBoolFieldUpdateOperationsInput.prototype, "set", void 0);
NullableBoolFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableBoolFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableBoolFieldUpdateOperationsInput);
exports.NullableBoolFieldUpdateOperationsInput = NullableBoolFieldUpdateOperationsInput;
