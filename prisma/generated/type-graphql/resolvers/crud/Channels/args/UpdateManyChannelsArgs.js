"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsUpdateManyMutationInput_1 = require("../../../inputs/ChannelsUpdateManyMutationInput");
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
let UpdateManyChannelsArgs = class UpdateManyChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsUpdateManyMutationInput_1.ChannelsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsUpdateManyMutationInput_1.ChannelsUpdateManyMutationInput)
], UpdateManyChannelsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], UpdateManyChannelsArgs.prototype, "where", void 0);
UpdateManyChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyChannelsArgs);
exports.UpdateManyChannelsArgs = UpdateManyChannelsArgs;
