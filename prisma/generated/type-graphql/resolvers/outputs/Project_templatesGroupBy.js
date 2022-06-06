"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Project_templatesAvgAggregate_1 = require("../outputs/Project_templatesAvgAggregate");
const Project_templatesCountAggregate_1 = require("../outputs/Project_templatesCountAggregate");
const Project_templatesMaxAggregate_1 = require("../outputs/Project_templatesMaxAggregate");
const Project_templatesMinAggregate_1 = require("../outputs/Project_templatesMinAggregate");
const Project_templatesSumAggregate_1 = require("../outputs/Project_templatesSumAggregate");
let Project_templatesGroupBy = class Project_templatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Project_templatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "consider_working_days", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCountAggregate_1.Project_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesCountAggregate_1.Project_templatesCountAggregate)
], Project_templatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesAvgAggregate_1.Project_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesAvgAggregate_1.Project_templatesAvgAggregate)
], Project_templatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesSumAggregate_1.Project_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesSumAggregate_1.Project_templatesSumAggregate)
], Project_templatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMinAggregate_1.Project_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMinAggregate_1.Project_templatesMinAggregate)
], Project_templatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMaxAggregate_1.Project_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMaxAggregate_1.Project_templatesMaxAggregate)
], Project_templatesGroupBy.prototype, "_max", void 0);
Project_templatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Project_templatesGroupBy", {
        isAbstract: true
    })
], Project_templatesGroupBy);
exports.Project_templatesGroupBy = Project_templatesGroupBy;
