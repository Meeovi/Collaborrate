"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeAvgOrderByAggregateInput = class Product_attributeAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeAvgOrderByAggregateInput.prototype, "prod_id", void 0);
Product_attributeAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Product_attributeAvgOrderByAggregateInput);
exports.Product_attributeAvgOrderByAggregateInput = Product_attributeAvgOrderByAggregateInput;
