"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleSumAggregate = class RoleSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleSumAggregate.prototype, "id", void 0);
RoleSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleSumAggregate", {
        isAbstract: true
    })
], RoleSumAggregate);
exports.RoleSumAggregate = RoleSumAggregate;
