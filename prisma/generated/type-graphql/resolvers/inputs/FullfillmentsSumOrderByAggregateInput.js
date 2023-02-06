"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FullfillmentsSumOrderByAggregateInput = class FullfillmentsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsSumOrderByAggregateInput.prototype, "id", void 0);
FullfillmentsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FullfillmentsSumOrderByAggregateInput", {
        isAbstract: true
    })
], FullfillmentsSumOrderByAggregateInput);
exports.FullfillmentsSumOrderByAggregateInput = FullfillmentsSumOrderByAggregateInput;
