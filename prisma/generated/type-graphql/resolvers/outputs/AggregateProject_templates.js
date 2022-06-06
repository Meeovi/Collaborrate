"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProject_templates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesAvgAggregate_1 = require("../outputs/Project_templatesAvgAggregate");
const Project_templatesCountAggregate_1 = require("../outputs/Project_templatesCountAggregate");
const Project_templatesMaxAggregate_1 = require("../outputs/Project_templatesMaxAggregate");
const Project_templatesMinAggregate_1 = require("../outputs/Project_templatesMinAggregate");
const Project_templatesSumAggregate_1 = require("../outputs/Project_templatesSumAggregate");
let AggregateProject_templates = class AggregateProject_templates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCountAggregate_1.Project_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesCountAggregate_1.Project_templatesCountAggregate)
], AggregateProject_templates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesAvgAggregate_1.Project_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesAvgAggregate_1.Project_templatesAvgAggregate)
], AggregateProject_templates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesSumAggregate_1.Project_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesSumAggregate_1.Project_templatesSumAggregate)
], AggregateProject_templates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMinAggregate_1.Project_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMinAggregate_1.Project_templatesMinAggregate)
], AggregateProject_templates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMaxAggregate_1.Project_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMaxAggregate_1.Project_templatesMaxAggregate)
], AggregateProject_templates.prototype, "_max", void 0);
AggregateProject_templates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProject_templates", {
        isAbstract: true
    })
], AggregateProject_templates);
exports.AggregateProject_templates = AggregateProject_templates;
