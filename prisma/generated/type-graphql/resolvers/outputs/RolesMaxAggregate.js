"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesMaxAggregate = class RolesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RolesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxAggregate.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RolesMaxAggregate.prototype, "created_at", void 0);
RolesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RolesMaxAggregate", {
        isAbstract: true
    })
], RolesMaxAggregate);
exports.RolesMaxAggregate = RolesMaxAggregate;
