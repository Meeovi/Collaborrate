"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlMinOrderByAggregateInput = class DashboardgraphqlMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMinOrderByAggregateInput.prototype, "description", void 0);
DashboardgraphqlMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlMinOrderByAggregateInput", {
        isAbstract: true
    })
], DashboardgraphqlMinOrderByAggregateInput);
exports.DashboardgraphqlMinOrderByAggregateInput = DashboardgraphqlMinOrderByAggregateInput;
