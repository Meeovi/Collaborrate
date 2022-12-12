"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByRelevanceFieldEnum_1 = require("../../enums/GlossaryOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let GlossaryOrderByRelevanceInput = class GlossaryOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryOrderByRelevanceFieldEnum_1.GlossaryOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GlossaryOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByRelevanceInput.prototype, "search", void 0);
GlossaryOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryOrderByRelevanceInput", {
        isAbstract: true
    })
], GlossaryOrderByRelevanceInput);
exports.GlossaryOrderByRelevanceInput = GlossaryOrderByRelevanceInput;
