"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenOrderByRelevanceInput_1 = require("../inputs/ApitokenOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ApitokenOrderByWithRelationAndSearchRelevanceInput = class ApitokenOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenOrderByRelevanceInput_1.ApitokenOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenOrderByRelevanceInput_1.ApitokenOrderByRelevanceInput)
], ApitokenOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ApitokenOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ApitokenOrderByWithRelationAndSearchRelevanceInput);
exports.ApitokenOrderByWithRelationAndSearchRelevanceInput = ApitokenOrderByWithRelationAndSearchRelevanceInput;
