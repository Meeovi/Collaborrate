"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInAvgOrderByAggregateInput_1 = require("../inputs/LogInAvgOrderByAggregateInput");
const LogInCountOrderByAggregateInput_1 = require("../inputs/LogInCountOrderByAggregateInput");
const LogInMaxOrderByAggregateInput_1 = require("../inputs/LogInMaxOrderByAggregateInput");
const LogInMinOrderByAggregateInput_1 = require("../inputs/LogInMinOrderByAggregateInput");
const LogInSumOrderByAggregateInput_1 = require("../inputs/LogInSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LogInOrderByWithAggregationInput = class LogInOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "expiresIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInCountOrderByAggregateInput_1.LogInCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInCountOrderByAggregateInput_1.LogInCountOrderByAggregateInput)
], LogInOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInAvgOrderByAggregateInput_1.LogInAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInAvgOrderByAggregateInput_1.LogInAvgOrderByAggregateInput)
], LogInOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMaxOrderByAggregateInput_1.LogInMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMaxOrderByAggregateInput_1.LogInMaxOrderByAggregateInput)
], LogInOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMinOrderByAggregateInput_1.LogInMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMinOrderByAggregateInput_1.LogInMinOrderByAggregateInput)
], LogInOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInSumOrderByAggregateInput_1.LogInSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInSumOrderByAggregateInput_1.LogInSumOrderByAggregateInput)
], LogInOrderByWithAggregationInput.prototype, "_sum", void 0);
LogInOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LogInOrderByWithAggregationInput", {
        isAbstract: true
    })
], LogInOrderByWithAggregationInput);
exports.LogInOrderByWithAggregationInput = LogInOrderByWithAggregationInput;
