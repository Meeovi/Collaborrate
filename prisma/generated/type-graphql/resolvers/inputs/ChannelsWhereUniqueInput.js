"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ChannelsWhereUniqueInput = class ChannelsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ChannelsWhereUniqueInput.prototype, "id", void 0);
ChannelsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsWhereUniqueInput", {
        isAbstract: true
    })
], ChannelsWhereUniqueInput);
exports.ChannelsWhereUniqueInput = ChannelsWhereUniqueInput;
