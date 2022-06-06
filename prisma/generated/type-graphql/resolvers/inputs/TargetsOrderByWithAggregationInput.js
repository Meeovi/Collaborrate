"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsAvgOrderByAggregateInput_1 = require("../inputs/TargetsAvgOrderByAggregateInput");
const TargetsCountOrderByAggregateInput_1 = require("../inputs/TargetsCountOrderByAggregateInput");
const TargetsMaxOrderByAggregateInput_1 = require("../inputs/TargetsMaxOrderByAggregateInput");
const TargetsMinOrderByAggregateInput_1 = require("../inputs/TargetsMinOrderByAggregateInput");
const TargetsSumOrderByAggregateInput_1 = require("../inputs/TargetsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TargetsOrderByWithAggregationInput = class TargetsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "Prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "mobile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "job_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "alt_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "alt_postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "alt_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "alt_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "alt_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "office_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "email_opt_out", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByWithAggregationInput.prototype, "donotcall", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCountOrderByAggregateInput_1.TargetsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsCountOrderByAggregateInput_1.TargetsCountOrderByAggregateInput)
], TargetsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsAvgOrderByAggregateInput_1.TargetsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsAvgOrderByAggregateInput_1.TargetsAvgOrderByAggregateInput)
], TargetsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMaxOrderByAggregateInput_1.TargetsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMaxOrderByAggregateInput_1.TargetsMaxOrderByAggregateInput)
], TargetsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMinOrderByAggregateInput_1.TargetsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMinOrderByAggregateInput_1.TargetsMinOrderByAggregateInput)
], TargetsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsSumOrderByAggregateInput_1.TargetsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsSumOrderByAggregateInput_1.TargetsSumOrderByAggregateInput)
], TargetsOrderByWithAggregationInput.prototype, "_sum", void 0);
TargetsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TargetsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TargetsOrderByWithAggregationInput);
exports.TargetsOrderByWithAggregationInput = TargetsOrderByWithAggregationInput;
