"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let NewslettersAvgOrderByAggregateInput = class NewslettersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersAvgOrderByAggregateInput.prototype, "cust_id", void 0);
NewslettersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NewslettersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], NewslettersAvgOrderByAggregateInput);
exports.NewslettersAvgOrderByAggregateInput = NewslettersAvgOrderByAggregateInput;
