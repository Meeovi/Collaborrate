"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsAvgOrderByAggregateInput_1 = require("../inputs/VisitsAvgOrderByAggregateInput");
const VisitsCountOrderByAggregateInput_1 = require("../inputs/VisitsCountOrderByAggregateInput");
const VisitsMaxOrderByAggregateInput_1 = require("../inputs/VisitsMaxOrderByAggregateInput");
const VisitsMinOrderByAggregateInput_1 = require("../inputs/VisitsMinOrderByAggregateInput");
const VisitsSumOrderByAggregateInput_1 = require("../inputs/VisitsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VisitsOrderByWithAggregationInput = class VisitsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "emergency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithAggregationInput.prototype, "meeting", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsCountOrderByAggregateInput_1.VisitsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsCountOrderByAggregateInput_1.VisitsCountOrderByAggregateInput)
], VisitsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsAvgOrderByAggregateInput_1.VisitsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsAvgOrderByAggregateInput_1.VisitsAvgOrderByAggregateInput)
], VisitsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMaxOrderByAggregateInput_1.VisitsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMaxOrderByAggregateInput_1.VisitsMaxOrderByAggregateInput)
], VisitsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMinOrderByAggregateInput_1.VisitsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMinOrderByAggregateInput_1.VisitsMinOrderByAggregateInput)
], VisitsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsSumOrderByAggregateInput_1.VisitsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsSumOrderByAggregateInput_1.VisitsSumOrderByAggregateInput)
], VisitsOrderByWithAggregationInput.prototype, "_sum", void 0);
VisitsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisitsOrderByWithAggregationInput", {
        isAbstract: true
    })
], VisitsOrderByWithAggregationInput);
exports.VisitsOrderByWithAggregationInput = VisitsOrderByWithAggregationInput;
