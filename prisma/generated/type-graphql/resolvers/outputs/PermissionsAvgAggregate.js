"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PermissionsAvgAggregate = class PermissionsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PermissionsAvgAggregate.prototype, "id", void 0);
PermissionsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PermissionsAvgAggregate", {
        isAbstract: true
    })
], PermissionsAvgAggregate);
exports.PermissionsAvgAggregate = PermissionsAvgAggregate;
