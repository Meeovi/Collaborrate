"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsAvgOrderByAggregateInput_1 = require("../inputs/ReturnsAvgOrderByAggregateInput");
const ReturnsCountOrderByAggregateInput_1 = require("../inputs/ReturnsCountOrderByAggregateInput");
const ReturnsMaxOrderByAggregateInput_1 = require("../inputs/ReturnsMaxOrderByAggregateInput");
const ReturnsMinOrderByAggregateInput_1 = require("../inputs/ReturnsMinOrderByAggregateInput");
const ReturnsSumOrderByAggregateInput_1 = require("../inputs/ReturnsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsOrderByWithAggregationInput = class ReturnsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "shippingNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "shippingDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "liquidationReason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "howShipped", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "shipTo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithAggregationInput.prototype, "case_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCountOrderByAggregateInput_1.ReturnsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCountOrderByAggregateInput_1.ReturnsCountOrderByAggregateInput)
], ReturnsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsAvgOrderByAggregateInput_1.ReturnsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsAvgOrderByAggregateInput_1.ReturnsAvgOrderByAggregateInput)
], ReturnsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMaxOrderByAggregateInput_1.ReturnsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMaxOrderByAggregateInput_1.ReturnsMaxOrderByAggregateInput)
], ReturnsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMinOrderByAggregateInput_1.ReturnsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMinOrderByAggregateInput_1.ReturnsMinOrderByAggregateInput)
], ReturnsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsSumOrderByAggregateInput_1.ReturnsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsSumOrderByAggregateInput_1.ReturnsSumOrderByAggregateInput)
], ReturnsOrderByWithAggregationInput.prototype, "_sum", void 0);
ReturnsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReturnsOrderByWithAggregationInput);
exports.ReturnsOrderByWithAggregationInput = ReturnsOrderByWithAggregationInput;
