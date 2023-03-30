"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesAvgAggregate = class RolesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RolesAvgAggregate.prototype, "id", void 0);
RolesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RolesAvgAggregate", {
        isAbstract: true
    })
], RolesAvgAggregate);
exports.RolesAvgAggregate = RolesAvgAggregate;
