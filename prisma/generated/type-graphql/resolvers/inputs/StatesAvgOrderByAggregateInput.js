"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StatesAvgOrderByAggregateInput = class StatesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesAvgOrderByAggregateInput.prototype, "id", void 0);
StatesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], StatesAvgOrderByAggregateInput);
exports.StatesAvgOrderByAggregateInput = StatesAvgOrderByAggregateInput;
