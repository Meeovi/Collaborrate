"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesOrderByWithAggregationInput_1 = require("../../../inputs/TemplatesOrderByWithAggregationInput");
const TemplatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TemplatesScalarWhereWithAggregatesInput");
const TemplatesWhereInput_1 = require("../../../inputs/TemplatesWhereInput");
const TemplatesScalarFieldEnum_1 = require("../../../../enums/TemplatesScalarFieldEnum");
let GroupByTemplatesArgs = class GroupByTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereInput_1.TemplatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesWhereInput_1.TemplatesWhereInput)
], GroupByTemplatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TemplatesOrderByWithAggregationInput_1.TemplatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTemplatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TemplatesScalarFieldEnum_1.TemplatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTemplatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesScalarWhereWithAggregatesInput_1.TemplatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesScalarWhereWithAggregatesInput_1.TemplatesScalarWhereWithAggregatesInput)
], GroupByTemplatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTemplatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTemplatesArgs.prototype, "skip", void 0);
GroupByTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTemplatesArgs);
exports.GroupByTemplatesArgs = GroupByTemplatesArgs;
