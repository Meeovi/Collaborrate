"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistUpdateManyMutationInput_1 = require("../../../inputs/ChecklistUpdateManyMutationInput");
const ChecklistWhereInput_1 = require("../../../inputs/ChecklistWhereInput");
let UpdateManyChecklistArgs = class UpdateManyChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistUpdateManyMutationInput_1.ChecklistUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistUpdateManyMutationInput_1.ChecklistUpdateManyMutationInput)
], UpdateManyChecklistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereInput_1.ChecklistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereInput_1.ChecklistWhereInput)
], UpdateManyChecklistArgs.prototype, "where", void 0);
UpdateManyChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyChecklistArgs);
exports.UpdateManyChecklistArgs = UpdateManyChecklistArgs;
