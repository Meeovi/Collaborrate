"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesOrderByWithAggregationInput_1 = require("../../../inputs/RolesOrderByWithAggregationInput");
const RolesScalarWhereWithAggregatesInput_1 = require("../../../inputs/RolesScalarWhereWithAggregatesInput");
const RolesWhereInput_1 = require("../../../inputs/RolesWhereInput");
const RolesScalarFieldEnum_1 = require("../../../../enums/RolesScalarFieldEnum");
let GroupByRolesArgs = class GroupByRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereInput_1.RolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereInput_1.RolesWhereInput)
], GroupByRolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesOrderByWithAggregationInput_1.RolesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRolesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesScalarFieldEnum_1.RolesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRolesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesScalarWhereWithAggregatesInput_1.RolesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesScalarWhereWithAggregatesInput_1.RolesScalarWhereWithAggregatesInput)
], GroupByRolesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRolesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRolesArgs.prototype, "skip", void 0);
GroupByRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRolesArgs);
exports.GroupByRolesArgs = GroupByRolesArgs;
