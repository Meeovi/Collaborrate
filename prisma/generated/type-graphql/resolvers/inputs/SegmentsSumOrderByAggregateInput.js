"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SegmentsSumOrderByAggregateInput = class SegmentsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsSumOrderByAggregateInput.prototype, "id", void 0);
SegmentsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SegmentsSumOrderByAggregateInput", {
        isAbstract: true
    })
], SegmentsSumOrderByAggregateInput);
exports.SegmentsSumOrderByAggregateInput = SegmentsSumOrderByAggregateInput;
