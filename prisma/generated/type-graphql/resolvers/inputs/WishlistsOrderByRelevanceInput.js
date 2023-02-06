"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const WishlistsOrderByRelevanceFieldEnum_1 = require("../../enums/WishlistsOrderByRelevanceFieldEnum");
let WishlistsOrderByRelevanceInput = class WishlistsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsOrderByRelevanceFieldEnum_1.WishlistsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WishlistsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByRelevanceInput.prototype, "search", void 0);
WishlistsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WishlistsOrderByRelevanceInput", {
        isAbstract: true
    })
], WishlistsOrderByRelevanceInput);
exports.WishlistsOrderByRelevanceInput = WishlistsOrderByRelevanceInput;
