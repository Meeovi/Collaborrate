"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const WorkspacesOrderByRelevanceFieldEnum_1 = require("../../enums/WorkspacesOrderByRelevanceFieldEnum");
let WorkspacesOrderByRelevanceInput = class WorkspacesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesOrderByRelevanceFieldEnum_1.WorkspacesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspacesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByRelevanceInput.prototype, "search", void 0);
WorkspacesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspacesOrderByRelevanceInput", {
        isAbstract: true
    })
], WorkspacesOrderByRelevanceInput);
exports.WorkspacesOrderByRelevanceInput = WorkspacesOrderByRelevanceInput;
