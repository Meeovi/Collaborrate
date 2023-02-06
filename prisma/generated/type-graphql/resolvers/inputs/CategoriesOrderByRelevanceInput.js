"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesOrderByRelevanceFieldEnum_1 = require("../../enums/CategoriesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesOrderByRelevanceInput = class CategoriesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesOrderByRelevanceFieldEnum_1.CategoriesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByRelevanceInput.prototype, "search", void 0);
CategoriesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesOrderByRelevanceInput", {
        isAbstract: true
    })
], CategoriesOrderByRelevanceInput);
exports.CategoriesOrderByRelevanceInput = CategoriesOrderByRelevanceInput;
