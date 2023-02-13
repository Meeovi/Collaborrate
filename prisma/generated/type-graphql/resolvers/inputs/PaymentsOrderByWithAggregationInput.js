"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsAvgOrderByAggregateInput_1 = require("../inputs/PaymentsAvgOrderByAggregateInput");
const PaymentsCountOrderByAggregateInput_1 = require("../inputs/PaymentsCountOrderByAggregateInput");
const PaymentsMaxOrderByAggregateInput_1 = require("../inputs/PaymentsMaxOrderByAggregateInput");
const PaymentsMinOrderByAggregateInput_1 = require("../inputs/PaymentsMinOrderByAggregateInput");
const PaymentsSumOrderByAggregateInput_1 = require("../inputs/PaymentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PaymentsOrderByWithAggregationInput = class PaymentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "host_uri", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "redirect_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "redirect_url_app", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCountOrderByAggregateInput_1.PaymentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsCountOrderByAggregateInput_1.PaymentsCountOrderByAggregateInput)
], PaymentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsAvgOrderByAggregateInput_1.PaymentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsAvgOrderByAggregateInput_1.PaymentsAvgOrderByAggregateInput)
], PaymentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMaxOrderByAggregateInput_1.PaymentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMaxOrderByAggregateInput_1.PaymentsMaxOrderByAggregateInput)
], PaymentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMinOrderByAggregateInput_1.PaymentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMinOrderByAggregateInput_1.PaymentsMinOrderByAggregateInput)
], PaymentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsSumOrderByAggregateInput_1.PaymentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsSumOrderByAggregateInput_1.PaymentsSumOrderByAggregateInput)
], PaymentsOrderByWithAggregationInput.prototype, "_sum", void 0);
PaymentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], PaymentsOrderByWithAggregationInput);
exports.PaymentsOrderByWithAggregationInput = PaymentsOrderByWithAggregationInput;
