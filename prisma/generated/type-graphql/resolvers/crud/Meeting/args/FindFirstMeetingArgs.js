"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/MeetingOrderByWithRelationAndSearchRelevanceInput");
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
const MeetingScalarFieldEnum_1 = require("../../../../enums/MeetingScalarFieldEnum");
let FindFirstMeetingArgs = class FindFirstMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], FindFirstMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingOrderByWithRelationAndSearchRelevanceInput_1.MeetingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMeetingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], FindFirstMeetingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMeetingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMeetingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingScalarFieldEnum_1.MeetingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMeetingArgs.prototype, "distinct", void 0);
FindFirstMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstMeetingArgs);
exports.FindFirstMeetingArgs = FindFirstMeetingArgs;
