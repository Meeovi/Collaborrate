"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProjectsAvgAggregate = class ProjectsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsAvgAggregate.prototype, "staff_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsAvgAggregate.prototype, "task_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectsAvgAggregate.prototype, "ticket_id", void 0);
ProjectsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectsAvgAggregate", {
        isAbstract: true
    })
], ProjectsAvgAggregate);
exports.ProjectsAvgAggregate = ProjectsAvgAggregate;
