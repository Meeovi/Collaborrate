"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsAvgOrderByAggregateInput_1 = require("../inputs/ReportsAvgOrderByAggregateInput");
const ReportsCountOrderByAggregateInput_1 = require("../inputs/ReportsCountOrderByAggregateInput");
const ReportsMaxOrderByAggregateInput_1 = require("../inputs/ReportsMaxOrderByAggregateInput");
const ReportsMinOrderByAggregateInput_1 = require("../inputs/ReportsMinOrderByAggregateInput");
const ReportsSumOrderByAggregateInput_1 = require("../inputs/ReportsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReportsOrderByWithAggregationInput = class ReportsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "applied_coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithAggregationInput.prototype, "ip_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCountOrderByAggregateInput_1.ReportsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsCountOrderByAggregateInput_1.ReportsCountOrderByAggregateInput)
], ReportsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsAvgOrderByAggregateInput_1.ReportsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsAvgOrderByAggregateInput_1.ReportsAvgOrderByAggregateInput)
], ReportsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMaxOrderByAggregateInput_1.ReportsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMaxOrderByAggregateInput_1.ReportsMaxOrderByAggregateInput)
], ReportsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMinOrderByAggregateInput_1.ReportsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMinOrderByAggregateInput_1.ReportsMinOrderByAggregateInput)
], ReportsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsSumOrderByAggregateInput_1.ReportsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsSumOrderByAggregateInput_1.ReportsSumOrderByAggregateInput)
], ReportsOrderByWithAggregationInput.prototype, "_sum", void 0);
ReportsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReportsOrderByWithAggregationInput);
exports.ReportsOrderByWithAggregationInput = ReportsOrderByWithAggregationInput;
