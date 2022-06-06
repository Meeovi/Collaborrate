"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByWithRelationInput_1 = require("../../../inputs/MeetingOrderByWithRelationInput");
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
const MeetingScalarFieldEnum_1 = require("../../../../enums/MeetingScalarFieldEnum");
let FindManyMeetingArgs = class FindManyMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], FindManyMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingOrderByWithRelationInput_1.MeetingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMeetingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], FindManyMeetingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMeetingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMeetingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingScalarFieldEnum_1.MeetingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMeetingArgs.prototype, "distinct", void 0);
FindManyMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMeetingArgs);
exports.FindManyMeetingArgs = FindManyMeetingArgs;
