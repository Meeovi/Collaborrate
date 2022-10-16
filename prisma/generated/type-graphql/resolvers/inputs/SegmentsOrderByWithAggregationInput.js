"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsAvgOrderByAggregateInput_1 = require("../inputs/SegmentsAvgOrderByAggregateInput");
const SegmentsCountOrderByAggregateInput_1 = require("../inputs/SegmentsCountOrderByAggregateInput");
const SegmentsMaxOrderByAggregateInput_1 = require("../inputs/SegmentsMaxOrderByAggregateInput");
const SegmentsMinOrderByAggregateInput_1 = require("../inputs/SegmentsMinOrderByAggregateInput");
const SegmentsSumOrderByAggregateInput_1 = require("../inputs/SegmentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SegmentsOrderByWithAggregationInput = class SegmentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "apply_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsCountOrderByAggregateInput_1.SegmentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsCountOrderByAggregateInput_1.SegmentsCountOrderByAggregateInput)
], SegmentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsAvgOrderByAggregateInput_1.SegmentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsAvgOrderByAggregateInput_1.SegmentsAvgOrderByAggregateInput)
], SegmentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMaxOrderByAggregateInput_1.SegmentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMaxOrderByAggregateInput_1.SegmentsMaxOrderByAggregateInput)
], SegmentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMinOrderByAggregateInput_1.SegmentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMinOrderByAggregateInput_1.SegmentsMinOrderByAggregateInput)
], SegmentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsSumOrderByAggregateInput_1.SegmentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsSumOrderByAggregateInput_1.SegmentsSumOrderByAggregateInput)
], SegmentsOrderByWithAggregationInput.prototype, "_sum", void 0);
SegmentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SegmentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], SegmentsOrderByWithAggregationInput);
exports.SegmentsOrderByWithAggregationInput = SegmentsOrderByWithAggregationInput;
