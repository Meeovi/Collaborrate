"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let DeleteOneChannelsArgs = class DeleteOneChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], DeleteOneChannelsArgs.prototype, "where", void 0);
DeleteOneChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneChannelsArgs);
exports.DeleteOneChannelsArgs = DeleteOneChannelsArgs;
