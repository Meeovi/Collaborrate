"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeAvgOrderByAggregateInput_1 = require("../inputs/Core_storeAvgOrderByAggregateInput");
const Core_storeCountOrderByAggregateInput_1 = require("../inputs/Core_storeCountOrderByAggregateInput");
const Core_storeMaxOrderByAggregateInput_1 = require("../inputs/Core_storeMaxOrderByAggregateInput");
const Core_storeMinOrderByAggregateInput_1 = require("../inputs/Core_storeMinOrderByAggregateInput");
const Core_storeSumOrderByAggregateInput_1 = require("../inputs/Core_storeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeOrderByWithAggregationInput = class Core_storeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithAggregationInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCountOrderByAggregateInput_1.Core_storeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeCountOrderByAggregateInput_1.Core_storeCountOrderByAggregateInput)
], Core_storeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeAvgOrderByAggregateInput_1.Core_storeAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeAvgOrderByAggregateInput_1.Core_storeAvgOrderByAggregateInput)
], Core_storeOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMaxOrderByAggregateInput_1.Core_storeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMaxOrderByAggregateInput_1.Core_storeMaxOrderByAggregateInput)
], Core_storeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeMinOrderByAggregateInput_1.Core_storeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeMinOrderByAggregateInput_1.Core_storeMinOrderByAggregateInput)
], Core_storeOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeSumOrderByAggregateInput_1.Core_storeSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeSumOrderByAggregateInput_1.Core_storeSumOrderByAggregateInput)
], Core_storeOrderByWithAggregationInput.prototype, "_sum", void 0);
Core_storeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeOrderByWithAggregationInput", {
        isAbstract: true
    })
], Core_storeOrderByWithAggregationInput);
exports.Core_storeOrderByWithAggregationInput = Core_storeOrderByWithAggregationInput;
