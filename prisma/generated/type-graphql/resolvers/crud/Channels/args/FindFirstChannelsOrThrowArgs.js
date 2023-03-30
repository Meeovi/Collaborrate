"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChannelsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByWithRelationInput_1 = require("../../../inputs/ChannelsOrderByWithRelationInput");
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
const ChannelsScalarFieldEnum_1 = require("../../../../enums/ChannelsScalarFieldEnum");
let FindFirstChannelsOrThrowArgs = class FindFirstChannelsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], FindFirstChannelsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsOrderByWithRelationInput_1.ChannelsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChannelsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], FindFirstChannelsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChannelsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChannelsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsScalarFieldEnum_1.ChannelsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChannelsOrThrowArgs.prototype, "distinct", void 0);
FindFirstChannelsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstChannelsOrThrowArgs);
exports.FindFirstChannelsOrThrowArgs = FindFirstChannelsOrThrowArgs;
