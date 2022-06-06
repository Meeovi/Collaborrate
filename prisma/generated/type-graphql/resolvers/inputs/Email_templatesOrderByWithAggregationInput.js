"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesAvgOrderByAggregateInput_1 = require("../inputs/Email_templatesAvgOrderByAggregateInput");
const Email_templatesCountOrderByAggregateInput_1 = require("../inputs/Email_templatesCountOrderByAggregateInput");
const Email_templatesMaxOrderByAggregateInput_1 = require("../inputs/Email_templatesMaxOrderByAggregateInput");
const Email_templatesMinOrderByAggregateInput_1 = require("../inputs/Email_templatesMinOrderByAggregateInput");
const Email_templatesSumOrderByAggregateInput_1 = require("../inputs/Email_templatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Email_templatesOrderByWithAggregationInput = class Email_templatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "insert_variable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCountOrderByAggregateInput_1.Email_templatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesCountOrderByAggregateInput_1.Email_templatesCountOrderByAggregateInput)
], Email_templatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesAvgOrderByAggregateInput_1.Email_templatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesAvgOrderByAggregateInput_1.Email_templatesAvgOrderByAggregateInput)
], Email_templatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMaxOrderByAggregateInput_1.Email_templatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMaxOrderByAggregateInput_1.Email_templatesMaxOrderByAggregateInput)
], Email_templatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMinOrderByAggregateInput_1.Email_templatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMinOrderByAggregateInput_1.Email_templatesMinOrderByAggregateInput)
], Email_templatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesSumOrderByAggregateInput_1.Email_templatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesSumOrderByAggregateInput_1.Email_templatesSumOrderByAggregateInput)
], Email_templatesOrderByWithAggregationInput.prototype, "_sum", void 0);
Email_templatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Email_templatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Email_templatesOrderByWithAggregationInput);
exports.Email_templatesOrderByWithAggregationInput = Email_templatesOrderByWithAggregationInput;
