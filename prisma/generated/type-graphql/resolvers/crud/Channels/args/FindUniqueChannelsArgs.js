"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let FindUniqueChannelsArgs = class FindUniqueChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], FindUniqueChannelsArgs.prototype, "where", void 0);
FindUniqueChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChannelsArgs);
exports.FindUniqueChannelsArgs = FindUniqueChannelsArgs;
