"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersOrderByRelevanceFieldEnum_1 = require("../../enums/ProvidersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ProvidersOrderByRelevanceInput = class ProvidersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersOrderByRelevanceFieldEnum_1.ProvidersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByRelevanceInput.prototype, "search", void 0);
ProvidersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersOrderByRelevanceInput", {
        isAbstract: true
    })
], ProvidersOrderByRelevanceInput);
exports.ProvidersOrderByRelevanceInput = ProvidersOrderByRelevanceInput;
