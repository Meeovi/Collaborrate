"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsOrderByRelevanceInput_1 = require("../inputs/CustomizationsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomizationsOrderByWithRelationAndSearchRelevanceInput = class CustomizationsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "site_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "nav_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "banner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "footer_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "announcement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "site_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "allow_signup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsOrderByRelevanceInput_1.CustomizationsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsOrderByRelevanceInput_1.CustomizationsOrderByRelevanceInput)
], CustomizationsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CustomizationsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CustomizationsOrderByWithRelationAndSearchRelevanceInput);
exports.CustomizationsOrderByWithRelationAndSearchRelevanceInput = CustomizationsOrderByWithRelationAndSearchRelevanceInput;
