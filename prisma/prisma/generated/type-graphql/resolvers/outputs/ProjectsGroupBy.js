"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ProjectsAvgAggregate_1 = require("../outputs/ProjectsAvgAggregate");
const ProjectsCountAggregate_1 = require("../outputs/ProjectsCountAggregate");
const ProjectsMaxAggregate_1 = require("../outputs/ProjectsMaxAggregate");
const ProjectsMinAggregate_1 = require("../outputs/ProjectsMinAggregate");
const ProjectsSumAggregate_1 = require("../outputs/ProjectsSumAggregate");
let ProjectsGroupBy = class ProjectsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProjectsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "considerworkingdays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "project_template", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCountAggregate_1.ProjectsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCountAggregate_1.ProjectsCountAggregate)
], ProjectsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsAvgAggregate_1.ProjectsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsAvgAggregate_1.ProjectsAvgAggregate)
], ProjectsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsSumAggregate_1.ProjectsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsSumAggregate_1.ProjectsSumAggregate)
], ProjectsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMinAggregate_1.ProjectsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMinAggregate_1.ProjectsMinAggregate)
], ProjectsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMaxAggregate_1.ProjectsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMaxAggregate_1.ProjectsMaxAggregate)
], ProjectsGroupBy.prototype, "_max", void 0);
ProjectsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectsGroupBy", {
        isAbstract: true
    })
], ProjectsGroupBy);
exports.ProjectsGroupBy = ProjectsGroupBy;
