"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
let DeleteManyChannelsArgs = class DeleteManyChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], DeleteManyChannelsArgs.prototype, "where", void 0);
DeleteManyChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyChannelsArgs);
exports.DeleteManyChannelsArgs = DeleteManyChannelsArgs;
