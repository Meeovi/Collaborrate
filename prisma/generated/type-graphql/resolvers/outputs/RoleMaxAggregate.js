"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleMaxAggregate = class RoleMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxAggregate.prototype, "role_name", void 0);
RoleMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleMaxAggregate", {
        isAbstract: true
    })
], RoleMaxAggregate);
exports.RoleMaxAggregate = RoleMaxAggregate;
