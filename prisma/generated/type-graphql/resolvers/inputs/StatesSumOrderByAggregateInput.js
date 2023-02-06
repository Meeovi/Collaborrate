"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StatesSumOrderByAggregateInput = class StatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesSumOrderByAggregateInput.prototype, "id", void 0);
StatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], StatesSumOrderByAggregateInput);
exports.StatesSumOrderByAggregateInput = StatesSumOrderByAggregateInput;
