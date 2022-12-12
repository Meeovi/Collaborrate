"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsCreateManyInput_1 = require("../../../inputs/ChannelsCreateManyInput");
let CreateManyChannelsArgs = class CreateManyChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsCreateManyInput_1.ChannelsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyChannelsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyChannelsArgs.prototype, "skipDuplicates", void 0);
CreateManyChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyChannelsArgs);
exports.CreateManyChannelsArgs = CreateManyChannelsArgs;
