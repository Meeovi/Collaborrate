"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftAvgOrderByAggregateInput_1 = require("../inputs/EndofshiftAvgOrderByAggregateInput");
const EndofshiftCountOrderByAggregateInput_1 = require("../inputs/EndofshiftCountOrderByAggregateInput");
const EndofshiftMaxOrderByAggregateInput_1 = require("../inputs/EndofshiftMaxOrderByAggregateInput");
const EndofshiftMinOrderByAggregateInput_1 = require("../inputs/EndofshiftMinOrderByAggregateInput");
const EndofshiftSumOrderByAggregateInput_1 = require("../inputs/EndofshiftSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EndofshiftOrderByWithAggregationInput = class EndofshiftOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "mcms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "next_shift", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithAggregationInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftCountOrderByAggregateInput_1.EndofshiftCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftCountOrderByAggregateInput_1.EndofshiftCountOrderByAggregateInput)
], EndofshiftOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftAvgOrderByAggregateInput_1.EndofshiftAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftAvgOrderByAggregateInput_1.EndofshiftAvgOrderByAggregateInput)
], EndofshiftOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMaxOrderByAggregateInput_1.EndofshiftMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMaxOrderByAggregateInput_1.EndofshiftMaxOrderByAggregateInput)
], EndofshiftOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMinOrderByAggregateInput_1.EndofshiftMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMinOrderByAggregateInput_1.EndofshiftMinOrderByAggregateInput)
], EndofshiftOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftSumOrderByAggregateInput_1.EndofshiftSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftSumOrderByAggregateInput_1.EndofshiftSumOrderByAggregateInput)
], EndofshiftOrderByWithAggregationInput.prototype, "_sum", void 0);
EndofshiftOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EndofshiftOrderByWithAggregationInput", {
        isAbstract: true
    })
], EndofshiftOrderByWithAggregationInput);
exports.EndofshiftOrderByWithAggregationInput = EndofshiftOrderByWithAggregationInput;
