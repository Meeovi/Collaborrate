"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
let DeleteManyMeetingArgs = class DeleteManyMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], DeleteManyMeetingArgs.prototype, "where", void 0);
DeleteManyMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMeetingArgs);
exports.DeleteManyMeetingArgs = DeleteManyMeetingArgs;
