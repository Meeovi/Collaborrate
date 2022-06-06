"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingCreateInput_1 = require("../../../inputs/MeetingCreateInput");
const MeetingUpdateInput_1 = require("../../../inputs/MeetingUpdateInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let UpsertMeetingArgs = class UpsertMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], UpsertMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCreateInput_1.MeetingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingCreateInput_1.MeetingCreateInput)
], UpsertMeetingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingUpdateInput_1.MeetingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingUpdateInput_1.MeetingUpdateInput)
], UpsertMeetingArgs.prototype, "update", void 0);
UpsertMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMeetingArgs);
exports.UpsertMeetingArgs = UpsertMeetingArgs;
