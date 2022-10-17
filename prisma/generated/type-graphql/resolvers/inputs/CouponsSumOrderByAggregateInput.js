"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CouponsSumOrderByAggregateInput = class CouponsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsSumOrderByAggregateInput.prototype, "prod_id", void 0);
CouponsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsSumOrderByAggregateInput", {
        isAbstract: true
    })
], CouponsSumOrderByAggregateInput);
exports.CouponsSumOrderByAggregateInput = CouponsSumOrderByAggregateInput;
