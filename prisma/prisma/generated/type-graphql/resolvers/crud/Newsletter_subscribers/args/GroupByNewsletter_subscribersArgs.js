"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersOrderByWithAggregationInput_1 = require("../../../inputs/Newsletter_subscribersOrderByWithAggregationInput");
const Newsletter_subscribersScalarWhereWithAggregatesInput_1 = require("../../../inputs/Newsletter_subscribersScalarWhereWithAggregatesInput");
const Newsletter_subscribersWhereInput_1 = require("../../../inputs/Newsletter_subscribersWhereInput");
const Newsletter_subscribersScalarFieldEnum_1 = require("../../../../enums/Newsletter_subscribersScalarFieldEnum");
let GroupByNewsletter_subscribersArgs = class GroupByNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], GroupByNewsletter_subscribersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByWithAggregationInput_1.Newsletter_subscribersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNewsletter_subscribersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarFieldEnum_1.Newsletter_subscribersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByNewsletter_subscribersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersScalarWhereWithAggregatesInput_1.Newsletter_subscribersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersScalarWhereWithAggregatesInput_1.Newsletter_subscribersScalarWhereWithAggregatesInput)
], GroupByNewsletter_subscribersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNewsletter_subscribersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByNewsletter_subscribersArgs.prototype, "skip", void 0);
GroupByNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByNewsletter_subscribersArgs);
exports.GroupByNewsletter_subscribersArgs = GroupByNewsletter_subscribersArgs;
