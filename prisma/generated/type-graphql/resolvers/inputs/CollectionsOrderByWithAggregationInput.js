"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsAvgOrderByAggregateInput_1 = require("../inputs/CollectionsAvgOrderByAggregateInput");
const CollectionsCountOrderByAggregateInput_1 = require("../inputs/CollectionsCountOrderByAggregateInput");
const CollectionsMaxOrderByAggregateInput_1 = require("../inputs/CollectionsMaxOrderByAggregateInput");
const CollectionsMinOrderByAggregateInput_1 = require("../inputs/CollectionsMinOrderByAggregateInput");
const CollectionsSumOrderByAggregateInput_1 = require("../inputs/CollectionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CollectionsOrderByWithAggregationInput = class CollectionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithAggregationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsCountOrderByAggregateInput_1.CollectionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsCountOrderByAggregateInput_1.CollectionsCountOrderByAggregateInput)
], CollectionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsAvgOrderByAggregateInput_1.CollectionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsAvgOrderByAggregateInput_1.CollectionsAvgOrderByAggregateInput)
], CollectionsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMaxOrderByAggregateInput_1.CollectionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMaxOrderByAggregateInput_1.CollectionsMaxOrderByAggregateInput)
], CollectionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsMinOrderByAggregateInput_1.CollectionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsMinOrderByAggregateInput_1.CollectionsMinOrderByAggregateInput)
], CollectionsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsSumOrderByAggregateInput_1.CollectionsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsSumOrderByAggregateInput_1.CollectionsSumOrderByAggregateInput)
], CollectionsOrderByWithAggregationInput.prototype, "_sum", void 0);
CollectionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CollectionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], CollectionsOrderByWithAggregationInput);
exports.CollectionsOrderByWithAggregationInput = CollectionsOrderByWithAggregationInput;
