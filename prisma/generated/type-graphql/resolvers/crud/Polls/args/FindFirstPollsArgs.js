"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PollsOrderByWithRelationAndSearchRelevanceInput");
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
const PollsScalarFieldEnum_1 = require("../../../../enums/PollsScalarFieldEnum");
let FindFirstPollsArgs = class FindFirstPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], FindFirstPollsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsOrderByWithRelationAndSearchRelevanceInput_1.PollsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPollsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], FindFirstPollsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPollsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPollsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsScalarFieldEnum_1.PollsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPollsArgs.prototype, "distinct", void 0);
FindFirstPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPollsArgs);
exports.FindFirstPollsArgs = FindFirstPollsArgs;
