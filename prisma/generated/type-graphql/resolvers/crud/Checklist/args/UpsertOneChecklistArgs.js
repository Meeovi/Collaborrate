"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistCreateInput_1 = require("../../../inputs/ChecklistCreateInput");
const ChecklistUpdateInput_1 = require("../../../inputs/ChecklistUpdateInput");
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
let UpsertOneChecklistArgs = class UpsertOneChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], UpsertOneChecklistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistCreateInput_1.ChecklistCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistCreateInput_1.ChecklistCreateInput)
], UpsertOneChecklistArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistUpdateInput_1.ChecklistUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistUpdateInput_1.ChecklistUpdateInput)
], UpsertOneChecklistArgs.prototype, "update", void 0);
UpsertOneChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneChecklistArgs);
exports.UpsertOneChecklistArgs = UpsertOneChecklistArgs;
