"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUsers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersAvgAggregate_1 = require("../outputs/UsersAvgAggregate");
const UsersCountAggregate_1 = require("../outputs/UsersCountAggregate");
const UsersMaxAggregate_1 = require("../outputs/UsersMaxAggregate");
const UsersMinAggregate_1 = require("../outputs/UsersMinAggregate");
const UsersSumAggregate_1 = require("../outputs/UsersSumAggregate");
let AggregateUsers = class AggregateUsers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCountAggregate_1.UsersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCountAggregate_1.UsersCountAggregate)
], AggregateUsers.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersAvgAggregate_1.UsersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersAvgAggregate_1.UsersAvgAggregate)
], AggregateUsers.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersSumAggregate_1.UsersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersSumAggregate_1.UsersSumAggregate)
], AggregateUsers.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMinAggregate_1.UsersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMinAggregate_1.UsersMinAggregate)
], AggregateUsers.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMaxAggregate_1.UsersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMaxAggregate_1.UsersMaxAggregate)
], AggregateUsers.prototype, "_max", void 0);
AggregateUsers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUsers", {
        isAbstract: true
    })
], AggregateUsers);
exports.AggregateUsers = AggregateUsers;
