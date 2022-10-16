"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsAvgOrderByAggregateInput_1 = require("../inputs/DashboardsAvgOrderByAggregateInput");
const DashboardsCountOrderByAggregateInput_1 = require("../inputs/DashboardsCountOrderByAggregateInput");
const DashboardsMaxOrderByAggregateInput_1 = require("../inputs/DashboardsMaxOrderByAggregateInput");
const DashboardsMinOrderByAggregateInput_1 = require("../inputs/DashboardsMinOrderByAggregateInput");
const DashboardsSumOrderByAggregateInput_1 = require("../inputs/DashboardsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardsOrderByWithAggregationInput = class DashboardsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "privacy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "checklists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "visits", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "sales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsCountOrderByAggregateInput_1.DashboardsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsCountOrderByAggregateInput_1.DashboardsCountOrderByAggregateInput)
], DashboardsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsAvgOrderByAggregateInput_1.DashboardsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsAvgOrderByAggregateInput_1.DashboardsAvgOrderByAggregateInput)
], DashboardsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMaxOrderByAggregateInput_1.DashboardsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMaxOrderByAggregateInput_1.DashboardsMaxOrderByAggregateInput)
], DashboardsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMinOrderByAggregateInput_1.DashboardsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMinOrderByAggregateInput_1.DashboardsMinOrderByAggregateInput)
], DashboardsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsSumOrderByAggregateInput_1.DashboardsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsSumOrderByAggregateInput_1.DashboardsSumOrderByAggregateInput)
], DashboardsOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardsOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardsOrderByWithAggregationInput);
exports.DashboardsOrderByWithAggregationInput = DashboardsOrderByWithAggregationInput;
