"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsOrderByRelevanceFieldEnum_1 = require("../../enums/IntegrationsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let IntegrationsOrderByRelevanceInput = class IntegrationsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsOrderByRelevanceFieldEnum_1.IntegrationsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByRelevanceInput.prototype, "search", void 0);
IntegrationsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsOrderByRelevanceInput", {
        isAbstract: true
    })
], IntegrationsOrderByRelevanceInput);
exports.IntegrationsOrderByRelevanceInput = IntegrationsOrderByRelevanceInput;
