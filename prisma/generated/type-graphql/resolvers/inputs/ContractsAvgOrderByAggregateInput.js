"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ContractsAvgOrderByAggregateInput = class ContractsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsAvgOrderByAggregateInput.prototype, "id", void 0);
ContractsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ContractsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ContractsAvgOrderByAggregateInput);
exports.ContractsAvgOrderByAggregateInput = ContractsAvgOrderByAggregateInput;
