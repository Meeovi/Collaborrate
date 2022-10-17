"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsOrderByRelevanceFieldEnum_1 = require("../../enums/SettingsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsOrderByRelevanceInput = class SettingsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsOrderByRelevanceFieldEnum_1.SettingsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsOrderByRelevanceInput.prototype, "search", void 0);
SettingsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingsOrderByRelevanceInput);
exports.SettingsOrderByRelevanceInput = SettingsOrderByRelevanceInput;
