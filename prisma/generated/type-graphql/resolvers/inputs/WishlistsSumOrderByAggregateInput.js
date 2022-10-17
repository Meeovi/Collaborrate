"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WishlistsSumOrderByAggregateInput = class WishlistsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsSumOrderByAggregateInput.prototype, "id", void 0);
WishlistsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WishlistsSumOrderByAggregateInput", {
        isAbstract: true
    })
], WishlistsSumOrderByAggregateInput);
exports.WishlistsSumOrderByAggregateInput = WishlistsSumOrderByAggregateInput;
