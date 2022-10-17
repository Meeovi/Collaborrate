"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CollectionsAvgOrderByAggregateInput = class CollectionsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsAvgOrderByAggregateInput.prototype, "id", void 0);
CollectionsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CollectionsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CollectionsAvgOrderByAggregateInput);
exports.CollectionsAvgOrderByAggregateInput = CollectionsAvgOrderByAggregateInput;
