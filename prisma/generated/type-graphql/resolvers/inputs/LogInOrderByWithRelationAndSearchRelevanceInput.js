"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByRelevanceInput_1 = require("../inputs/LogInOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LogInOrderByWithRelationAndSearchRelevanceInput = class LogInOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "expiresIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInOrderByRelevanceInput_1.LogInOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInOrderByRelevanceInput_1.LogInOrderByRelevanceInput)
], LogInOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
LogInOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LogInOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], LogInOrderByWithRelationAndSearchRelevanceInput);
exports.LogInOrderByWithRelationAndSearchRelevanceInput = LogInOrderByWithRelationAndSearchRelevanceInput;
