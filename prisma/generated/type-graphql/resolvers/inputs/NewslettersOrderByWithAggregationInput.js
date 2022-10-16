"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersAvgOrderByAggregateInput_1 = require("../inputs/NewslettersAvgOrderByAggregateInput");
const NewslettersCountOrderByAggregateInput_1 = require("../inputs/NewslettersCountOrderByAggregateInput");
const NewslettersMaxOrderByAggregateInput_1 = require("../inputs/NewslettersMaxOrderByAggregateInput");
const NewslettersMinOrderByAggregateInput_1 = require("../inputs/NewslettersMinOrderByAggregateInput");
const NewslettersSumOrderByAggregateInput_1 = require("../inputs/NewslettersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NewslettersOrderByWithAggregationInput = class NewslettersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersCountOrderByAggregateInput_1.NewslettersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersCountOrderByAggregateInput_1.NewslettersCountOrderByAggregateInput)
], NewslettersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersAvgOrderByAggregateInput_1.NewslettersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersAvgOrderByAggregateInput_1.NewslettersAvgOrderByAggregateInput)
], NewslettersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMaxOrderByAggregateInput_1.NewslettersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMaxOrderByAggregateInput_1.NewslettersMaxOrderByAggregateInput)
], NewslettersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMinOrderByAggregateInput_1.NewslettersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMinOrderByAggregateInput_1.NewslettersMinOrderByAggregateInput)
], NewslettersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersSumOrderByAggregateInput_1.NewslettersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersSumOrderByAggregateInput_1.NewslettersSumOrderByAggregateInput)
], NewslettersOrderByWithAggregationInput.prototype, "_sum", void 0);
NewslettersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NewslettersOrderByWithAggregationInput", {
        isAbstract: true
    })
], NewslettersOrderByWithAggregationInput);
exports.NewslettersOrderByWithAggregationInput = NewslettersOrderByWithAggregationInput;
