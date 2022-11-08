"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsAvgOrderByAggregateInput_1 = require("../inputs/FullfillmentsAvgOrderByAggregateInput");
const FullfillmentsCountOrderByAggregateInput_1 = require("../inputs/FullfillmentsCountOrderByAggregateInput");
const FullfillmentsMaxOrderByAggregateInput_1 = require("../inputs/FullfillmentsMaxOrderByAggregateInput");
const FullfillmentsMinOrderByAggregateInput_1 = require("../inputs/FullfillmentsMinOrderByAggregateInput");
const FullfillmentsSumOrderByAggregateInput_1 = require("../inputs/FullfillmentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FullfillmentsOrderByWithAggregationInput = class FullfillmentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "shipping_zones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "country_area", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "pickup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithAggregationInput.prototype, "stock", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCountOrderByAggregateInput_1.FullfillmentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsCountOrderByAggregateInput_1.FullfillmentsCountOrderByAggregateInput)
], FullfillmentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsAvgOrderByAggregateInput_1.FullfillmentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsAvgOrderByAggregateInput_1.FullfillmentsAvgOrderByAggregateInput)
], FullfillmentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMaxOrderByAggregateInput_1.FullfillmentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMaxOrderByAggregateInput_1.FullfillmentsMaxOrderByAggregateInput)
], FullfillmentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMinOrderByAggregateInput_1.FullfillmentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMinOrderByAggregateInput_1.FullfillmentsMinOrderByAggregateInput)
], FullfillmentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsSumOrderByAggregateInput_1.FullfillmentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsSumOrderByAggregateInput_1.FullfillmentsSumOrderByAggregateInput)
], FullfillmentsOrderByWithAggregationInput.prototype, "_sum", void 0);
FullfillmentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FullfillmentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], FullfillmentsOrderByWithAggregationInput);
exports.FullfillmentsOrderByWithAggregationInput = FullfillmentsOrderByWithAggregationInput;
