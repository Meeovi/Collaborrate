"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsOrderByRelevanceFieldEnum_1 = require("../../enums/ProjectsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectsOrderByRelevanceInput = class ProjectsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsOrderByRelevanceFieldEnum_1.ProjectsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByRelevanceInput.prototype, "search", void 0);
ProjectsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsOrderByRelevanceInput", {
        isAbstract: true
    })
], ProjectsOrderByRelevanceInput);
exports.ProjectsOrderByRelevanceInput = ProjectsOrderByRelevanceInput;
