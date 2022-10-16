"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TargetsAvgOrderByAggregateInput = class TargetsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsAvgOrderByAggregateInput.prototype, "id", void 0);
TargetsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TargetsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TargetsAvgOrderByAggregateInput);
exports.TargetsAvgOrderByAggregateInput = TargetsAvgOrderByAggregateInput;
