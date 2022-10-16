"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsAvgOrderByAggregateInput_1 = require("../inputs/IntegrationsAvgOrderByAggregateInput");
const IntegrationsCountOrderByAggregateInput_1 = require("../inputs/IntegrationsCountOrderByAggregateInput");
const IntegrationsMaxOrderByAggregateInput_1 = require("../inputs/IntegrationsMaxOrderByAggregateInput");
const IntegrationsMinOrderByAggregateInput_1 = require("../inputs/IntegrationsMinOrderByAggregateInput");
const IntegrationsSumOrderByAggregateInput_1 = require("../inputs/IntegrationsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IntegrationsOrderByWithAggregationInput = class IntegrationsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCountOrderByAggregateInput_1.IntegrationsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsCountOrderByAggregateInput_1.IntegrationsCountOrderByAggregateInput)
], IntegrationsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsAvgOrderByAggregateInput_1.IntegrationsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsAvgOrderByAggregateInput_1.IntegrationsAvgOrderByAggregateInput)
], IntegrationsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMaxOrderByAggregateInput_1.IntegrationsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMaxOrderByAggregateInput_1.IntegrationsMaxOrderByAggregateInput)
], IntegrationsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMinOrderByAggregateInput_1.IntegrationsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMinOrderByAggregateInput_1.IntegrationsMinOrderByAggregateInput)
], IntegrationsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsSumOrderByAggregateInput_1.IntegrationsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsSumOrderByAggregateInput_1.IntegrationsSumOrderByAggregateInput)
], IntegrationsOrderByWithAggregationInput.prototype, "_sum", void 0);
IntegrationsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsOrderByWithAggregationInput", {
        isAbstract: true
    })
], IntegrationsOrderByWithAggregationInput);
exports.IntegrationsOrderByWithAggregationInput = IntegrationsOrderByWithAggregationInput;
