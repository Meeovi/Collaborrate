"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChecklistAvgOrderByAggregateInput = class ChecklistAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistAvgOrderByAggregateInput.prototype, "id", void 0);
ChecklistAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChecklistAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ChecklistAvgOrderByAggregateInput);
exports.ChecklistAvgOrderByAggregateInput = ChecklistAvgOrderByAggregateInput;
