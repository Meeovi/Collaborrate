"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByWithRelationInput_1 = require("../../../inputs/ChannelsOrderByWithRelationInput");
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
let AggregateChannelsArgs = class AggregateChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], AggregateChannelsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsOrderByWithRelationInput_1.ChannelsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateChannelsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], AggregateChannelsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChannelsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChannelsArgs.prototype, "skip", void 0);
AggregateChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateChannelsArgs);
exports.AggregateChannelsArgs = AggregateChannelsArgs;
