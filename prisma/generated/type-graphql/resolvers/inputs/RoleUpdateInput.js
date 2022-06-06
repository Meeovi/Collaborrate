"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoleUpdateInput = class RoleUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "role_name", void 0);
RoleUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateInput", {
        isAbstract: true
    })
], RoleUpdateInput);
exports.RoleUpdateInput = RoleUpdateInput;
