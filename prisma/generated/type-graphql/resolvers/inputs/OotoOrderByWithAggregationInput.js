"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoAvgOrderByAggregateInput_1 = require("../inputs/OotoAvgOrderByAggregateInput");
const OotoCountOrderByAggregateInput_1 = require("../inputs/OotoCountOrderByAggregateInput");
const OotoMaxOrderByAggregateInput_1 = require("../inputs/OotoMaxOrderByAggregateInput");
const OotoMinOrderByAggregateInput_1 = require("../inputs/OotoMinOrderByAggregateInput");
const OotoSumOrderByAggregateInput_1 = require("../inputs/OotoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OotoOrderByWithAggregationInput = class OotoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "using_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCountOrderByAggregateInput_1.OotoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoCountOrderByAggregateInput_1.OotoCountOrderByAggregateInput)
], OotoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoAvgOrderByAggregateInput_1.OotoAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoAvgOrderByAggregateInput_1.OotoAvgOrderByAggregateInput)
], OotoOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMaxOrderByAggregateInput_1.OotoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMaxOrderByAggregateInput_1.OotoMaxOrderByAggregateInput)
], OotoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMinOrderByAggregateInput_1.OotoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMinOrderByAggregateInput_1.OotoMinOrderByAggregateInput)
], OotoOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoSumOrderByAggregateInput_1.OotoSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoSumOrderByAggregateInput_1.OotoSumOrderByAggregateInput)
], OotoOrderByWithAggregationInput.prototype, "_sum", void 0);
OotoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OotoOrderByWithAggregationInput", {
        isAbstract: true
    })
], OotoOrderByWithAggregationInput);
exports.OotoOrderByWithAggregationInput = OotoOrderByWithAggregationInput;
