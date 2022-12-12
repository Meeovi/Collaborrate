"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistUpdateInput_1 = require("../../../inputs/ChecklistUpdateInput");
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
let UpdateOneChecklistArgs = class UpdateOneChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistUpdateInput_1.ChecklistUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistUpdateInput_1.ChecklistUpdateInput)
], UpdateOneChecklistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], UpdateOneChecklistArgs.prototype, "where", void 0);
UpdateOneChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneChecklistArgs);
exports.UpdateOneChecklistArgs = UpdateOneChecklistArgs;
