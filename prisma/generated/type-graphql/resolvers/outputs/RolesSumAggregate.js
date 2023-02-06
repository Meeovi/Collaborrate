"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesSumAggregate = class RolesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RolesSumAggregate.prototype, "id", void 0);
RolesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RolesSumAggregate", {
        isAbstract: true
    })
], RolesSumAggregate);
exports.RolesSumAggregate = RolesSumAggregate;
