"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingCreateInput_1 = require("../../../inputs/MeetingCreateInput");
let CreateMeetingArgs = class CreateMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCreateInput_1.MeetingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingCreateInput_1.MeetingCreateInput)
], CreateMeetingArgs.prototype, "data", void 0);
CreateMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMeetingArgs);
exports.CreateMeetingArgs = CreateMeetingArgs;
