"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UsersAvgAggregate = class UsersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UsersAvgAggregate.prototype, "id", void 0);
UsersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsersAvgAggregate", {
        isAbstract: true
    })
], UsersAvgAggregate);
exports.UsersAvgAggregate = UsersAvgAggregate;
