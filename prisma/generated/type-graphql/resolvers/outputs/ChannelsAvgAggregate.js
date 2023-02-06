"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChannelsAvgAggregate = class ChannelsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ChannelsAvgAggregate.prototype, "id", void 0);
ChannelsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChannelsAvgAggregate", {
        isAbstract: true
    })
], ChannelsAvgAggregate);
exports.ChannelsAvgAggregate = ChannelsAvgAggregate;
