"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmailsOrderByWithRelationInput = class EmailsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], EmailsOrderByWithRelationInput.prototype, "customers", void 0);
EmailsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsOrderByWithRelationInput", {
        isAbstract: true
    })
], EmailsOrderByWithRelationInput);
exports.EmailsOrderByWithRelationInput = EmailsOrderByWithRelationInput;
