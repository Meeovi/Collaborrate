"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleMinAggregate = class RoleMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMinAggregate.prototype, "role_name", void 0);
RoleMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleMinAggregate", {
        isAbstract: true
    })
], RoleMinAggregate);
exports.RoleMinAggregate = RoleMinAggregate;
