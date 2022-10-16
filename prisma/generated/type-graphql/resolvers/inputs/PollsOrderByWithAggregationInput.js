"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsAvgOrderByAggregateInput_1 = require("../inputs/PollsAvgOrderByAggregateInput");
const PollsCountOrderByAggregateInput_1 = require("../inputs/PollsCountOrderByAggregateInput");
const PollsMaxOrderByAggregateInput_1 = require("../inputs/PollsMaxOrderByAggregateInput");
const PollsMinOrderByAggregateInput_1 = require("../inputs/PollsMinOrderByAggregateInput");
const PollsSumOrderByAggregateInput_1 = require("../inputs/PollsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PollsOrderByWithAggregationInput = class PollsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsCountOrderByAggregateInput_1.PollsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsCountOrderByAggregateInput_1.PollsCountOrderByAggregateInput)
], PollsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsAvgOrderByAggregateInput_1.PollsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsAvgOrderByAggregateInput_1.PollsAvgOrderByAggregateInput)
], PollsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMaxOrderByAggregateInput_1.PollsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMaxOrderByAggregateInput_1.PollsMaxOrderByAggregateInput)
], PollsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMinOrderByAggregateInput_1.PollsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMinOrderByAggregateInput_1.PollsMinOrderByAggregateInput)
], PollsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsSumOrderByAggregateInput_1.PollsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsSumOrderByAggregateInput_1.PollsSumOrderByAggregateInput)
], PollsOrderByWithAggregationInput.prototype, "_sum", void 0);
PollsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PollsOrderByWithAggregationInput", {
        isAbstract: true
    })
], PollsOrderByWithAggregationInput);
exports.PollsOrderByWithAggregationInput = PollsOrderByWithAggregationInput;
