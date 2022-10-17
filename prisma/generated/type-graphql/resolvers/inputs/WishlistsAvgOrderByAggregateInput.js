"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WishlistsAvgOrderByAggregateInput = class WishlistsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsAvgOrderByAggregateInput.prototype, "id", void 0);
WishlistsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WishlistsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], WishlistsAvgOrderByAggregateInput);
exports.WishlistsAvgOrderByAggregateInput = WishlistsAvgOrderByAggregateInput;
