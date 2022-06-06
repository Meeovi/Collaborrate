"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsAvgOrderByAggregateInput_1 = require("../inputs/AccountsAvgOrderByAggregateInput");
const AccountsCountOrderByAggregateInput_1 = require("../inputs/AccountsCountOrderByAggregateInput");
const AccountsMaxOrderByAggregateInput_1 = require("../inputs/AccountsMaxOrderByAggregateInput");
const AccountsMinOrderByAggregateInput_1 = require("../inputs/AccountsMinOrderByAggregateInput");
const AccountsSumOrderByAggregateInput_1 = require("../inputs/AccountsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountsOrderByWithAggregationInput = class AccountsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "office_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "fax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "alt_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "alt_postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "alt_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "alt_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "alt_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "industry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "employees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "annual_revenue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "member_of", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByWithAggregationInput.prototype, "campaign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCountOrderByAggregateInput_1.AccountsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsCountOrderByAggregateInput_1.AccountsCountOrderByAggregateInput)
], AccountsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsAvgOrderByAggregateInput_1.AccountsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsAvgOrderByAggregateInput_1.AccountsAvgOrderByAggregateInput)
], AccountsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMaxOrderByAggregateInput_1.AccountsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMaxOrderByAggregateInput_1.AccountsMaxOrderByAggregateInput)
], AccountsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsMinOrderByAggregateInput_1.AccountsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsMinOrderByAggregateInput_1.AccountsMinOrderByAggregateInput)
], AccountsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsSumOrderByAggregateInput_1.AccountsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsSumOrderByAggregateInput_1.AccountsSumOrderByAggregateInput)
], AccountsOrderByWithAggregationInput.prototype, "_sum", void 0);
AccountsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountsOrderByWithAggregationInput", {
        isAbstract: true
    })
], AccountsOrderByWithAggregationInput);
exports.AccountsOrderByWithAggregationInput = AccountsOrderByWithAggregationInput;
