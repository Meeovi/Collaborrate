"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOrderByWithAggregationInput_1 = require("../../../inputs/TagsOrderByWithAggregationInput");
const TagsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TagsScalarWhereWithAggregatesInput");
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
const TagsScalarFieldEnum_1 = require("../../../../enums/TagsScalarFieldEnum");
let GroupByTagsArgs = class GroupByTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsWhereInput_1.TagsWhereInput)
], GroupByTagsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOrderByWithAggregationInput_1.TagsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsScalarFieldEnum_1.TagsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsScalarWhereWithAggregatesInput_1.TagsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsScalarWhereWithAggregatesInput_1.TagsScalarWhereWithAggregatesInput)
], GroupByTagsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsArgs.prototype, "skip", void 0);
GroupByTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTagsArgs);
exports.GroupByTagsArgs = GroupByTagsArgs;
