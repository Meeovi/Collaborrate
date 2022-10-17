"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesOrderByWithAggregationInput_1 = require("../../../inputs/WebsitesOrderByWithAggregationInput");
const WebsitesScalarWhereWithAggregatesInput_1 = require("../../../inputs/WebsitesScalarWhereWithAggregatesInput");
const WebsitesWhereInput_1 = require("../../../inputs/WebsitesWhereInput");
const WebsitesScalarFieldEnum_1 = require("../../../../enums/WebsitesScalarFieldEnum");
let GroupByWebsitesArgs = class GroupByWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], GroupByWebsitesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesOrderByWithAggregationInput_1.WebsitesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWebsitesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesScalarFieldEnum_1.WebsitesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWebsitesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesScalarWhereWithAggregatesInput_1.WebsitesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesScalarWhereWithAggregatesInput_1.WebsitesScalarWhereWithAggregatesInput)
], GroupByWebsitesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWebsitesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWebsitesArgs.prototype, "skip", void 0);
GroupByWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWebsitesArgs);
exports.GroupByWebsitesArgs = GroupByWebsitesArgs;
