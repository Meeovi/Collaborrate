"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsOrderByRelevanceInput_1 = require("../inputs/EmailsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmailsOrderByWithRelationAndSearchRelevanceInput = class EmailsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "bcc", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "cc", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "staff_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsOrderByRelevanceInput_1.EmailsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsOrderByRelevanceInput_1.EmailsOrderByRelevanceInput)
], EmailsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
EmailsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], EmailsOrderByWithRelationAndSearchRelevanceInput);
exports.EmailsOrderByWithRelationAndSearchRelevanceInput = EmailsOrderByWithRelationAndSearchRelevanceInput;
