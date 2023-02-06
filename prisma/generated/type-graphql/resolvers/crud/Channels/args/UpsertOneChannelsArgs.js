"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsCreateInput_1 = require("../../../inputs/ChannelsCreateInput");
const ChannelsUpdateInput_1 = require("../../../inputs/ChannelsUpdateInput");
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let UpsertOneChannelsArgs = class UpsertOneChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], UpsertOneChannelsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsCreateInput_1.ChannelsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsCreateInput_1.ChannelsCreateInput)
], UpsertOneChannelsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsUpdateInput_1.ChannelsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsUpdateInput_1.ChannelsUpdateInput)
], UpsertOneChannelsArgs.prototype, "update", void 0);
UpsertOneChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneChannelsArgs);
exports.UpsertOneChannelsArgs = UpsertOneChannelsArgs;
