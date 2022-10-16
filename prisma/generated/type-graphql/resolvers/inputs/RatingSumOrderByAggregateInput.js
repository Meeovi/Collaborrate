"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RatingSumOrderByAggregateInput = class RatingSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingSumOrderByAggregateInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingSumOrderByAggregateInput.prototype, "prod_id", void 0);
RatingSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingSumOrderByAggregateInput", {
        isAbstract: true
    })
], RatingSumOrderByAggregateInput);
exports.RatingSumOrderByAggregateInput = RatingSumOrderByAggregateInput;
