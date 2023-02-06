"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePermissions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsAvgAggregate_1 = require("../outputs/PermissionsAvgAggregate");
const PermissionsCountAggregate_1 = require("../outputs/PermissionsCountAggregate");
const PermissionsMaxAggregate_1 = require("../outputs/PermissionsMaxAggregate");
const PermissionsMinAggregate_1 = require("../outputs/PermissionsMinAggregate");
const PermissionsSumAggregate_1 = require("../outputs/PermissionsSumAggregate");
let AggregatePermissions = class AggregatePermissions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsCountAggregate_1.PermissionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsCountAggregate_1.PermissionsCountAggregate)
], AggregatePermissions.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsAvgAggregate_1.PermissionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsAvgAggregate_1.PermissionsAvgAggregate)
], AggregatePermissions.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsSumAggregate_1.PermissionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsSumAggregate_1.PermissionsSumAggregate)
], AggregatePermissions.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMinAggregate_1.PermissionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMinAggregate_1.PermissionsMinAggregate)
], AggregatePermissions.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMaxAggregate_1.PermissionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMaxAggregate_1.PermissionsMaxAggregate)
], AggregatePermissions.prototype, "_max", void 0);
AggregatePermissions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePermissions", {
        isAbstract: true
    })
], AggregatePermissions);
exports.AggregatePermissions = AggregatePermissions;
