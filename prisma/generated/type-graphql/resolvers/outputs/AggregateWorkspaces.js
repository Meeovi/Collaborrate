"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspaces = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesAvgAggregate_1 = require("../outputs/WorkspacesAvgAggregate");
const WorkspacesCountAggregate_1 = require("../outputs/WorkspacesCountAggregate");
const WorkspacesMaxAggregate_1 = require("../outputs/WorkspacesMaxAggregate");
const WorkspacesMinAggregate_1 = require("../outputs/WorkspacesMinAggregate");
const WorkspacesSumAggregate_1 = require("../outputs/WorkspacesSumAggregate");
let AggregateWorkspaces = class AggregateWorkspaces {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesCountAggregate_1.WorkspacesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesCountAggregate_1.WorkspacesCountAggregate)
], AggregateWorkspaces.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesAvgAggregate_1.WorkspacesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesAvgAggregate_1.WorkspacesAvgAggregate)
], AggregateWorkspaces.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesSumAggregate_1.WorkspacesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesSumAggregate_1.WorkspacesSumAggregate)
], AggregateWorkspaces.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMinAggregate_1.WorkspacesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMinAggregate_1.WorkspacesMinAggregate)
], AggregateWorkspaces.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMaxAggregate_1.WorkspacesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMaxAggregate_1.WorkspacesMaxAggregate)
], AggregateWorkspaces.prototype, "_max", void 0);
AggregateWorkspaces = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWorkspaces", {
        isAbstract: true
    })
], AggregateWorkspaces);
exports.AggregateWorkspaces = AggregateWorkspaces;
