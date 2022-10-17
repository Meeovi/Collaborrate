"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardAvgOrderByAggregateInput_1 = require("../inputs/DigiboardAvgOrderByAggregateInput");
const DigiboardCountOrderByAggregateInput_1 = require("../inputs/DigiboardCountOrderByAggregateInput");
const DigiboardMaxOrderByAggregateInput_1 = require("../inputs/DigiboardMaxOrderByAggregateInput");
const DigiboardMinOrderByAggregateInput_1 = require("../inputs/DigiboardMinOrderByAggregateInput");
const DigiboardSumOrderByAggregateInput_1 = require("../inputs/DigiboardSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DigiboardOrderByWithAggregationInput = class DigiboardOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithAggregationInput.prototype, "course", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardCountOrderByAggregateInput_1.DigiboardCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardCountOrderByAggregateInput_1.DigiboardCountOrderByAggregateInput)
], DigiboardOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardAvgOrderByAggregateInput_1.DigiboardAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardAvgOrderByAggregateInput_1.DigiboardAvgOrderByAggregateInput)
], DigiboardOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMaxOrderByAggregateInput_1.DigiboardMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMaxOrderByAggregateInput_1.DigiboardMaxOrderByAggregateInput)
], DigiboardOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMinOrderByAggregateInput_1.DigiboardMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMinOrderByAggregateInput_1.DigiboardMinOrderByAggregateInput)
], DigiboardOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardSumOrderByAggregateInput_1.DigiboardSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardSumOrderByAggregateInput_1.DigiboardSumOrderByAggregateInput)
], DigiboardOrderByWithAggregationInput.prototype, "_sum", void 0);
DigiboardOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardOrderByWithAggregationInput", {
        isAbstract: true
    })
], DigiboardOrderByWithAggregationInput);
exports.DigiboardOrderByWithAggregationInput = DigiboardOrderByWithAggregationInput;
