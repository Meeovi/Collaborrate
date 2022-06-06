"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleAvgAggregate_1 = require("../outputs/RoleAvgAggregate");
const RoleCountAggregate_1 = require("../outputs/RoleCountAggregate");
const RoleMaxAggregate_1 = require("../outputs/RoleMaxAggregate");
const RoleMinAggregate_1 = require("../outputs/RoleMinAggregate");
const RoleSumAggregate_1 = require("../outputs/RoleSumAggregate");
let RoleGroupBy = class RoleGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleGroupBy.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCountAggregate_1.RoleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCountAggregate_1.RoleCountAggregate)
], RoleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleAvgAggregate_1.RoleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleAvgAggregate_1.RoleAvgAggregate)
], RoleGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleSumAggregate_1.RoleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleSumAggregate_1.RoleSumAggregate)
], RoleGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMinAggregate_1.RoleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMinAggregate_1.RoleMinAggregate)
], RoleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMaxAggregate_1.RoleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMaxAggregate_1.RoleMaxAggregate)
], RoleGroupBy.prototype, "_max", void 0);
RoleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleGroupBy", {
        isAbstract: true
    })
], RoleGroupBy);
exports.RoleGroupBy = RoleGroupBy;
