"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InternalizationSumOrderByAggregateInput = class InternalizationSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationSumOrderByAggregateInput.prototype, "id", void 0);
InternalizationSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationSumOrderByAggregateInput", {
        isAbstract: true
    })
], InternalizationSumOrderByAggregateInput);
exports.InternalizationSumOrderByAggregateInput = InternalizationSumOrderByAggregateInput;
