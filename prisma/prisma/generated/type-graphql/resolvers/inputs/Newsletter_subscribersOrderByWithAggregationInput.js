"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersAvgOrderByAggregateInput_1 = require("../inputs/Newsletter_subscribersAvgOrderByAggregateInput");
const Newsletter_subscribersCountOrderByAggregateInput_1 = require("../inputs/Newsletter_subscribersCountOrderByAggregateInput");
const Newsletter_subscribersMaxOrderByAggregateInput_1 = require("../inputs/Newsletter_subscribersMaxOrderByAggregateInput");
const Newsletter_subscribersMinOrderByAggregateInput_1 = require("../inputs/Newsletter_subscribersMinOrderByAggregateInput");
const Newsletter_subscribersSumOrderByAggregateInput_1 = require("../inputs/Newsletter_subscribersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersOrderByWithAggregationInput = class Newsletter_subscribersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCountOrderByAggregateInput_1.Newsletter_subscribersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCountOrderByAggregateInput_1.Newsletter_subscribersCountOrderByAggregateInput)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersAvgOrderByAggregateInput_1.Newsletter_subscribersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersAvgOrderByAggregateInput_1.Newsletter_subscribersAvgOrderByAggregateInput)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMaxOrderByAggregateInput_1.Newsletter_subscribersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMaxOrderByAggregateInput_1.Newsletter_subscribersMaxOrderByAggregateInput)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMinOrderByAggregateInput_1.Newsletter_subscribersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMinOrderByAggregateInput_1.Newsletter_subscribersMinOrderByAggregateInput)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersSumOrderByAggregateInput_1.Newsletter_subscribersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersSumOrderByAggregateInput_1.Newsletter_subscribersSumOrderByAggregateInput)
], Newsletter_subscribersOrderByWithAggregationInput.prototype, "_sum", void 0);
Newsletter_subscribersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersOrderByWithAggregationInput", {
        isAbstract: true
    })
], Newsletter_subscribersOrderByWithAggregationInput);
exports.Newsletter_subscribersOrderByWithAggregationInput = Newsletter_subscribersOrderByWithAggregationInput;
