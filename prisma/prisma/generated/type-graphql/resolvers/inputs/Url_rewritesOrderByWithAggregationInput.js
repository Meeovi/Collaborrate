"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesAvgOrderByAggregateInput_1 = require("../inputs/Url_rewritesAvgOrderByAggregateInput");
const Url_rewritesCountOrderByAggregateInput_1 = require("../inputs/Url_rewritesCountOrderByAggregateInput");
const Url_rewritesMaxOrderByAggregateInput_1 = require("../inputs/Url_rewritesMaxOrderByAggregateInput");
const Url_rewritesMinOrderByAggregateInput_1 = require("../inputs/Url_rewritesMinOrderByAggregateInput");
const Url_rewritesSumOrderByAggregateInput_1 = require("../inputs/Url_rewritesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesOrderByWithAggregationInput = class Url_rewritesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithAggregationInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCountOrderByAggregateInput_1.Url_rewritesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesCountOrderByAggregateInput_1.Url_rewritesCountOrderByAggregateInput)
], Url_rewritesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesAvgOrderByAggregateInput_1.Url_rewritesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesAvgOrderByAggregateInput_1.Url_rewritesAvgOrderByAggregateInput)
], Url_rewritesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMaxOrderByAggregateInput_1.Url_rewritesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMaxOrderByAggregateInput_1.Url_rewritesMaxOrderByAggregateInput)
], Url_rewritesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMinOrderByAggregateInput_1.Url_rewritesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMinOrderByAggregateInput_1.Url_rewritesMinOrderByAggregateInput)
], Url_rewritesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesSumOrderByAggregateInput_1.Url_rewritesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesSumOrderByAggregateInput_1.Url_rewritesSumOrderByAggregateInput)
], Url_rewritesOrderByWithAggregationInput.prototype, "_sum", void 0);
Url_rewritesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Url_rewritesOrderByWithAggregationInput);
exports.Url_rewritesOrderByWithAggregationInput = Url_rewritesOrderByWithAggregationInput;
