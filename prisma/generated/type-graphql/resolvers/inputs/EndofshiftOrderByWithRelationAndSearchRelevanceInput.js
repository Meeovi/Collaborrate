"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftOrderByRelevanceInput_1 = require("../inputs/EndofshiftOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EndofshiftOrderByWithRelationAndSearchRelevanceInput = class EndofshiftOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "mcms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "next_shift", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftOrderByRelevanceInput_1.EndofshiftOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftOrderByRelevanceInput_1.EndofshiftOrderByRelevanceInput)
], EndofshiftOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
EndofshiftOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EndofshiftOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], EndofshiftOrderByWithRelationAndSearchRelevanceInput);
exports.EndofshiftOrderByWithRelationAndSearchRelevanceInput = EndofshiftOrderByWithRelationAndSearchRelevanceInput;
