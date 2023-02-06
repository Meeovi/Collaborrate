"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationAvgOrderByAggregateInput_1 = require("../inputs/InternalizationAvgOrderByAggregateInput");
const InternalizationCountOrderByAggregateInput_1 = require("../inputs/InternalizationCountOrderByAggregateInput");
const InternalizationMaxOrderByAggregateInput_1 = require("../inputs/InternalizationMaxOrderByAggregateInput");
const InternalizationMinOrderByAggregateInput_1 = require("../inputs/InternalizationMinOrderByAggregateInput");
const InternalizationSumOrderByAggregateInput_1 = require("../inputs/InternalizationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InternalizationOrderByWithAggregationInput = class InternalizationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCountOrderByAggregateInput_1.InternalizationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationCountOrderByAggregateInput_1.InternalizationCountOrderByAggregateInput)
], InternalizationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationAvgOrderByAggregateInput_1.InternalizationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationAvgOrderByAggregateInput_1.InternalizationAvgOrderByAggregateInput)
], InternalizationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMaxOrderByAggregateInput_1.InternalizationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMaxOrderByAggregateInput_1.InternalizationMaxOrderByAggregateInput)
], InternalizationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMinOrderByAggregateInput_1.InternalizationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMinOrderByAggregateInput_1.InternalizationMinOrderByAggregateInput)
], InternalizationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationSumOrderByAggregateInput_1.InternalizationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationSumOrderByAggregateInput_1.InternalizationSumOrderByAggregateInput)
], InternalizationOrderByWithAggregationInput.prototype, "_sum", void 0);
InternalizationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationOrderByWithAggregationInput", {
        isAbstract: true
    })
], InternalizationOrderByWithAggregationInput);
exports.InternalizationOrderByWithAggregationInput = InternalizationOrderByWithAggregationInput;
