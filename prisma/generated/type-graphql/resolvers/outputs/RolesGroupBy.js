"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesAvgAggregate_1 = require("../outputs/RolesAvgAggregate");
const RolesCountAggregate_1 = require("../outputs/RolesCountAggregate");
const RolesMaxAggregate_1 = require("../outputs/RolesMaxAggregate");
const RolesMinAggregate_1 = require("../outputs/RolesMinAggregate");
const RolesSumAggregate_1 = require("../outputs/RolesSumAggregate");
let RolesGroupBy = class RolesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RolesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RolesGroupBy.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RolesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesCountAggregate_1.RolesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesCountAggregate_1.RolesCountAggregate)
], RolesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesAvgAggregate_1.RolesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesAvgAggregate_1.RolesAvgAggregate)
], RolesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesSumAggregate_1.RolesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesSumAggregate_1.RolesSumAggregate)
], RolesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMinAggregate_1.RolesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMinAggregate_1.RolesMinAggregate)
], RolesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMaxAggregate_1.RolesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMaxAggregate_1.RolesMaxAggregate)
], RolesGroupBy.prototype, "_max", void 0);
RolesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RolesGroupBy", {
        isAbstract: true
    })
], RolesGroupBy);
exports.RolesGroupBy = RolesGroupBy;
