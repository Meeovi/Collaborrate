"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesAvgOrderByAggregateInput_1 = require("../inputs/StatesAvgOrderByAggregateInput");
const StatesCountOrderByAggregateInput_1 = require("../inputs/StatesCountOrderByAggregateInput");
const StatesMaxOrderByAggregateInput_1 = require("../inputs/StatesMaxOrderByAggregateInput");
const StatesMinOrderByAggregateInput_1 = require("../inputs/StatesMinOrderByAggregateInput");
const StatesSumOrderByAggregateInput_1 = require("../inputs/StatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StatesOrderByWithAggregationInput = class StatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithAggregationInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCountOrderByAggregateInput_1.StatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesCountOrderByAggregateInput_1.StatesCountOrderByAggregateInput)
], StatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesAvgOrderByAggregateInput_1.StatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesAvgOrderByAggregateInput_1.StatesAvgOrderByAggregateInput)
], StatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMaxOrderByAggregateInput_1.StatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMaxOrderByAggregateInput_1.StatesMaxOrderByAggregateInput)
], StatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMinOrderByAggregateInput_1.StatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMinOrderByAggregateInput_1.StatesMinOrderByAggregateInput)
], StatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesSumOrderByAggregateInput_1.StatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesSumOrderByAggregateInput_1.StatesSumOrderByAggregateInput)
], StatesOrderByWithAggregationInput.prototype, "_sum", void 0);
StatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], StatesOrderByWithAggregationInput);
exports.StatesOrderByWithAggregationInput = StatesOrderByWithAggregationInput;
