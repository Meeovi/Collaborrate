"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsAvgOrderByAggregateInput_1 = require("../inputs/EmailsAvgOrderByAggregateInput");
const EmailsCountOrderByAggregateInput_1 = require("../inputs/EmailsCountOrderByAggregateInput");
const EmailsMaxOrderByAggregateInput_1 = require("../inputs/EmailsMaxOrderByAggregateInput");
const EmailsMinOrderByAggregateInput_1 = require("../inputs/EmailsMinOrderByAggregateInput");
const EmailsSumOrderByAggregateInput_1 = require("../inputs/EmailsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmailsOrderByWithAggregationInput = class EmailsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCountOrderByAggregateInput_1.EmailsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCountOrderByAggregateInput_1.EmailsCountOrderByAggregateInput)
], EmailsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsAvgOrderByAggregateInput_1.EmailsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsAvgOrderByAggregateInput_1.EmailsAvgOrderByAggregateInput)
], EmailsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMaxOrderByAggregateInput_1.EmailsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMaxOrderByAggregateInput_1.EmailsMaxOrderByAggregateInput)
], EmailsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsMinOrderByAggregateInput_1.EmailsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsMinOrderByAggregateInput_1.EmailsMinOrderByAggregateInput)
], EmailsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsSumOrderByAggregateInput_1.EmailsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsSumOrderByAggregateInput_1.EmailsSumOrderByAggregateInput)
], EmailsOrderByWithAggregationInput.prototype, "_sum", void 0);
EmailsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsOrderByWithAggregationInput", {
        isAbstract: true
    })
], EmailsOrderByWithAggregationInput);
exports.EmailsOrderByWithAggregationInput = EmailsOrderByWithAggregationInput;
