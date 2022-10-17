"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeOrderByWithAggregationInput_1 = require("../../../inputs/Content_typeOrderByWithAggregationInput");
const Content_typeScalarWhereWithAggregatesInput_1 = require("../../../inputs/Content_typeScalarWhereWithAggregatesInput");
const Content_typeWhereInput_1 = require("../../../inputs/Content_typeWhereInput");
const Content_typeScalarFieldEnum_1 = require("../../../../enums/Content_typeScalarFieldEnum");
let GroupByContent_typeArgs = class GroupByContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereInput_1.Content_typeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeWhereInput_1.Content_typeWhereInput)
], GroupByContent_typeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeOrderByWithAggregationInput_1.Content_typeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByContent_typeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeScalarFieldEnum_1.Content_typeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByContent_typeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeScalarWhereWithAggregatesInput_1.Content_typeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeScalarWhereWithAggregatesInput_1.Content_typeScalarWhereWithAggregatesInput)
], GroupByContent_typeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByContent_typeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByContent_typeArgs.prototype, "skip", void 0);
GroupByContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByContent_typeArgs);
exports.GroupByContent_typeArgs = GroupByContent_typeArgs;
