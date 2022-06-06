"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceAvgOrderByAggregateInput_1 = require("../inputs/SourceAvgOrderByAggregateInput");
const SourceCountOrderByAggregateInput_1 = require("../inputs/SourceCountOrderByAggregateInput");
const SourceMaxOrderByAggregateInput_1 = require("../inputs/SourceMaxOrderByAggregateInput");
const SourceMinOrderByAggregateInput_1 = require("../inputs/SourceMinOrderByAggregateInput");
const SourceSumOrderByAggregateInput_1 = require("../inputs/SourceSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SourceOrderByWithAggregationInput = class SourceOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "pickup_location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "contact_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByWithAggregationInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCountOrderByAggregateInput_1.SourceCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceCountOrderByAggregateInput_1.SourceCountOrderByAggregateInput)
], SourceOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceAvgOrderByAggregateInput_1.SourceAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceAvgOrderByAggregateInput_1.SourceAvgOrderByAggregateInput)
], SourceOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMaxOrderByAggregateInput_1.SourceMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMaxOrderByAggregateInput_1.SourceMaxOrderByAggregateInput)
], SourceOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMinOrderByAggregateInput_1.SourceMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMinOrderByAggregateInput_1.SourceMinOrderByAggregateInput)
], SourceOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceSumOrderByAggregateInput_1.SourceSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceSumOrderByAggregateInput_1.SourceSumOrderByAggregateInput)
], SourceOrderByWithAggregationInput.prototype, "_sum", void 0);
SourceOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SourceOrderByWithAggregationInput", {
        isAbstract: true
    })
], SourceOrderByWithAggregationInput);
exports.SourceOrderByWithAggregationInput = SourceOrderByWithAggregationInput;
