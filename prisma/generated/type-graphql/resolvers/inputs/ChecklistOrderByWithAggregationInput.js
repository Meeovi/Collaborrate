"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistAvgOrderByAggregateInput_1 = require("../inputs/ChecklistAvgOrderByAggregateInput");
const ChecklistCountOrderByAggregateInput_1 = require("../inputs/ChecklistCountOrderByAggregateInput");
const ChecklistMaxOrderByAggregateInput_1 = require("../inputs/ChecklistMaxOrderByAggregateInput");
const ChecklistMinOrderByAggregateInput_1 = require("../inputs/ChecklistMinOrderByAggregateInput");
const ChecklistSumOrderByAggregateInput_1 = require("../inputs/ChecklistSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChecklistOrderByWithAggregationInput = class ChecklistOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "regional_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "ticket", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistCountOrderByAggregateInput_1.ChecklistCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistCountOrderByAggregateInput_1.ChecklistCountOrderByAggregateInput)
], ChecklistOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistAvgOrderByAggregateInput_1.ChecklistAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistAvgOrderByAggregateInput_1.ChecklistAvgOrderByAggregateInput)
], ChecklistOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMaxOrderByAggregateInput_1.ChecklistMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMaxOrderByAggregateInput_1.ChecklistMaxOrderByAggregateInput)
], ChecklistOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMinOrderByAggregateInput_1.ChecklistMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMinOrderByAggregateInput_1.ChecklistMinOrderByAggregateInput)
], ChecklistOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistSumOrderByAggregateInput_1.ChecklistSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistSumOrderByAggregateInput_1.ChecklistSumOrderByAggregateInput)
], ChecklistOrderByWithAggregationInput.prototype, "_sum", void 0);
ChecklistOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChecklistOrderByWithAggregationInput", {
        isAbstract: true
    })
], ChecklistOrderByWithAggregationInput);
exports.ChecklistOrderByWithAggregationInput = ChecklistOrderByWithAggregationInput;
