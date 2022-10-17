"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LeadsSumOrderByAggregateInput = class LeadsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsSumOrderByAggregateInput.prototype, "id", void 0);
LeadsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LeadsSumOrderByAggregateInput", {
        isAbstract: true
    })
], LeadsSumOrderByAggregateInput);
exports.LeadsSumOrderByAggregateInput = LeadsSumOrderByAggregateInput;
