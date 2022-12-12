"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesOrderByRelevanceInput_1 = require("../inputs/RolesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RolesOrderByWithRelationAndSearchRelevanceInput = class RolesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithRelationAndSearchRelevanceInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesOrderByRelevanceInput_1.RolesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesOrderByRelevanceInput_1.RolesOrderByRelevanceInput)
], RolesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
RolesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], RolesOrderByWithRelationAndSearchRelevanceInput);
exports.RolesOrderByWithRelationAndSearchRelevanceInput = RolesOrderByWithRelationAndSearchRelevanceInput;
