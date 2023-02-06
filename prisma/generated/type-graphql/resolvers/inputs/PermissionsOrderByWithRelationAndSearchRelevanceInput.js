"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsOrderByRelevanceInput_1 = require("../inputs/PermissionsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsOrderByWithRelationAndSearchRelevanceInput = class PermissionsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "read", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsOrderByRelevanceInput_1.PermissionsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsOrderByRelevanceInput_1.PermissionsOrderByRelevanceInput)
], PermissionsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PermissionsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PermissionsOrderByWithRelationAndSearchRelevanceInput);
exports.PermissionsOrderByWithRelationAndSearchRelevanceInput = PermissionsOrderByWithRelationAndSearchRelevanceInput;
