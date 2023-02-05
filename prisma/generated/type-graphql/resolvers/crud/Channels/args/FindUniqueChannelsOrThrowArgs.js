"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChannelsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let FindUniqueChannelsOrThrowArgs = class FindUniqueChannelsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], FindUniqueChannelsOrThrowArgs.prototype, "where", void 0);
FindUniqueChannelsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChannelsOrThrowArgs);
exports.FindUniqueChannelsOrThrowArgs = FindUniqueChannelsOrThrowArgs;
