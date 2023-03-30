"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesCountOrderByAggregateInput = class DashboardslidesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCountOrderByAggregateInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCountOrderByAggregateInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCountOrderByAggregateInput.prototype, "description", void 0);
DashboardslidesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesCountOrderByAggregateInput", {
        isAbstract: true
    })
], DashboardslidesCountOrderByAggregateInput);
exports.DashboardslidesCountOrderByAggregateInput = DashboardslidesCountOrderByAggregateInput;
