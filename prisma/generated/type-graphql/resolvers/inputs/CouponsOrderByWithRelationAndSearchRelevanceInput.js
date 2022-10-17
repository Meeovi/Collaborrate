"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByRelevanceInput_1 = require("../inputs/CouponsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CouponsOrderByWithRelationAndSearchRelevanceInput = class CouponsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "products_couponsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsOrderByRelevanceInput_1.CouponsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsOrderByRelevanceInput_1.CouponsOrderByRelevanceInput)
], CouponsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CouponsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CouponsOrderByWithRelationAndSearchRelevanceInput);
exports.CouponsOrderByWithRelationAndSearchRelevanceInput = CouponsOrderByWithRelationAndSearchRelevanceInput;
