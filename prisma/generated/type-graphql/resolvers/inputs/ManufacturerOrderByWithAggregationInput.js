"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerAvgOrderByAggregateInput_1 = require("../inputs/ManufacturerAvgOrderByAggregateInput");
const ManufacturerCountOrderByAggregateInput_1 = require("../inputs/ManufacturerCountOrderByAggregateInput");
const ManufacturerMaxOrderByAggregateInput_1 = require("../inputs/ManufacturerMaxOrderByAggregateInput");
const ManufacturerMinOrderByAggregateInput_1 = require("../inputs/ManufacturerMinOrderByAggregateInput");
const ManufacturerSumOrderByAggregateInput_1 = require("../inputs/ManufacturerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ManufacturerOrderByWithAggregationInput = class ManufacturerOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerCountOrderByAggregateInput_1.ManufacturerCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerCountOrderByAggregateInput_1.ManufacturerCountOrderByAggregateInput)
], ManufacturerOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerAvgOrderByAggregateInput_1.ManufacturerAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerAvgOrderByAggregateInput_1.ManufacturerAvgOrderByAggregateInput)
], ManufacturerOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMaxOrderByAggregateInput_1.ManufacturerMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMaxOrderByAggregateInput_1.ManufacturerMaxOrderByAggregateInput)
], ManufacturerOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMinOrderByAggregateInput_1.ManufacturerMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMinOrderByAggregateInput_1.ManufacturerMinOrderByAggregateInput)
], ManufacturerOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerSumOrderByAggregateInput_1.ManufacturerSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerSumOrderByAggregateInput_1.ManufacturerSumOrderByAggregateInput)
], ManufacturerOrderByWithAggregationInput.prototype, "_sum", void 0);
ManufacturerOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerOrderByWithAggregationInput", {
        isAbstract: true
    })
], ManufacturerOrderByWithAggregationInput);
exports.ManufacturerOrderByWithAggregationInput = ManufacturerOrderByWithAggregationInput;
