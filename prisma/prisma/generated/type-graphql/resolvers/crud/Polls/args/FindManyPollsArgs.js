"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsOrderByWithRelationInput_1 = require("../../../inputs/PollsOrderByWithRelationInput");
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
const PollsScalarFieldEnum_1 = require("../../../../enums/PollsScalarFieldEnum");
let FindManyPollsArgs = class FindManyPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], FindManyPollsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsOrderByWithRelationInput_1.PollsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPollsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], FindManyPollsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPollsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPollsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsScalarFieldEnum_1.PollsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPollsArgs.prototype, "distinct", void 0);
FindManyPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPollsArgs);
exports.FindManyPollsArgs = FindManyPollsArgs;
