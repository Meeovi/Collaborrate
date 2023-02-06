"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByRelevanceFieldEnum_1 = require("../../enums/ProductsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsOrderByRelevanceInput = class ProductsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsOrderByRelevanceFieldEnum_1.ProductsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByRelevanceInput.prototype, "search", void 0);
ProductsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsOrderByRelevanceInput", {
        isAbstract: true
    })
], ProductsOrderByRelevanceInput);
exports.ProductsOrderByRelevanceInput = ProductsOrderByRelevanceInput;
