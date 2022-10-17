"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsOrderByRelevanceFieldEnum_1 = require("../../enums/PluginsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PluginsOrderByRelevanceInput = class PluginsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsOrderByRelevanceFieldEnum_1.PluginsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PluginsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByRelevanceInput.prototype, "search", void 0);
PluginsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PluginsOrderByRelevanceInput", {
        isAbstract: true
    })
], PluginsOrderByRelevanceInput);
exports.PluginsOrderByRelevanceInput = PluginsOrderByRelevanceInput;
