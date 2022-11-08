"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveOrderByRelevanceInput_1 = require("../inputs/DeepdiveOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DeepdiveOrderByWithRelationAndSearchRelevanceInput = class DeepdiveOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveOrderByRelevanceInput_1.DeepdiveOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveOrderByRelevanceInput_1.DeepdiveOrderByRelevanceInput)
], DeepdiveOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DeepdiveOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DeepdiveOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DeepdiveOrderByWithRelationAndSearchRelevanceInput);
exports.DeepdiveOrderByWithRelationAndSearchRelevanceInput = DeepdiveOrderByWithRelationAndSearchRelevanceInput;
