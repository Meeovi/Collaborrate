"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByWithAggregationInput_1 = require("../../../inputs/NewslettersOrderByWithAggregationInput");
const NewslettersScalarWhereWithAggregatesInput_1 = require("../../../inputs/NewslettersScalarWhereWithAggregatesInput");
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
const NewslettersScalarFieldEnum_1 = require("../../../../enums/NewslettersScalarFieldEnum");
let GroupByNewslettersArgs = class GroupByNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], GroupByNewslettersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersOrderByWithAggregationInput_1.NewslettersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNewslettersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersScalarFieldEnum_1.NewslettersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNewslettersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersScalarWhereWithAggregatesInput_1.NewslettersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersScalarWhereWithAggregatesInput_1.NewslettersScalarWhereWithAggregatesInput)
], GroupByNewslettersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNewslettersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNewslettersArgs.prototype, "skip", void 0);
GroupByNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByNewslettersArgs);
exports.GroupByNewslettersArgs = GroupByNewslettersArgs;
