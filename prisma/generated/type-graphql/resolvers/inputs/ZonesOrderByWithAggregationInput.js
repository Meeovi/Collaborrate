"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesAvgOrderByAggregateInput_1 = require("../inputs/ZonesAvgOrderByAggregateInput");
const ZonesCountOrderByAggregateInput_1 = require("../inputs/ZonesCountOrderByAggregateInput");
const ZonesMaxOrderByAggregateInput_1 = require("../inputs/ZonesMaxOrderByAggregateInput");
const ZonesMinOrderByAggregateInput_1 = require("../inputs/ZonesMinOrderByAggregateInput");
const ZonesSumOrderByAggregateInput_1 = require("../inputs/ZonesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ZonesOrderByWithAggregationInput = class ZonesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesCountOrderByAggregateInput_1.ZonesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesCountOrderByAggregateInput_1.ZonesCountOrderByAggregateInput)
], ZonesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesAvgOrderByAggregateInput_1.ZonesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesAvgOrderByAggregateInput_1.ZonesAvgOrderByAggregateInput)
], ZonesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMaxOrderByAggregateInput_1.ZonesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMaxOrderByAggregateInput_1.ZonesMaxOrderByAggregateInput)
], ZonesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMinOrderByAggregateInput_1.ZonesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMinOrderByAggregateInput_1.ZonesMinOrderByAggregateInput)
], ZonesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesSumOrderByAggregateInput_1.ZonesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesSumOrderByAggregateInput_1.ZonesSumOrderByAggregateInput)
], ZonesOrderByWithAggregationInput.prototype, "_sum", void 0);
ZonesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ZonesOrderByWithAggregationInput", {
        isAbstract: true
    })
], ZonesOrderByWithAggregationInput);
exports.ZonesOrderByWithAggregationInput = ZonesOrderByWithAggregationInput;
