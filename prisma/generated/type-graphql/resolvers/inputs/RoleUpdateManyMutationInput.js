"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoleUpdateManyMutationInput = class RoleUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateManyMutationInput.prototype, "role_name", void 0);
RoleUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateManyMutationInput", {
        isAbstract: true
    })
], RoleUpdateManyMutationInput);
exports.RoleUpdateManyMutationInput = RoleUpdateManyMutationInput;
