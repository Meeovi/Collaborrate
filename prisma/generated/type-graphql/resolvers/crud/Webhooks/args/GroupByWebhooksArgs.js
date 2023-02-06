"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWebhooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksOrderByWithAggregationInput_1 = require("../../../inputs/WebhooksOrderByWithAggregationInput");
const WebhooksScalarWhereWithAggregatesInput_1 = require("../../../inputs/WebhooksScalarWhereWithAggregatesInput");
const WebhooksWhereInput_1 = require("../../../inputs/WebhooksWhereInput");
const WebhooksScalarFieldEnum_1 = require("../../../../enums/WebhooksScalarFieldEnum");
let GroupByWebhooksArgs = class GroupByWebhooksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksWhereInput_1.WebhooksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksWhereInput_1.WebhooksWhereInput)
], GroupByWebhooksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksOrderByWithAggregationInput_1.WebhooksOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWebhooksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksScalarFieldEnum_1.WebhooksScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWebhooksArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksScalarWhereWithAggregatesInput_1.WebhooksScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksScalarWhereWithAggregatesInput_1.WebhooksScalarWhereWithAggregatesInput)
], GroupByWebhooksArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWebhooksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWebhooksArgs.prototype, "skip", void 0);
GroupByWebhooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWebhooksArgs);
exports.GroupByWebhooksArgs = GroupByWebhooksArgs;
