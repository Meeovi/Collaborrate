"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseAvgOrderByAggregateInput_1 = require("../inputs/WarehouseAvgOrderByAggregateInput");
const WarehouseCountOrderByAggregateInput_1 = require("../inputs/WarehouseCountOrderByAggregateInput");
const WarehouseMaxOrderByAggregateInput_1 = require("../inputs/WarehouseMaxOrderByAggregateInput");
const WarehouseMinOrderByAggregateInput_1 = require("../inputs/WarehouseMinOrderByAggregateInput");
const WarehouseSumOrderByAggregateInput_1 = require("../inputs/WarehouseSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WarehouseOrderByWithAggregationInput = class WarehouseOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCountOrderByAggregateInput_1.WarehouseCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseCountOrderByAggregateInput_1.WarehouseCountOrderByAggregateInput)
], WarehouseOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseAvgOrderByAggregateInput_1.WarehouseAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseAvgOrderByAggregateInput_1.WarehouseAvgOrderByAggregateInput)
], WarehouseOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMaxOrderByAggregateInput_1.WarehouseMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMaxOrderByAggregateInput_1.WarehouseMaxOrderByAggregateInput)
], WarehouseOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseMinOrderByAggregateInput_1.WarehouseMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseMinOrderByAggregateInput_1.WarehouseMinOrderByAggregateInput)
], WarehouseOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseSumOrderByAggregateInput_1.WarehouseSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseSumOrderByAggregateInput_1.WarehouseSumOrderByAggregateInput)
], WarehouseOrderByWithAggregationInput.prototype, "_sum", void 0);
WarehouseOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WarehouseOrderByWithAggregationInput", {
        isAbstract: true
    })
], WarehouseOrderByWithAggregationInput);
exports.WarehouseOrderByWithAggregationInput = WarehouseOrderByWithAggregationInput;
