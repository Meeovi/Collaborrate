"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosAvgOrderByAggregateInput = class Credit_memosAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosAvgOrderByAggregateInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosAvgOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosAvgOrderByAggregateInput.prototype, "prod_id", void 0);
Credit_memosAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Credit_memosAvgOrderByAggregateInput);
exports.Credit_memosAvgOrderByAggregateInput = Credit_memosAvgOrderByAggregateInput;
