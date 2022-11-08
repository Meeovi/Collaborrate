"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_typesAvgOrderByAggregateInput = class Product_typesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesAvgOrderByAggregateInput.prototype, "prod_id", void 0);
Product_typesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Product_typesAvgOrderByAggregateInput);
exports.Product_typesAvgOrderByAggregateInput = Product_typesAvgOrderByAggregateInput;
