"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProjects = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsAvgAggregate_1 = require("../outputs/ProjectsAvgAggregate");
const ProjectsCountAggregate_1 = require("../outputs/ProjectsCountAggregate");
const ProjectsMaxAggregate_1 = require("../outputs/ProjectsMaxAggregate");
const ProjectsMinAggregate_1 = require("../outputs/ProjectsMinAggregate");
const ProjectsSumAggregate_1 = require("../outputs/ProjectsSumAggregate");
let AggregateProjects = class AggregateProjects {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCountAggregate_1.ProjectsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCountAggregate_1.ProjectsCountAggregate)
], AggregateProjects.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsAvgAggregate_1.ProjectsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsAvgAggregate_1.ProjectsAvgAggregate)
], AggregateProjects.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsSumAggregate_1.ProjectsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsSumAggregate_1.ProjectsSumAggregate)
], AggregateProjects.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMinAggregate_1.ProjectsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMinAggregate_1.ProjectsMinAggregate)
], AggregateProjects.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMaxAggregate_1.ProjectsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMaxAggregate_1.ProjectsMaxAggregate)
], AggregateProjects.prototype, "_max", void 0);
AggregateProjects = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProjects", {
        isAbstract: true
    })
], AggregateProjects);
exports.AggregateProjects = AggregateProjects;
