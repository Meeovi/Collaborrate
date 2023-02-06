"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsCreateInput_1 = require("../../../inputs/ChannelsCreateInput");
let CreateOneChannelsArgs = class CreateOneChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsCreateInput_1.ChannelsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChannelsCreateInput_1.ChannelsCreateInput)
], CreateOneChannelsArgs.prototype, "data", void 0);
CreateOneChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneChannelsArgs);
exports.CreateOneChannelsArgs = CreateOneChannelsArgs;
