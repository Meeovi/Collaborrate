"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenAvgOrderByAggregateInput_1 = require("../inputs/ApitokenAvgOrderByAggregateInput");
const ApitokenCountOrderByAggregateInput_1 = require("../inputs/ApitokenCountOrderByAggregateInput");
const ApitokenMaxOrderByAggregateInput_1 = require("../inputs/ApitokenMaxOrderByAggregateInput");
const ApitokenMinOrderByAggregateInput_1 = require("../inputs/ApitokenMinOrderByAggregateInput");
const ApitokenSumOrderByAggregateInput_1 = require("../inputs/ApitokenSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ApitokenOrderByWithAggregationInput = class ApitokenOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithAggregationInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenCountOrderByAggregateInput_1.ApitokenCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenCountOrderByAggregateInput_1.ApitokenCountOrderByAggregateInput)
], ApitokenOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenAvgOrderByAggregateInput_1.ApitokenAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenAvgOrderByAggregateInput_1.ApitokenAvgOrderByAggregateInput)
], ApitokenOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMaxOrderByAggregateInput_1.ApitokenMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMaxOrderByAggregateInput_1.ApitokenMaxOrderByAggregateInput)
], ApitokenOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMinOrderByAggregateInput_1.ApitokenMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMinOrderByAggregateInput_1.ApitokenMinOrderByAggregateInput)
], ApitokenOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenSumOrderByAggregateInput_1.ApitokenSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenSumOrderByAggregateInput_1.ApitokenSumOrderByAggregateInput)
], ApitokenOrderByWithAggregationInput.prototype, "_sum", void 0);
ApitokenOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenOrderByWithAggregationInput", {
        isAbstract: true
    })
], ApitokenOrderByWithAggregationInput);
exports.ApitokenOrderByWithAggregationInput = ApitokenOrderByWithAggregationInput;
