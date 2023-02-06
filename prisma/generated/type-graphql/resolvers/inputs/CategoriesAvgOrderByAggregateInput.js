"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesAvgOrderByAggregateInput = class CategoriesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesAvgOrderByAggregateInput.prototype, "id", void 0);
CategoriesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CategoriesAvgOrderByAggregateInput);
exports.CategoriesAvgOrderByAggregateInput = CategoriesAvgOrderByAggregateInput;
