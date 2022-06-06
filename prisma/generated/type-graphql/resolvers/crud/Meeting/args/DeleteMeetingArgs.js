"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let DeleteMeetingArgs = class DeleteMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], DeleteMeetingArgs.prototype, "where", void 0);
DeleteMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteMeetingArgs);
exports.DeleteMeetingArgs = DeleteMeetingArgs;
