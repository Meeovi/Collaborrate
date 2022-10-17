"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesOrderByWithAggregationInput_1 = require("../../../inputs/WorkspacesOrderByWithAggregationInput");
const WorkspacesScalarWhereWithAggregatesInput_1 = require("../../../inputs/WorkspacesScalarWhereWithAggregatesInput");
const WorkspacesWhereInput_1 = require("../../../inputs/WorkspacesWhereInput");
const WorkspacesScalarFieldEnum_1 = require("../../../../enums/WorkspacesScalarFieldEnum");
let GroupByWorkspacesArgs = class GroupByWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereInput_1.WorkspacesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereInput_1.WorkspacesWhereInput)
], GroupByWorkspacesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesOrderByWithAggregationInput_1.WorkspacesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkspacesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesScalarFieldEnum_1.WorkspacesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkspacesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesScalarWhereWithAggregatesInput_1.WorkspacesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesScalarWhereWithAggregatesInput_1.WorkspacesScalarWhereWithAggregatesInput)
], GroupByWorkspacesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkspacesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkspacesArgs.prototype, "skip", void 0);
GroupByWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWorkspacesArgs);
exports.GroupByWorkspacesArgs = GroupByWorkspacesArgs;
