"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsUpdateInput_1 = require("../../../inputs/ChannelsUpdateInput");
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let UpdateOneChannelsArgs = class UpdateOneChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsUpdateInput_1.ChannelsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsUpdateInput_1.ChannelsUpdateInput)
], UpdateOneChannelsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], UpdateOneChannelsArgs.prototype, "where", void 0);
UpdateOneChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneChannelsArgs);
exports.UpdateOneChannelsArgs = UpdateOneChannelsArgs;
