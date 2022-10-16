"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmOrderByRelevanceFieldEnum_1 = require("../../enums/ImportmOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ImportmOrderByRelevanceInput = class ImportmOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmOrderByRelevanceFieldEnum_1.ImportmOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ImportmOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByRelevanceInput.prototype, "search", void 0);
ImportmOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ImportmOrderByRelevanceInput", {
        isAbstract: true
    })
], ImportmOrderByRelevanceInput);
exports.ImportmOrderByRelevanceInput = ImportmOrderByRelevanceInput;
