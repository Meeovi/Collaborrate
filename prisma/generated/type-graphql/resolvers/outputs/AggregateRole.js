"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRole = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleAvgAggregate_1 = require("../outputs/RoleAvgAggregate");
const RoleCountAggregate_1 = require("../outputs/RoleCountAggregate");
const RoleMaxAggregate_1 = require("../outputs/RoleMaxAggregate");
const RoleMinAggregate_1 = require("../outputs/RoleMinAggregate");
const RoleSumAggregate_1 = require("../outputs/RoleSumAggregate");
let AggregateRole = class AggregateRole {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCountAggregate_1.RoleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCountAggregate_1.RoleCountAggregate)
], AggregateRole.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleAvgAggregate_1.RoleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleAvgAggregate_1.RoleAvgAggregate)
], AggregateRole.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleSumAggregate_1.RoleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleSumAggregate_1.RoleSumAggregate)
], AggregateRole.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMinAggregate_1.RoleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMinAggregate_1.RoleMinAggregate)
], AggregateRole.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMaxAggregate_1.RoleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMaxAggregate_1.RoleMaxAggregate)
], AggregateRole.prototype, "_max", void 0);
AggregateRole = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRole", {
        isAbstract: true
    })
], AggregateRole);
exports.AggregateRole = AggregateRole;
