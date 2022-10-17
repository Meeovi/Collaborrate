"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsAvgOrderByAggregateInput_1 = require("../inputs/ContractsAvgOrderByAggregateInput");
const ContractsCountOrderByAggregateInput_1 = require("../inputs/ContractsCountOrderByAggregateInput");
const ContractsMaxOrderByAggregateInput_1 = require("../inputs/ContractsMaxOrderByAggregateInput");
const ContractsMinOrderByAggregateInput_1 = require("../inputs/ContractsMinOrderByAggregateInput");
const ContractsSumOrderByAggregateInput_1 = require("../inputs/ContractsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ContractsOrderByWithAggregationInput = class ContractsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "contract_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "contract_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "renewal_reminder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "customer_signed_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "company_signed_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "contract_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "opportunity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "contract_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "line_items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "shipping_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCountOrderByAggregateInput_1.ContractsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsCountOrderByAggregateInput_1.ContractsCountOrderByAggregateInput)
], ContractsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsAvgOrderByAggregateInput_1.ContractsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsAvgOrderByAggregateInput_1.ContractsAvgOrderByAggregateInput)
], ContractsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMaxOrderByAggregateInput_1.ContractsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMaxOrderByAggregateInput_1.ContractsMaxOrderByAggregateInput)
], ContractsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsMinOrderByAggregateInput_1.ContractsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsMinOrderByAggregateInput_1.ContractsMinOrderByAggregateInput)
], ContractsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsSumOrderByAggregateInput_1.ContractsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsSumOrderByAggregateInput_1.ContractsSumOrderByAggregateInput)
], ContractsOrderByWithAggregationInput.prototype, "_sum", void 0);
ContractsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ContractsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ContractsOrderByWithAggregationInput);
exports.ContractsOrderByWithAggregationInput = ContractsOrderByWithAggregationInput;
