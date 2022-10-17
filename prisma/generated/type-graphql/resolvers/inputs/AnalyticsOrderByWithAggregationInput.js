"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsAvgOrderByAggregateInput_1 = require("../inputs/AnalyticsAvgOrderByAggregateInput");
const AnalyticsCountOrderByAggregateInput_1 = require("../inputs/AnalyticsCountOrderByAggregateInput");
const AnalyticsMaxOrderByAggregateInput_1 = require("../inputs/AnalyticsMaxOrderByAggregateInput");
const AnalyticsMinOrderByAggregateInput_1 = require("../inputs/AnalyticsMinOrderByAggregateInput");
const AnalyticsSumOrderByAggregateInput_1 = require("../inputs/AnalyticsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AnalyticsOrderByWithAggregationInput = class AnalyticsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "share_data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "website_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "tracking_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "property_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "default_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "property_hit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "tracking_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "data_collection", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "data_retention", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithAggregationInput.prototype, "search_analytics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsCountOrderByAggregateInput_1.AnalyticsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsCountOrderByAggregateInput_1.AnalyticsCountOrderByAggregateInput)
], AnalyticsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsAvgOrderByAggregateInput_1.AnalyticsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsAvgOrderByAggregateInput_1.AnalyticsAvgOrderByAggregateInput)
], AnalyticsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMaxOrderByAggregateInput_1.AnalyticsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMaxOrderByAggregateInput_1.AnalyticsMaxOrderByAggregateInput)
], AnalyticsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMinOrderByAggregateInput_1.AnalyticsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMinOrderByAggregateInput_1.AnalyticsMinOrderByAggregateInput)
], AnalyticsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsSumOrderByAggregateInput_1.AnalyticsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsSumOrderByAggregateInput_1.AnalyticsSumOrderByAggregateInput)
], AnalyticsOrderByWithAggregationInput.prototype, "_sum", void 0);
AnalyticsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AnalyticsOrderByWithAggregationInput", {
        isAbstract: true
    })
], AnalyticsOrderByWithAggregationInput);
exports.AnalyticsOrderByWithAggregationInput = AnalyticsOrderByWithAggregationInput;
