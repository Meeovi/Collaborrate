"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TasksSumOrderByAggregateInput = class TasksSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksSumOrderByAggregateInput.prototype, "id", void 0);
TasksSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TasksSumOrderByAggregateInput", {
        isAbstract: true
    })
], TasksSumOrderByAggregateInput);
exports.TasksSumOrderByAggregateInput = TasksSumOrderByAggregateInput;
