"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoles = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesAvgAggregate_1 = require("../outputs/RolesAvgAggregate");
const RolesCountAggregate_1 = require("../outputs/RolesCountAggregate");
const RolesMaxAggregate_1 = require("../outputs/RolesMaxAggregate");
const RolesMinAggregate_1 = require("../outputs/RolesMinAggregate");
const RolesSumAggregate_1 = require("../outputs/RolesSumAggregate");
let AggregateRoles = class AggregateRoles {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesCountAggregate_1.RolesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesCountAggregate_1.RolesCountAggregate)
], AggregateRoles.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesAvgAggregate_1.RolesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesAvgAggregate_1.RolesAvgAggregate)
], AggregateRoles.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesSumAggregate_1.RolesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesSumAggregate_1.RolesSumAggregate)
], AggregateRoles.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMinAggregate_1.RolesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMinAggregate_1.RolesMinAggregate)
], AggregateRoles.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMaxAggregate_1.RolesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMaxAggregate_1.RolesMaxAggregate)
], AggregateRoles.prototype, "_max", void 0);
AggregateRoles = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRoles", {
        isAbstract: true
    })
], AggregateRoles);
exports.AggregateRoles = AggregateRoles;
