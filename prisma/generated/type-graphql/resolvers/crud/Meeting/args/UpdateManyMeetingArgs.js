"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingUpdateManyMutationInput_1 = require("../../../inputs/MeetingUpdateManyMutationInput");
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
let UpdateManyMeetingArgs = class UpdateManyMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingUpdateManyMutationInput_1.MeetingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingUpdateManyMutationInput_1.MeetingUpdateManyMutationInput)
], UpdateManyMeetingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], UpdateManyMeetingArgs.prototype, "where", void 0);
UpdateManyMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMeetingArgs);
exports.UpdateManyMeetingArgs = UpdateManyMeetingArgs;
