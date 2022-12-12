"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistOrderByWithAggregationInput_1 = require("../../../inputs/ChecklistOrderByWithAggregationInput");
const ChecklistScalarWhereWithAggregatesInput_1 = require("../../../inputs/ChecklistScalarWhereWithAggregatesInput");
const ChecklistWhereInput_1 = require("../../../inputs/ChecklistWhereInput");
const ChecklistScalarFieldEnum_1 = require("../../../../enums/ChecklistScalarFieldEnum");
let GroupByChecklistArgs = class GroupByChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereInput_1.ChecklistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereInput_1.ChecklistWhereInput)
], GroupByChecklistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistOrderByWithAggregationInput_1.ChecklistOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChecklistArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistScalarFieldEnum_1.ChecklistScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChecklistArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistScalarWhereWithAggregatesInput_1.ChecklistScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistScalarWhereWithAggregatesInput_1.ChecklistScalarWhereWithAggregatesInput)
], GroupByChecklistArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChecklistArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChecklistArgs.prototype, "skip", void 0);
GroupByChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByChecklistArgs);
exports.GroupByChecklistArgs = GroupByChecklistArgs;
