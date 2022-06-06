"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesOrderByWithAggregationInput_1 = require("../../../inputs/Project_templatesOrderByWithAggregationInput");
const Project_templatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Project_templatesScalarWhereWithAggregatesInput");
const Project_templatesWhereInput_1 = require("../../../inputs/Project_templatesWhereInput");
const Project_templatesScalarFieldEnum_1 = require("../../../../enums/Project_templatesScalarFieldEnum");
let GroupByProject_templatesArgs = class GroupByProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereInput_1.Project_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereInput_1.Project_templatesWhereInput)
], GroupByProject_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesOrderByWithAggregationInput_1.Project_templatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProject_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesScalarFieldEnum_1.Project_templatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProject_templatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesScalarWhereWithAggregatesInput_1.Project_templatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesScalarWhereWithAggregatesInput_1.Project_templatesScalarWhereWithAggregatesInput)
], GroupByProject_templatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProject_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProject_templatesArgs.prototype, "skip", void 0);
GroupByProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProject_templatesArgs);
exports.GroupByProject_templatesArgs = GroupByProject_templatesArgs;
