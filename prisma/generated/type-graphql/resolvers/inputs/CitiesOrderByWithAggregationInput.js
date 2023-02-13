"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesAvgOrderByAggregateInput_1 = require("../inputs/CitiesAvgOrderByAggregateInput");
const CitiesCountOrderByAggregateInput_1 = require("../inputs/CitiesCountOrderByAggregateInput");
const CitiesMaxOrderByAggregateInput_1 = require("../inputs/CitiesMaxOrderByAggregateInput");
const CitiesMinOrderByAggregateInput_1 = require("../inputs/CitiesMinOrderByAggregateInput");
const CitiesSumOrderByAggregateInput_1 = require("../inputs/CitiesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CitiesOrderByWithAggregationInput = class CitiesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "postalCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCountOrderByAggregateInput_1.CitiesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesCountOrderByAggregateInput_1.CitiesCountOrderByAggregateInput)
], CitiesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesAvgOrderByAggregateInput_1.CitiesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesAvgOrderByAggregateInput_1.CitiesAvgOrderByAggregateInput)
], CitiesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMaxOrderByAggregateInput_1.CitiesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMaxOrderByAggregateInput_1.CitiesMaxOrderByAggregateInput)
], CitiesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMinOrderByAggregateInput_1.CitiesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMinOrderByAggregateInput_1.CitiesMinOrderByAggregateInput)
], CitiesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesSumOrderByAggregateInput_1.CitiesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesSumOrderByAggregateInput_1.CitiesSumOrderByAggregateInput)
], CitiesOrderByWithAggregationInput.prototype, "_sum", void 0);
CitiesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesOrderByWithAggregationInput", {
        isAbstract: true
    })
], CitiesOrderByWithAggregationInput);
exports.CitiesOrderByWithAggregationInput = CitiesOrderByWithAggregationInput;
