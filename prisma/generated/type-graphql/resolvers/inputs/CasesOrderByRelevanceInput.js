"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesOrderByRelevanceFieldEnum_1 = require("../../enums/CasesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CasesOrderByRelevanceInput = class CasesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesOrderByRelevanceFieldEnum_1.CasesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CasesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByRelevanceInput.prototype, "search", void 0);
CasesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CasesOrderByRelevanceInput", {
        isAbstract: true
    })
], CasesOrderByRelevanceInput);
exports.CasesOrderByRelevanceInput = CasesOrderByRelevanceInput;
