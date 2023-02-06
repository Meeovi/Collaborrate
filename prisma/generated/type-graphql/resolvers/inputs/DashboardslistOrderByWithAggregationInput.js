"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslistOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistAvgOrderByAggregateInput_1 = require("../inputs/DashboardslistAvgOrderByAggregateInput");
const DashboardslistCountOrderByAggregateInput_1 = require("../inputs/DashboardslistCountOrderByAggregateInput");
const DashboardslistMaxOrderByAggregateInput_1 = require("../inputs/DashboardslistMaxOrderByAggregateInput");
const DashboardslistMinOrderByAggregateInput_1 = require("../inputs/DashboardslistMinOrderByAggregateInput");
const DashboardslistSumOrderByAggregateInput_1 = require("../inputs/DashboardslistSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslistOrderByWithAggregationInput = class DashboardslistOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "privacy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "checklists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "visits", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "sales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistCountOrderByAggregateInput_1.DashboardslistCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistCountOrderByAggregateInput_1.DashboardslistCountOrderByAggregateInput)
], DashboardslistOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistAvgOrderByAggregateInput_1.DashboardslistAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistAvgOrderByAggregateInput_1.DashboardslistAvgOrderByAggregateInput)
], DashboardslistOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMaxOrderByAggregateInput_1.DashboardslistMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMaxOrderByAggregateInput_1.DashboardslistMaxOrderByAggregateInput)
], DashboardslistOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMinOrderByAggregateInput_1.DashboardslistMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMinOrderByAggregateInput_1.DashboardslistMinOrderByAggregateInput)
], DashboardslistOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistSumOrderByAggregateInput_1.DashboardslistSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistSumOrderByAggregateInput_1.DashboardslistSumOrderByAggregateInput)
], DashboardslistOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardslistOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslistOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardslistOrderByWithAggregationInput);
exports.DashboardslistOrderByWithAggregationInput = DashboardslistOrderByWithAggregationInput;
