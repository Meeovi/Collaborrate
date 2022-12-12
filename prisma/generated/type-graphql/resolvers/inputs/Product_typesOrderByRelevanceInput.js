"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByRelevanceFieldEnum_1 = require("../../enums/Product_typesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_typesOrderByRelevanceInput = class Product_typesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesOrderByRelevanceFieldEnum_1.Product_typesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Product_typesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByRelevanceInput.prototype, "search", void 0);
Product_typesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesOrderByRelevanceInput", {
        isAbstract: true
    })
], Product_typesOrderByRelevanceInput);
exports.Product_typesOrderByRelevanceInput = Product_typesOrderByRelevanceInput;
