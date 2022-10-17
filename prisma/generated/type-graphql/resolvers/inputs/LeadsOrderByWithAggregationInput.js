"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsAvgOrderByAggregateInput_1 = require("../inputs/LeadsAvgOrderByAggregateInput");
const LeadsCountOrderByAggregateInput_1 = require("../inputs/LeadsCountOrderByAggregateInput");
const LeadsMaxOrderByAggregateInput_1 = require("../inputs/LeadsMaxOrderByAggregateInput");
const LeadsMinOrderByAggregateInput_1 = require("../inputs/LeadsMinOrderByAggregateInput");
const LeadsSumOrderByAggregateInput_1 = require("../inputs/LeadsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LeadsOrderByWithAggregationInput = class LeadsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "Prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "mobile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "job_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "alt_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "alt_postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "alt_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "alt_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "alt_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "office_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "status_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "opportunity_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "campaign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "lead_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "lead_source_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "referred_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByWithAggregationInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsCountOrderByAggregateInput_1.LeadsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsCountOrderByAggregateInput_1.LeadsCountOrderByAggregateInput)
], LeadsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsAvgOrderByAggregateInput_1.LeadsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsAvgOrderByAggregateInput_1.LeadsAvgOrderByAggregateInput)
], LeadsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsMaxOrderByAggregateInput_1.LeadsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsMaxOrderByAggregateInput_1.LeadsMaxOrderByAggregateInput)
], LeadsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsMinOrderByAggregateInput_1.LeadsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsMinOrderByAggregateInput_1.LeadsMinOrderByAggregateInput)
], LeadsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsSumOrderByAggregateInput_1.LeadsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsSumOrderByAggregateInput_1.LeadsSumOrderByAggregateInput)
], LeadsOrderByWithAggregationInput.prototype, "_sum", void 0);
LeadsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LeadsOrderByWithAggregationInput", {
        isAbstract: true
    })
], LeadsOrderByWithAggregationInput);
exports.LeadsOrderByWithAggregationInput = LeadsOrderByWithAggregationInput;
