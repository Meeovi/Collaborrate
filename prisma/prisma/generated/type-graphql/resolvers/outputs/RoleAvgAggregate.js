"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleAvgAggregate = class RoleAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleAvgAggregate.prototype, "id", void 0);
RoleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleAvgAggregate", {
        isAbstract: true
    })
], RoleAvgAggregate);
exports.RoleAvgAggregate = RoleAvgAggregate;
