"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ChannelsOrderByWithRelationAndSearchRelevanceInput");
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
const ChannelsWhereUniqueInput_1 = require("../../../inputs/ChannelsWhereUniqueInput");
const ChannelsScalarFieldEnum_1 = require("../../../../enums/ChannelsScalarFieldEnum");
let FindFirstChannelsArgs = class FindFirstChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], FindFirstChannelsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsOrderByWithRelationAndSearchRelevanceInput_1.ChannelsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChannelsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereUniqueInput_1.ChannelsWhereUniqueInput)
], FindFirstChannelsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChannelsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChannelsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsScalarFieldEnum_1.ChannelsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChannelsArgs.prototype, "distinct", void 0);
FindFirstChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstChannelsArgs);
exports.FindFirstChannelsArgs = FindFirstChannelsArgs;
