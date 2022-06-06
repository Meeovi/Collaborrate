"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleOrderByWithAggregationInput_1 = require("../../../inputs/RoleOrderByWithAggregationInput");
const RoleScalarWhereWithAggregatesInput_1 = require("../../../inputs/RoleScalarWhereWithAggregatesInput");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
const RoleScalarFieldEnum_1 = require("../../../../enums/RoleScalarFieldEnum");
let GroupByRoleArgs = class GroupByRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], GroupByRoleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleOrderByWithAggregationInput_1.RoleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRoleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarFieldEnum_1.RoleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRoleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleScalarWhereWithAggregatesInput_1.RoleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleScalarWhereWithAggregatesInput_1.RoleScalarWhereWithAggregatesInput)
], GroupByRoleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRoleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRoleArgs.prototype, "skip", void 0);
GroupByRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRoleArgs);
exports.GroupByRoleArgs = GroupByRoleArgs;
