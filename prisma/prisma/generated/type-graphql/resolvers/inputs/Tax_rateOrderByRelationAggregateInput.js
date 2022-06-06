"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateOrderByRelationAggregateInput = class Tax_rateOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByRelationAggregateInput.prototype, "_count", void 0);
Tax_rateOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Tax_rateOrderByRelationAggregateInput);
exports.Tax_rateOrderByRelationAggregateInput = Tax_rateOrderByRelationAggregateInput;
