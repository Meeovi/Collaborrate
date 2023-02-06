"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsOrderByRelevanceInput_1 = require("../inputs/WishlistsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WishlistsOrderByWithRelationAndSearchRelevanceInput = class WishlistsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "occassions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsOrderByRelevanceInput_1.WishlistsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsOrderByRelevanceInput_1.WishlistsOrderByRelevanceInput)
], WishlistsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
WishlistsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WishlistsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], WishlistsOrderByWithRelationAndSearchRelevanceInput);
exports.WishlistsOrderByWithRelationAndSearchRelevanceInput = WishlistsOrderByWithRelationAndSearchRelevanceInput;
