"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmAvgOrderByAggregateInput_1 = require("../inputs/ImportmAvgOrderByAggregateInput");
const ImportmCountOrderByAggregateInput_1 = require("../inputs/ImportmCountOrderByAggregateInput");
const ImportmMaxOrderByAggregateInput_1 = require("../inputs/ImportmMaxOrderByAggregateInput");
const ImportmMinOrderByAggregateInput_1 = require("../inputs/ImportmMinOrderByAggregateInput");
const ImportmSumOrderByAggregateInput_1 = require("../inputs/ImportmSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ImportmOrderByWithAggregationInput = class ImportmOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmCountOrderByAggregateInput_1.ImportmCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmCountOrderByAggregateInput_1.ImportmCountOrderByAggregateInput)
], ImportmOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmAvgOrderByAggregateInput_1.ImportmAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmAvgOrderByAggregateInput_1.ImportmAvgOrderByAggregateInput)
], ImportmOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMaxOrderByAggregateInput_1.ImportmMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMaxOrderByAggregateInput_1.ImportmMaxOrderByAggregateInput)
], ImportmOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmMinOrderByAggregateInput_1.ImportmMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmMinOrderByAggregateInput_1.ImportmMinOrderByAggregateInput)
], ImportmOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmSumOrderByAggregateInput_1.ImportmSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmSumOrderByAggregateInput_1.ImportmSumOrderByAggregateInput)
], ImportmOrderByWithAggregationInput.prototype, "_sum", void 0);
ImportmOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ImportmOrderByWithAggregationInput", {
        isAbstract: true
    })
], ImportmOrderByWithAggregationInput);
exports.ImportmOrderByWithAggregationInput = ImportmOrderByWithAggregationInput;
