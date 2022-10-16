"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesAvgOrderByAggregateInput_1 = require("../inputs/OpportunitiesAvgOrderByAggregateInput");
const OpportunitiesCountOrderByAggregateInput_1 = require("../inputs/OpportunitiesCountOrderByAggregateInput");
const OpportunitiesMaxOrderByAggregateInput_1 = require("../inputs/OpportunitiesMaxOrderByAggregateInput");
const OpportunitiesMinOrderByAggregateInput_1 = require("../inputs/OpportunitiesMinOrderByAggregateInput");
const OpportunitiesSumOrderByAggregateInput_1 = require("../inputs/OpportunitiesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OpportunitiesOrderByWithAggregationInput = class OpportunitiesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "sales_stage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "probability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "next_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "lead_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "campaign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByWithAggregationInput.prototype, "expected_close_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesCountOrderByAggregateInput_1.OpportunitiesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesCountOrderByAggregateInput_1.OpportunitiesCountOrderByAggregateInput)
], OpportunitiesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesAvgOrderByAggregateInput_1.OpportunitiesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesAvgOrderByAggregateInput_1.OpportunitiesAvgOrderByAggregateInput)
], OpportunitiesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMaxOrderByAggregateInput_1.OpportunitiesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMaxOrderByAggregateInput_1.OpportunitiesMaxOrderByAggregateInput)
], OpportunitiesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMinOrderByAggregateInput_1.OpportunitiesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMinOrderByAggregateInput_1.OpportunitiesMinOrderByAggregateInput)
], OpportunitiesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesSumOrderByAggregateInput_1.OpportunitiesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesSumOrderByAggregateInput_1.OpportunitiesSumOrderByAggregateInput)
], OpportunitiesOrderByWithAggregationInput.prototype, "_sum", void 0);
OpportunitiesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OpportunitiesOrderByWithAggregationInput", {
        isAbstract: true
    })
], OpportunitiesOrderByWithAggregationInput);
exports.OpportunitiesOrderByWithAggregationInput = OpportunitiesOrderByWithAggregationInput;
